// TypeScript type definitions for TextArea props
interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

const textareaProps: PropDefinition[] = [
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply to the textarea element. Use this to customize the appearance beyond the default styling. ',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: ' HTML ID attribute for the textarea element. Should be unique across the page for proper HTML semantics and accessibility. ',
  },
  {
    name: 'name',
    type: 'string',
    required: false,
    description: ' Name attribute for the textarea used in form submission. Identifies the textarea\'s data when the form is submitted to a server. ',
  },
  {
    name: 'onChange',
    type: 'React.ChangeEventHandler<FormControlElement>',
    required: false,
    description: ' Callback function triggered when the textarea value changes. Receives the change event containing the new value. Use this to update your component state in controlled input scenarios. ',
  },
  {
    name: 'onKeyUp',
    type: 'React.KeyboardEventHandler<FormControlElement>',
    required: false,
    description: ' Callback function triggered when a key is released while the textarea has focus. Useful for implementing search-as-you-type functionality or debounced input handling. ',
  },
  {
    name: 'onKeyDown',
    type: 'React.KeyboardEventHandler<FormControlElement>',
    required: false,
    description: ' Callback function triggered when a key is pressed while the textarea has focus. Useful for implementing keyboard shortcuts, form submission shortcuts, or preventing certain characters from being entered. ',
  },
  {
    name: 'onFocus',
    type: 'React.FocusEventHandler<HTMLTextAreaElement>',
    required: false,
    description: ' Callback function triggered when the textarea receives focus. Use this to handle focus-related logic such as showing hints, clearing placeholder text, or updating UI state. ',
  },
  {
    name: 'onBlur',
    type: 'React.FocusEventHandler<FormControlElement>',
    required: false,
    description: ' Callback function triggered when the textarea loses focus. Commonly used for form validation, saving draft data, or updating UI state when users finish interacting with the field. ',
  },
  {
    name: 'placeholder',
    type: 'string',
    required: false,
    description: ' Placeholder text displayed when the textarea is empty. Provides users with a hint about what type of content is expected. Should be descriptive but not replace proper labels. ',
  },
  {
    name: 'readonly',
    type: 'boolean',
    required: false,
    description: ' When true, makes the textarea read-only, preventing user input. The field will display its value but users cannot modify it. Unlike disabled fields, read-only fields can still receive focus and their values are included in form submissions. ',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: ' When true, disables the textarea preventing any user interaction. Disabled fields appear visually dimmed, cannot receive focus, and their values are not included in form submissions. ',
  },
  {
    name: 'rows',
    type: 'number',
    required: false,
    description: ' Number of visible text lines in the textarea. Controls the initial height of the textarea. Users can typically resize the textarea if the browser allows it. @default 3 ',
  },
  {
    name: 'cols',
    type: 'number',
    required: false,
    description: ' Number of visible character columns in the textarea. Controls the initial width of the textarea based on average character width. Less commonly used than CSS width styling. ',
  },
  {
    name: 'autoFocus',
    type: 'boolean',
    required: false,
    description: ' When true, automatically focuses this textarea when the component mounts. Useful for modal dialogs or forms where immediate input is expected. Should be used sparingly to avoid accessibility issues. ',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: ' Test ID attribute for the textarea element used in automated testing. Applied to the `data-testid` attribute for element selection in test suites. ',
  },
  {
    name: 'value',
    type: 'string | string[] | number',
    required: false,
    description: ' Current value of the textarea for controlled component behavior. Can be a string for text content, an array of strings for multi-value scenarios, or a number that will be converted to string. Use this for controlled input components. ',
  },
  {
    name: 'showError',
    type: 'boolean',
    required: false,
    description: ' When true, displays error styling on the textarea. Typically changes border color to red and may add error-related visual cues. Usually used in combination with error messages to provide validation feedback. ',
  },
];

export { textareaProps };