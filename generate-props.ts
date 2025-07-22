import fs from 'fs';
import path from 'path';
import process from 'process';

/**
 * Enhanced script to automatically generate props arrays from TypeScript interface files
 * Usage:
 * - Single component: npx tsx generate-props.ts <path-to-types-file> <interface-name>
 * - All components: npx tsx generate-props.ts --all
 *
 * Example: npx tsx generate-props.ts ./node_modules/@seeqdev/qomponents/dist/TextArea/TextArea.types.d.ts TextAreaProps
 */

interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

interface TypeDefinition {
  name: string;
  description: string;
  properties: PropDefinition[];
}

interface ParseResult {
  mainProps: PropDefinition[];
  typeDefinitions: TypeDefinition[];
  inheritedProps: PropDefinition[];
}

interface ComponentInfo {
  name: string;
  typesFile: string;
  interfaceName: string;
}

interface GenerationResult {
  component: string;
  mainPropsCount: number;
  typeDefinitions: string[];
  inheritedPropsCount: number;
  outputFile: string;
}

const parseTypeScriptInterface = (filePath: string, interfaceName: string): ParseResult => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Find all interfaces and sub-interfaces in the file
    const allInterfaces: Record<string, string> = {};

    // Also collect type aliases
    const allTypeAliases: Record<string, string> = {};

    // First pass: collect all interface definitions (including non-exported ones)
    const interfaceRegex =
      /(?:export\s+)?interface\s+(\w+)(?:\s+extends\s+[\w[\]<>,.|\s]+)?\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/gs;
    let match: RegExpExecArray | null;

    while ((match = interfaceRegex.exec(content)) !== null) {
      const [, name, body] = match;
      allInterfaces[name] = body;
    }

    // Collect type aliases
    const typeAliasRegex = /export\s+type\s+(\w+)\s*=\s*([^;]+);/gs;
    while ((match = typeAliasRegex.exec(content)) !== null) {
      const [, name, definition] = match;
      allTypeAliases[name] = definition.trim();
    }

    if (!allInterfaces[interfaceName]) {
      throw new Error(`Interface ${interfaceName} not found in ${filePath}`);
    }

    // Parse the main interface and find referenced interfaces
    const result: ParseResult = {
      mainProps: parseInterfaceBody(allInterfaces[interfaceName]),
      typeDefinitions: [],
      inheritedProps: [],
    };

    // Find extended interfaces (inheritance)
    const extendsMatch = content.match(new RegExp(`interface\\s+${interfaceName}\\s+extends\\s+([\\w\\s,]+)\\s*\\{`));
    if (extendsMatch) {
      const extendedInterfaces = extendsMatch[1].split(',').map((name) => name.trim());

      for (const extendedInterface of extendedInterfaces) {
        // Look for common inherited interfaces
        if (extendedInterface.includes('TooltipComponentProps')) {
          result.inheritedProps = getTooltipProps();
        }
        // Add other common inherited interfaces as needed
      }
    }

    // Find all interfaces referenced in the main interface
    const mainBody = allInterfaces[interfaceName];

    // Look for array type references (e.g., DropdownItems[], Props[])
    const arrayTypeReferences = [...mainBody.matchAll(/(\w+)\[\]/g)]
      .map((match) => match[1])
      .filter((name) => allInterfaces[name]);

    // Look for direct type references in properties
    const directTypeReferences = [...mainBody.matchAll(/:\s*(\w+)(?:\s*\||\s*;|\s*$)/g)]
      .map((match) => match[1])
      .filter((name) => allInterfaces[name] && name !== interfaceName);

    // Look for union type references (e.g., AppendedButtonProps | ElementProps)
    const unionTypeReferences = [...mainBody.matchAll(/:\s*\(([^)]+)\)/g)]
      .flatMap((match) => match[1].split('|').map((type) => type.trim()))
      .filter((name) => allInterfaces[name]);

    // Look for type aliases that reference interfaces
    const typeAliasMatches = [...content.matchAll(/type\s+(\w+)\s*=\s*([^;]+);/g)];
    const typeAliasReferences: string[] = [];

    for (const [, aliasName, aliasDefinition] of typeAliasMatches) {
      // If this type alias is referenced in the main interface
      if (mainBody.includes(aliasName)) {
        // Find interfaces referenced in the type alias definition
        const referencedInAlias = [...aliasDefinition.matchAll(/(\w+Props|\w+Items|\w+Element)/g)]
          .map((match) => match[1])
          .filter((name) => allInterfaces[name]);
        typeAliasReferences.push(...referencedInAlias);
      }
    }

    // Combine all referenced interfaces
    const allReferencedInterfaces = [
      ...new Set([...arrayTypeReferences, ...directTypeReferences, ...unionTypeReferences, ...typeAliasReferences]),
    ];

    // Parse all referenced interfaces as type definitions
    for (const refName of allReferencedInterfaces) {
      if (allInterfaces[refName]) {
        const props = parseInterfaceBody(allInterfaces[refName]);
        const description = extractInterfaceDescription(content, refName);

        // Handle complex nested types within the interface
        const enhancedProps = enhancePropsWithNestedTypes(props);

        result.typeDefinitions.push({
          name: refName,
          description: description || `Interface for ${refName}`,
          properties: enhancedProps,
        });

        // Check if this interface references other interfaces (nested references)
        const nestedReferences = enhancedProps
          .filter((prop) => prop.type.includes('[]'))
          .map((prop) => prop.type.replace('[]', ''))
          .filter((typeName) => allInterfaces[typeName] && !allReferencedInterfaces.includes(typeName));

        // Add nested references
        for (const nestedRef of nestedReferences) {
          if (allInterfaces[nestedRef]) {
            const nestedProps = parseInterfaceBody(allInterfaces[nestedRef]);
            const nestedDescription = extractInterfaceDescription(content, nestedRef);

            result.typeDefinitions.push({
              name: nestedRef,
              description: nestedDescription || `Interface for ${nestedRef}`,
              properties: nestedProps,
            });
          }
        }
      }
    }

    // Process type aliases that are used in the main interface
    const interfaceBody = allInterfaces[interfaceName];
    for (const [aliasName, aliasDefinition] of Object.entries(allTypeAliases)) {
      if (interfaceBody && interfaceBody.includes(aliasName)) {
        // Convert type alias to a simple type definition
        result.typeDefinitions.push({
          name: aliasName,
          description: `Type alias for ${aliasName}`,
          properties: [
            {
              name: aliasName,
              type: aliasDefinition,
              required: false,
              description: `Type definition: ${aliasDefinition}`,
            },
          ],
        });
      }
    }

    return result;
  } catch (error) {
    console.error('Error parsing TypeScript interface:', error.message);
    return { mainProps: [], typeDefinitions: [], inheritedProps: [] };
  }
};

