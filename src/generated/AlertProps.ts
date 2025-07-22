// TypeScript type definitions for Alert props
interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

const alertProps: PropDefinition[] = [
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    description:
      'The content to be displayed inside the alert message. Can include text, icons, buttons, or any other React elements. This is the main message or information you want to communicate to the user.',
  },
  {
    name: 'dismissible',
    type: 'boolean',
    required: false,
    description:
      'When true, displays a close button (X icon) that allows users to dismiss the alert. When false, the alert cannot be closed by the user and must be controlled programmatically.',
  },
  {
    name: 'onClose',
    type: '() => void',
    required: false,
    description:
      'Callback function triggered when the user clicks the close button to dismiss the alert. Only relevant when `dismissible` is true. Use this to handle alert dismissal logic, such as updating state to hide the alert or performing cleanup actions.',
  },
  {
    name: 'show',
    type: 'boolean',
    required: false,
    description:
      'Controls the visibility of the alert component. When false, the alert is completely hidden from the UI. Use this for programmatic control of when alerts should appear or disappear.',
  },
  {
    name: 'variant',
    type: "'danger' | 'theme' | 'warning' | 'gray'",
    required: true,
    description:
      'The visual style variant of the alert, which determines its appearance and color scheme: danger (Red styling for error messages), warning (Yellow/orange styling for caution messages), gray (Neutral gray styling for general information), theme (Uses the current theme colors for contextual information).',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description:
      'Test ID attribute for the alert container element. Used for automated testing and element selection in test suites. Also used as a prefix for the close button test ID when dismissible.',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description:
      'HTML ID attribute for the alert container element. Should be unique across the entire page for proper HTML semantics. Useful for accessibility, linking, or custom styling via CSS selectors.',
  },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description:
      'Additional CSS classes to apply to the alert container. Use this to customize the alert appearance beyond the built-in variants. Classes are combined with the component default styling.',
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

export { alertProps, inheritedProps };
