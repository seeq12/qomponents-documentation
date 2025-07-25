// TypeScript type definitions for TextField props
interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

const textfieldProps: PropDefinition[] = [
  {
    name: 'readonly',
    type: 'boolean',
    required: false,
    description: ' When true, makes the text field read-only, preventing user input. The field will display its value but users cannot modify it. Unlike disabled fields, read-only fields can still receive focus and their values are included in form submissions. ',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: ' When true, disables the text field preventing any user interaction. Disabled fields appear visually dimmed, cannot receive focus, and their values are not included in form submissions. ',
  },
  {
    name: 'onChange',
    type: 'React.ChangeEventHandler<FormControlElement>',
    required: false,
    description: ' Callback function triggered when the text field value changes. Receives the change event containing the new value. Use this to update your component state in controlled input scenarios. ',
  },
  {
    name: 'onKeyUp',
    type: 'React.KeyboardEventHandler<FormControlElement>',
    required: false,
    description: ' Callback function triggered when a key is released while the field has focus. Useful for implementing search-as-you-type functionality or debounced input handling. Receives the keyboard event with details about the released key. ',
  },
  {
    name: 'onKeyDown',
    type: 'React.KeyboardEventHandler<FormControlElement>',
    required: false,
    description: ' Callback function triggered when a key is pressed while the field has focus. Useful for implementing keyboard shortcuts, form submission on Enter, or preventing certain characters from being entered. ',
  },
  {
    name: 'onFocus',
    type: 'React.FocusEventHandler<HTMLInputElement>',
    required: false,
    description: ' Callback function triggered when the text field receives focus. Use this to handle focus-related logic such as showing hints, clearing placeholder text, or updating UI state. ',
  },
  {
    name: 'onBlur',
    type: 'React.FocusEventHandler<FormControlElement>',
    required: false,
    description: ' Callback function triggered when the text field loses focus. Commonly used for form validation, saving draft data, or updating UI state when users finish interacting with the field. ',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: ' HTML ID attribute for the text field element. Should be unique across the entire page for proper HTML semantics and accessibility. Used for associating labels and error messages with the input field. ',
  },
  {
    name: 'name',
    type: 'string',
    required: false,
    description: ' Name attribute for the text field used in form submission. This identifies the field\'s data when the form is submitted to a server. Essential for proper form handling and data processing. ',
  },
  {
    name: 'size',
    type: '\'sm\' | \'lg\'',
    required: false,
    description: ' Size variant that controls the text field\'s height and text size: - `sm`: Small field with compact padding and smaller text - `lg`: Large field with generous padding and larger text If not specified, uses the default/medium size. ',
  },
  {
    name: 'value',
    type: 'string | string[] | number',
    required: false,
    description: ' The current value of the text field. Can be a string for text input, an array of strings for multi-value fields, or a number for numeric inputs. Use this for controlled input components. ',
  },
  {
    name: 'placeholder',
    type: 'string',
    required: false,
    description: ' Placeholder text displayed when the field is empty. Provides users with a hint about what type of content is expected. Should be descriptive but not replace proper labels. ',
  },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply to the text field element. These classes are combined with the component\'s built-in styling. Use this to customize appearance beyond the standard size variants. ',
  },
  {
    name: 'type',
    type: '\'text\' | \'password\' | \'number\' | \'email\'',
    required: false,
    description: ' HTML input type that determines the field\'s behavior and validation: - `text`: Standard text input (default) - `password`: Obscures entered text for security - `number`: Numeric input with increment/decrement controls - `email`: Email input with built-in email validation @default \'text\' ',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: ' Test ID attribute for the text field element used in automated testing. Applied to the `data-testid` attribute for element selection in test suites. ',
  },
  {
    name: 'ref',
    type: 'any',
    required: false,
    description: ' React ref object for direct access to the text field DOM element. Use this when you need to programmatically focus the field, measure its dimensions, or perform other direct DOM operations. ',
  },
  {
    name: 'inputGroup',
    type: 'InputGroupPlacement',
    required: false,
    description: ' Configuration for input group styling when the field is part of a group: - `prepend`: Field is preceded by another element (button, icon, text) - `append`: Field is followed by another element Affects border radius and styling to create seamless grouped appearance. ',
  },
  {
    name: 'step',
    type: 'number | string',
    required: false,
    description: ' Step value for numeric input types that defines the increment/decrement amount. When users click the number input\'s up/down arrows or use arrow keys, the value changes by this step amount. Can be a number or string. ',
  },
  {
    name: 'showError',
    type: 'boolean',
    required: false,
    description: ' When true, displays error styling on the text field. Typically changes border color to red and may add error-related visual cues. Usually used in combination with `errorText` to provide validation feedback. ',
  },
  {
    name: 'errorText',
    type: 'string',
    required: false,
    description: ' Error message text to display below the field when validation fails. Provides specific feedback about what the user needs to correct. Only shown when there\'s an actual error to communicate. ',
  },
  {
    name: 'required',
    type: 'boolean',
    required: false,
    description: ' When true, marks the field as required for form validation. May add visual indicators (like asterisks) and prevents form submission if the field is empty. Essential for mandatory form fields. ',
  },
  {
    name: 'autoComplete',
    type: 'string',
    required: false,
    description: ' HTML autocomplete attribute that helps browsers provide appropriate suggestions. Values like \'email\', \'name\', \'new-password\', \'current-password\', etc. Improves user experience by enabling relevant autocomplete functionality. ',
  },
  {
    name: 'autoFocus',
    type: 'boolean',
    required: false,
    description: ' When true, automatically focuses this field when the component mounts. Useful for modal dialogs or forms where immediate input is expected. Should be used sparingly to avoid accessibility issues. ',
  },
  {
    name: 'inputWidth',
    type: 'number',
    required: false,
    description: ' Fixed width in pixels for the text field input element. Primarily used in the Editable Text component for precise sizing control. Overrides default responsive width behavior when a specific width is needed. ',
  },
  {
    name: 'inputHeight',
    type: 'number',
    required: false,
    description: ' Fixed height in pixels for the text field input element. Primarily used in the Editable Text component for precise sizing control. Overrides default height behavior when a specific height is needed. ',
  },
  {
    name: 'min',
    type: 'number',
    required: false,
    description: ' Minimum allowed value for numeric, date, time, and range input types. Prevents users from entering or selecting values below this threshold. Used for validation and UI constraints in number-based inputs. ',
  },
  {
    name: 'max',
    type: 'number',
    required: false,
    description: ' Maximum allowed value for numeric, date, time, and range input types. Prevents users from entering or selecting values above this threshold. Used for validation and UI constraints in number-based inputs. ',
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

export { textfieldProps, inheritedProps };