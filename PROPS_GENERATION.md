# Props Generation System

This project includes an automated system for generating props arrays from TypeScript interface files, specifically designed for Qomponents documentation.

## Features

- ✅ **Automatic generation** from TypeScript interfaces
- ✅ **Sub-interface support** for complex components (e.g., DropdownItems, AccordionItem)
- ✅ **Batch processing** for all Qomponents at once
- ✅ **JSDoc comment parsing** for detailed descriptions
- ✅ **Required/optional detection** based on TypeScript optional properties (`?`)
- ✅ **Organized output** in `src/generated/` directory

## Usage

### Generate All Qomponents

```bash
# Generate props for all Qomponents
npm run generate-props

# Or directly with node
node generate-props.js --all
```

This will:
- Scan `node_modules/@seeqdev/qomponents/dist/` for all components
- Generate props arrays for each component
- Save individual files in `src/generated/`
- Create an index file for easy importing

### Generate Single Component

```bash
# Generate props for a specific component
node generate-props.js <path-to-types-file> <interface-name> [array-name]

# Example:
node generate-props.js ./node_modules/@seeqdev/qomponents/dist/TextArea/TextArea.types.d.ts TextAreaProps textAreaProps
```

### Alternative for single component
```bash
# Using the npm script (requires manual path specification)
npm run generate-props:component ./node_modules/@seeqdev/qomponents/dist/Button/Button.types.d.ts ButtonProps
```

## Output Structure

### Generated Files

All generated files are saved in `src/generated/`:

```
src/generated/
├── index.js                    # Exports all props arrays
├── AccordionProps.js          # Main + sub-interfaces
├── ButtonProps.js             # Main interface only
├── ButtonWithDropdownProps.js # Main + DropdownItems sub-interface
├── TextAreaProps.js           # Main interface only
└── ...
```

### File Format

Each generated file contains:

```javascript
// Main component props
const componentnameProps = [
  {
    name: 'propName',
    type: 'PropType',
    required: true/false,
    description: 'Detailed description from JSDoc comments',
  },
  // ... more props
];

// Sub-interface props (if any)
const subinterfacenameProps = [
  {
    name: 'subPropName',
    type: 'SubPropType',
    required: true/false,
    description: 'Description from JSDoc',
  },
  // ... more sub-props
];

// Export statement
export { componentnameProps, subinterfacenameProps };
```

## Examples

### Components with Sub-interfaces

Components like `ButtonWithDropdown` include sub-interfaces:

- **Main interface**: `ButtonWithDropdownProps` → `buttonwithdropdownProps`
- **Sub-interface**: `DropdownItems` → `dropdownitemsProps`

### Import Generated Props

```javascript
// Import all props
import { 
  textareaProps, 
  buttonwithdropdownProps, 
  dropdownitemsProps 
} from './src/generated';

// Import specific component props
import { buttonProps } from './src/generated/ButtonProps.js';
```

## Integration with Documentation Components

The generated props arrays are designed to work seamlessly with your existing `ComponentPropsDisplay` component:

```tsx
import { textareaProps } from '../generated';

const TextAreaQomponent: React.FC = () => {
  return <ComponentPropsDisplay title="TextArea Props" props={textareaProps} />;
};
```

## Script Details

The generation script (`generate-props.js`) features:

- **Smart parsing** of TypeScript interfaces using regex
- **Multi-line JSDoc comment** handling
- **Sub-interface detection** and processing
- **Required/optional property** detection
- **Automatic file organization** and naming
- **Error handling** for missing interfaces or files

## Generated Statistics

Last generation produced:
- 📦 **20 components** successfully processed
- 🔧 **324 total props** generated
- 📁 **4 sub-interfaces** detected and processed
- ⚠️  **2 components** skipped (missing or non-standard interfaces)

## Troubleshooting

### Component Not Generated
- Check if the component has a `ComponentName.types.d.ts` file
- Verify the interface is named `ComponentNameProps`
- Check console output for specific error messages

### Missing Props
- Ensure JSDoc comments are properly formatted
- Check that property definitions follow TypeScript interface syntax
- Verify interface is exported in the types file

### Sub-interfaces Not Detected
- Sub-interfaces are detected by array type references (e.g., `DropdownItems[]`)
- Ensure sub-interfaces are defined in the same file
- Check that sub-interface names match exactly
