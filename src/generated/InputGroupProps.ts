// TypeScript type definitions for InputGroup props
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
  AppendedButtonProps: {
    name: 'AppendedButtonProps',
    description: 'Interface for button elements that can be appended to an InputGroup.\nUsed when you want to add interactive buttons alongside the input field.',
    properties: [
      {
        name: 'variant',
        type: '\'button\'',
        required: true,
        description: ' Specifies that this appended item is an interactive button. Button items can trigger actions and provide additional functionality to the input. ',
      },
      {
        name: 'buttonProps',
        type: 'ButtonProps',
        required: true,
        description: ' Configuration properties for the button component. Uses all standard Button props including click handlers, styling, icons, and tooltips. ',
      }
    ],
  },
  ElementProps: {
    name: 'ElementProps',
    description: 'Interface for custom React elements that can be appended to an InputGroup.\nUsed when you need to add non-button content like icons, labels, or decorative elements.',
    properties: [
      {
        name: 'variant',
        type: '\'element\'',
        required: true,
        description: ' Specifies that this appended item is a custom React element. Element items are typically decorative or informational and don\'t have built-in interactivity. ',
      },
      {
        name: 'element',
        type: 'React.ReactNode',
        required: true,
        description: ' The React content to render alongside the input field. Can be any valid React node including text, icons, indicators, or complex components. ',
      }
    ],
  }
};

const inputgroupProps: PropDefinition[] = [
  {
    name: 'append',
    type: 'AppendedProps[]',
    required: true,
    description: ' Array of elements to append to the right side of the input field. Each item can be either a button (for interactive functionality) or an element (for decoration). Items are displayed in the order they appear in the array, creating a cohesive input group. ',
  },
  {
    name: 'field',
    type: 'React.ReactNode',
    required: false,
    description: ' Custom input field component to render instead of the default TextField. Use this when you need specialized input behavior while maintaining the group styling. The field will be integrated seamlessly with the appended elements. ',
  },
];

const inheritedProps: PropDefinition[] = [
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
    type: '\'top\' | \'bottom\' | \'left\' | \'right\'',
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

export { typeDefinitions, inputgroupProps, inheritedProps };