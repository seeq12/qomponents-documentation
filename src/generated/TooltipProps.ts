// TypeScript type definitions for Tooltip props
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

const typeDefinitions: { [key: string]: TypeDefinition } = {
  TooltipPosition: {
    name: 'TooltipPosition',
    description: 'Type alias for TooltipPosition',
    properties: [
      {
        name: 'TooltipPosition',
        type: '(typeof tooltipPositions)[number]',
        required: false,
        description: 'Type definition: (typeof tooltipPositions)[number]',
      }
    ],
  }
};

const tooltipProps: PropDefinition[] = [
  {
    name: 'position',
    type: 'TooltipPosition',
    required: false,
    description: 'position property',
  },
  {
    name: 'children',
    type: 'React.JSX.Element | string',
    required: false,
    description: 'children property',
  },
  {
    name: 'text',
    type: 'React.JSX.Element | string',
    required: true,
    description: 'text property',
  },
  {
    name: 'delay',
    type: 'number',
    required: false,
    description: 'delay property',
  },
];

export { typeDefinitions, tooltipProps };