const extractInterfaceDescription = (content: string, interfaceName: string): string | null => {
  // Look for JSDoc comment before the interface
  const interfacePattern = new RegExp(
    `/\\*\\*([^*]|\\*(?!/))*\\*/\\s*(?:export\\s+)?interface\\s+${interfaceName}`,
    's',
  );
  const match = content.match(interfacePattern);

  if (match) {
    const comment = match[0];
    // Extract the description from the JSDoc comment
    const descriptionMatch = comment.match(/\/\*\*\s*\n?\s*\*?\s*([^@]*?)(?:\*\/|\n\s*\*\s*@)/s);
    if (descriptionMatch) {
      return descriptionMatch[1]
        .replace(/\*\//g, '')
        .replace(/^\s*\*\s?/gm, '')
        .replace(/\n\s*\n/g, '\n')
        .trim();
    }
  }

  return null;
};

const getTooltipProps = (): PropDefinition[] => {
  return [
    {
      name: 'tooltip',
      type: 'string',
      required: false,
      description: 'Text to display in a tooltip when hovering over the component.',
    },
    {
      name: 'tooltipDelay',
      type: 'number',
      required: false,
      description: 'Delay in milliseconds before showing the tooltip.',
    },
    {
      name: 'tooltipPlacement',
      type: "'top' | 'bottom' | 'left' | 'right'",
      required: false,
      description: 'Placement of the tooltip relative to the component.',
    },
    {
      name: 'tooltipTestId',
      type: 'string',
      required: false,
      description: 'A test id for the tooltip, useful for automated testing.',
    },
  ];
};

const parseInterfaceBody = (interfaceBody: string): PropDefinition[] => {
  const props: PropDefinition[] = [];
  const lines = interfaceBody.split('\n');
  let currentComment = '';
  let isInMultiLineComment = false;
  let currentProp: PropDefinition | null = null;
  let isInComplexType = false;
  let braceCount = 0;

  for (let line of lines) {
    line = line.trim();

    // Skip empty lines
    if (!line) continue;

    // Handle multi-line comments
    if (line.startsWith('/**')) {
      isInMultiLineComment = true;
      currentComment = line
        .replace(/\/\*\*|\*\//g, '')
        .replace(/^\*\s?/, '')
        .trim();
      if (line.includes('*/')) {
        isInMultiLineComment = false;
      }
      continue;
    }

    if (isInMultiLineComment) {
      if (line.includes('*/')) {
        currentComment +=
          ' ' +
          line
            .replace('*/', '')
            .replace(/^\*\s?/, '')
            .trim();
        isInMultiLineComment = false;
      } else {
        const commentLine = line.replace(/^\*\s?/, '').trim();
        if (commentLine) {
          currentComment += ' ' + commentLine;
        }
      }
      continue;
    }

    // Handle complex types that span multiple lines
    if (isInComplexType && currentProp) {
      currentProp.type += ' ' + line;

      // Count braces to determine when the complex type ends
      braceCount += (line.match(/\{/g) || []).length;
      braceCount -= (line.match(/\}/g) || []).length;

      if (braceCount <= 0 && (line.includes(';') || line.includes('}'))) {
        // End of complex type - clean it up
        currentProp.type = cleanupType(currentProp.type.replace(/;$/, '').trim());
        props.push(currentProp);
        currentProp = null;
        isInComplexType = false;
        braceCount = 0;
      }
      continue;
    }

    // Check for property definition
    const propMatch = line.match(/^(\w+)(\?)?\s*:\s*(.+?)$/);
    if (propMatch) {
      const [, name, optional, type] = propMatch;

      // Check if this is a complex type that might span multiple lines
      if (type.includes('{') && !type.includes('}')) {
        isInComplexType = true;
        braceCount = (type.match(/\{/g) || []).length;
        braceCount -= (type.match(/\}/g) || []).length;

        currentProp = {
          name: name,
          type: type,
          required: !optional,
          description: currentComment || `${name} property`,
        };

        currentComment = '';
      } else {
        // Simple type on one line - clean it up
        const cleanedType = cleanupType(type.replace(/;$/, ''));

        props.push({
          name: name,
          type: cleanedType,
          required: !optional,
          description: currentComment || `${name} property`,
        });

        currentComment = '';
      }
    }
  }

  return props;
};

const enhancePropsWithNestedTypes = (props: PropDefinition[]): PropDefinition[] => {
  const enhancedProps: PropDefinition[] = [];

  for (const prop of props) {
    enhancedProps.push(prop);

    // Handle complex types that contain inline object definitions
    if (prop.type.includes('&') && prop.type.includes('{')) {
      // Extract inline object properties
      const inlineObjectMatch = prop.type.match(/\{\s*([^}]+)\s*\}/);
      if (inlineObjectMatch) {
        const inlineProperties = inlineObjectMatch[1];
        const additionalProps = parseInlineProperties(inlineProperties);

        // Add the extracted properties as separate props
        for (const additionalProp of additionalProps) {
          enhancedProps.push({
            ...additionalProp,
            description: `${additionalProp.description} (from ${prop.name})`,
          });
        }
      }
    }
  }

  return enhancedProps;
};

const parseInlineProperties = (inlinePropsString: string): PropDefinition[] => {
  const props: PropDefinition[] = [];
  const statements = inlinePropsString.split(';').filter((s) => s.trim());

  for (const statement of statements) {
    const trimmed = statement.trim();
    if (!trimmed) continue;

    const match = trimmed.match(/(\w+)(\?)?\s*:\s*(.+)/);
    if (match) {
      const [, name, optional, type] = match;
      props.push({
        name: name,
        type: type.trim(),
        required: !optional,
        description: `${name} property`,
      });
    }
  }

  return props;
};

const cleanupType = (type: string): string => {
  // Fix double quotes issues
  const cleaned = type
    .replace(/''([^']+)''/g, "'$1'") // Fix double single quotes
    .replace(/''/g, "'") // Fix empty double quotes
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();

  return cleaned;
};

const generatePropsCode = (interfaceResult: ParseResult, componentName: string, arrayName = 'props'): string => {
  const { mainProps, typeDefinitions, inheritedProps } = interfaceResult;

  let output = '';

  // Add TypeScript type definitions at the top
  output += `// TypeScript type definitions for ${componentName} props
interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  description: string;
}
`;

  // Only add TypeDefinition interface if we have type definitions
  if (typeDefinitions.length > 0) {
    output += `
interface TypeDefinition {
  name: string;
  description: string;
  properties: PropDefinition[];
}
`;
  }

  output += '\n';

  // Generate type definitions if any
  if (typeDefinitions.length > 0) {
    output += 'const typeDefinitions: { [key: string]: TypeDefinition } = {\n';

    typeDefinitions.forEach((typeDef, index) => {
      output += `  ${typeDef.name}: {\n`;
      output += `    name: '${typeDef.name}',\n`;
      output += `    description: '${escapeString(typeDef.description)}',\n`;
      output += '    properties: [\n';

      typeDef.properties.forEach((prop, propIndex) => {
        output += '      {\n';
        output += `        name: '${prop.name}',\n`;
        output += `        type: '${escapeString(prop.type)}',\n`;
        output += `        required: ${prop.required},\n`;
        output += `        description: '${escapeString(prop.description)}',\n`;
        output += '      }';
        if (propIndex < typeDef.properties.length - 1) output += ',';
        output += '\n';
      });

      output += '    ],\n';
      output += '  }';
      if (index < typeDefinitions.length - 1) output += ',';
      output += '\n';
    });

    output += '};\n\n';
  }

  // Generate main props array
  const mainPropsString = mainProps
    .map((prop) => {
      return `  {
    name: '${prop.name}',
    type: '${escapeString(prop.type)}',
    required: ${prop.required},
    description: '${escapeString(prop.description)}',
  }`;
    })
    .join(',\n');

  output += `const ${arrayName}: PropDefinition[] = [
${mainPropsString},
];\n\n`;

  // Generate inherited props if any
  if (inheritedProps.length > 0) {
    const inheritedPropsString = inheritedProps
      .map((prop) => {
        return `  {
    name: '${prop.name}',
    type: '${escapeString(prop.type)}',
    required: ${prop.required},
    description: '${escapeString(prop.description)}',
  }`;
      })
      .join(',\n');

    output += `const inheritedProps: PropDefinition[] = [
${inheritedPropsString},
];\n\n`;
  }

  // Export statement
  const exportNames = [arrayName];
  if (typeDefinitions.length > 0) exportNames.unshift('typeDefinitions');
  if (inheritedProps.length > 0) exportNames.push('inheritedProps');

  output += `export { ${exportNames.join(', ')} };`;

  return output;
};

const escapeString = (str: string): string => {
  return str
    .replace(/\\/g, '\\\\') // Escape backslashes
    .replace(/'/g, "\\'") // Escape single quotes
    .replace(/\n/g, '\\n') // Escape newlines
    .replace(/\r/g, '\\r') // Escape carriage returns
    .replace(/\t/g, '\\t'); // Escape tabs
};

const generateAllQomponents = async (): Promise<void> => {
  const qomponentsPath = './node_modules/@seeqdev/qomponents/dist';
  const outputDir = './src/generated';

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('Searching for Qomponents...');

  const components: ComponentInfo[] = [];

  // Scan for component directories
  const entries = fs.readdirSync(qomponentsPath, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const componentName = entry.name;
      const typesFile = path.join(qomponentsPath, componentName, `${componentName}.types.d.ts`);

      if (fs.existsSync(typesFile)) {
        // Determine the main interface name (usually ComponentNameProps)
        const interfaceName = `${componentName}Props`;

        components.push({
          name: componentName,
          typesFile,
          interfaceName,
        });
      }
    }
  }

  console.log(`Found ${components.length} components with type definitions:`);

  const results: GenerationResult[] = [];

  for (const component of components) {
    console.log(`\n📦 Processing ${component.name}...`);

    try {
      const interfaceResult = parseTypeScriptInterface(component.typesFile, component.interfaceName);

      if (interfaceResult.mainProps.length > 0) {
        const arrayName = `${component.name.toLowerCase()}Props`;
        const propsCode = generatePropsCode(interfaceResult, component.name, arrayName);

        // Write to file
        const outputFile = path.join(outputDir, `${component.name}Props.ts`);
        fs.writeFileSync(outputFile, propsCode);

        console.log(`   ✅ Generated ${interfaceResult.mainProps.length} main props`);

        if (interfaceResult.typeDefinitions.length > 0) {
          console.log(`   📁 Generated ${interfaceResult.typeDefinitions.length} type definitions`);
          for (const typeDef of interfaceResult.typeDefinitions) {
            console.log(`      - ${typeDef.name}: ${typeDef.properties.length} props`);
          }
        }

        if (interfaceResult.inheritedProps.length > 0) {
          console.log(`   🔗 Generated ${interfaceResult.inheritedProps.length} inherited props`);
        }

        console.log(`   💾 Saved to: ${outputFile}`);

        results.push({
          component: component.name,
          mainPropsCount: interfaceResult.mainProps.length,
          typeDefinitions: interfaceResult.typeDefinitions.map((t) => t.name),
          inheritedPropsCount: interfaceResult.inheritedProps.length,
          outputFile,
        });
      } else {
        console.log(`   ⚠️  No props found for ${component.interfaceName}`);
      }
    } catch (error) {
      console.log(`   ❌ Error processing ${component.name}: ${error.message}`);
    }
  }

  // Generate index file
  const indexFile = path.join(outputDir, 'index.ts');
  const indexContent = results
    .map((result) => {
      const componentProps = `${result.component.toLowerCase()}Props`;
      const exports = [componentProps];

      // Add typeDefinitions and inheritedProps with unique names if they exist
      if (result.typeDefinitions.length > 0) {
        exports.unshift(`typeDefinitions as ${result.component.toLowerCase()}TypeDefinitions`);
      }
      if (result.inheritedPropsCount > 0) {
        exports.push(`inheritedProps as ${result.component.toLowerCase()}InheritedProps`);
      }

      return `export { ${exports.join(', ')} } from './${result.component}Props';`;
    })
    .join('\n');

  fs.writeFileSync(indexFile, indexContent);

  console.log(`\n🎉 Generation complete!`);
  console.log(`📊 Summary:`);
  console.log(`   - ${results.length} components processed`);
  console.log(`   - ${results.reduce((sum, r) => sum + r.mainPropsCount, 0)} total main props generated`);
  console.log(`   - ${results.reduce((sum, r) => sum + r.typeDefinitions.length, 0)} type definitions generated`);
  console.log(`   - ${results.reduce((sum, r) => sum + r.inheritedPropsCount, 0)} inherited props generated`);
  console.log(`   - Output directory: ${outputDir}`);
  console.log(`   - Index file: ${indexFile}`);
};

// Main execution
const main = async (): Promise<void> => {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === '--help') {
    console.log('Usage:');
    console.log('  npx tsx generate-props.ts --all                           # Generate all qomponents');
    console.log('  npx tsx generate-props.ts <file> <interface> [array-name] # Generate single component');
    console.log('');
    console.log('Examples:');
    console.log('  npx tsx generate-props.ts --all');
    console.log(
      '  npx tsx generate-props.ts ./node_modules/@seeqdev/qomponents/dist/TextArea/TextArea.types.d.ts TextAreaProps textAreaProps',
    );
    process.exit(0);
  }

  if (args[0] === '--all') {
    await generateAllQomponents();
    return;
  }

  if (args.length < 2) {
    console.log('Error: Missing required arguments for single component generation.');
    console.log('Usage: npx tsx generate-props.ts <path-to-types-file> <interface-name> [array-name]');
    process.exit(1);
  }

  const [filePath, interfaceName, arrayName = 'props'] = args;

  console.log(`Parsing ${interfaceName} from ${filePath}...`);

  const interfaceResult = parseTypeScriptInterface(filePath, interfaceName);

  if (interfaceResult.mainProps.length === 0) {
    console.log('No properties found or parsing failed.');
    process.exit(1);
  }

  const propsCode = generatePropsCode(interfaceResult, interfaceName.replace('Props', ''), arrayName);

  console.log('\nGenerated props code:');
  console.log('='.repeat(50));
  console.log(propsCode);
  console.log('='.repeat(50));
  console.log(`\nFound ${interfaceResult.mainProps.length} main properties.`);

  if (interfaceResult.typeDefinitions.length > 0) {
    console.log(`Found ${interfaceResult.typeDefinitions.length} type definitions.`);
  }

  if (interfaceResult.inheritedProps.length > 0) {
    console.log(`Found ${interfaceResult.inheritedProps.length} inherited properties.`);
  }

  // Optionally write to file
  const outputFile = `${arrayName}-generated.ts`;
  fs.writeFileSync(outputFile, propsCode);
  console.log(`\nProps code also saved to: ${outputFile}`);
};

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { parseTypeScriptInterface, generatePropsCode };
