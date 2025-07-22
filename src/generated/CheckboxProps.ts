// TypeScript type definitions for Checkbox props
interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

const checkboxProps: PropDefinition[] = [
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply to the checkbox container. These classes are combined with the component\'s built-in styling. Use this to customize the overall appearance of the checkbox wrapper. ',
  },
  {
    name: 'extraLabelClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply specifically to the label element. Use this to customize the styling of the text label that appears next to the checkbox. Does not affect the input element itself. ',
  },
  {
    name: 'type',
    type: '\'radio\' | \'checkbox\'',
    required: false,
    description: ' Determines the type of input control to render: - `checkbox`: Standard checkbox that can be checked/unchecked independently - `radio`: Radio button that is typically part of a group where only one can be selected @default \'checkbox\' ',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: ' HTML ID attribute for the input element. Should be unique across the entire page for proper HTML semantics and accessibility. If not provided, a random ID will be generated automatically. Used for associating the label with the input for accessibility. ',
  },
  {
    name: 'name',
    type: 'string',
    required: false,
    description: ' Name attribute for the input element, used for form submission and grouping. For radio buttons, all options in the same group should share the same name. For checkboxes, this identifies the field when the form is submitted. ',
  },
  {
    name: 'checked',
    type: 'boolean',
    required: false,
    description: ' Controls whether the checkbox/radio button is currently checked. Use this for controlled components where you manage the state externally. When provided, the component becomes controlled and you must handle state changes via `onChange`. ',
  },
  {
    name: 'defaultChecked',
    type: 'boolean',
    required: false,
    description: ' Sets the initial checked state for uncontrolled components. Only used when `checked` is not provided (uncontrolled mode). The component will manage its own state after the initial render. ',
  },
  {
    name: 'value',
    type: 'string | number',
    required: false,
    description: ' The value associated with this checkbox/radio button. This is the value that will be submitted with the form when the input is checked. For radio buttons, each option in a group should have a unique value. ',
  },
  {
    name: 'label',
    type: 'string | React.ReactNode',
    required: false,
    description: ' The text or content to display as the label next to the checkbox/radio button. Can be a simple string or any React element for more complex label content. Clicking on this label will toggle the input due to proper accessibility association. ',
  },
  {
    name: 'onChange',
    type: 'React.ChangeEventHandler<FormControlElement>',
    required: false,
    description: ' Callback function triggered when the checkbox/radio button state changes. Receives the change event which contains the new checked state and value. Use this to update your component state when in controlled mode. ',
  },
  {
    name: 'onKeyDown',
    type: 'React.KeyboardEventHandler<FormControlElement>',
    required: false,
    description: ' Callback function triggered when a key is pressed while the input has focus. Useful for implementing custom keyboard navigation or shortcuts. Receives the keyboard event with details about the pressed key. ',
  },
  {
    name: 'onClick',
    type: 'React.MouseEventHandler<FormControlElement>',
    required: false,
    description: ' Callback function triggered when the input element is clicked. This fires before the onChange event and can be used for additional click handling. Note that clicking the associated label will also trigger this event. ',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: ' When true, disables the checkbox/radio button preventing user interaction. Disabled inputs appear visually dimmed and do not respond to user actions. The input will not be included in form submissions when disabled. ',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: ' Test ID attribute for the input element used in automated testing. Applied to the `data-testid` attribute for element selection in test suites. Helps identify this specific checkbox/radio button in tests. ',
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

export { checkboxProps, inheritedProps };