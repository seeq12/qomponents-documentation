// TypeScript type definitions for ButtonGroup props
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
    description: 'Interface representing the properties for a button within a ButtonGroup.\nUsed when you want to include an interactive button as part of the group.',
    properties: [
      {
        name: 'variant',
        type: '\'button\'',
        required: true,
        description: ' Specifies that this group item is a clickable button. Button items can be selected, have active states, and trigger onChange events. ',
      },
      {
        name: 'buttonProps',
        type: 'Omit<ButtonProps, \'onClick\'> & { value: string; isActive?: boolean; }',
        required: true,
        description: ' Configuration properties for the button component. Omits the onClick handler since ButtonGroup manages selection internally. Requires a value for selection tracking and optionally an isActive state. ',
      },
      {
        name: 'value',
        type: 'string',
        required: true,
        description: 'value property (from buttonProps)',
      },
      {
        name: 'isActive',
        type: 'boolean',
        required: false,
        description: 'isActive property (from buttonProps)',
      }
    ],
  },
  ElementProps: {
    name: 'ElementProps',
    description: 'Interface for including custom React elements within a ButtonGroup.\nUsed when you need to add non-button content like separators, labels, or custom components.',
    properties: [
      {
        name: 'variant',
        type: '\'element\'',
        required: true,
        description: ' Specifies that this group item is a custom React element. Element items are purely presentational and don\'t participate in selection logic. ',
      },
      {
        name: 'element',
        type: 'React.ReactNode',
        required: true,
        description: ' The React content to render within the button group. Can be any valid React node including text, icons, separators, or complex components. ',
      },
      {
        name: 'extraClassNames',
        type: 'string',
        required: false,
        description: ' Additional CSS classes to apply to the element\'s container. Use this to style the element consistently with the button group\'s appearance. ',
      }
    ],
  }
};

const buttongroupProps: PropDefinition[] = [
  {
    name: 'buttons',
    type: 'Props[]',
    required: true,
    description: ' Array of items to display in the button group. Each item can be either a button (for interactive elements) or an element (for decorative content). Buttons within the group share consistent styling and spacing for a unified appearance. ',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: ' HTML ID attribute for the button group container. Should be unique across the page for proper HTML semantics and accessibility. ',
  },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply to the button group container. Use this to customize the group\'s appearance, spacing, or layout beyond default styling. ',
  },
  {
    name: 'onChange',
    type: '(value: string) => void',
    required: false,
    description: ' Callback function triggered when a button within the group is selected. Receives the value of the selected button as defined in its buttonProps.value. Use this to handle selection changes and update your application state. ',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: ' Test ID attribute for the button group container used in automated testing. Applied to the group\'s root element for test targeting and interaction. ',
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

export { typeDefinitions, buttongroupProps, inheritedProps };