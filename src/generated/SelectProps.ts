// TypeScript type definitions for Select props
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
  Option: {
    name: 'Option',
    description: 'Type alias for Option',
    properties: [
      {
        name: 'Option',
        type: '{\n    label: string',
        required: false,
        description: 'Type definition: {\n    label: string',
      }
    ],
  },
  GroupedOption: {
    name: 'GroupedOption',
    description: 'Type alias for GroupedOption',
    properties: [
      {
        name: 'GroupedOption',
        type: '{\n    label: string',
        required: false,
        description: 'Type definition: {\n    label: string',
      }
    ],
  }
};

const selectProps: PropDefinition[] = [
  {
    name: 'closeMenuOnSelect',
    type: 'boolean',
    required: false,
    description: ' When false (default), automatically closes the dropdown menu after an option is selected. When true, keeps the menu open after selection, useful for multi-select scenarios where users might want to select multiple options quickly. ',
  },
  {
    name: 'creatable',
    type: 'boolean',
    required: false,
    description: ' When true, allows users to create new options by typing values not in the existing options list. The new option will be added to the selection and can be handled in the onChange callback. Useful for tag-like inputs or dynamic option lists. ',
  },
  {
    name: 'isDisabled',
    type: 'boolean',
    required: false,
    description: ' When true, disables the entire select component preventing user interaction. The select appears visually dimmed and doesn\'t respond to clicks or keyboard input. ',
  },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply to the select container element. Can be used to control the overall size, positioning, or styling of the select component. ',
  },
  {
    name: 'controlClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply specifically to the select control (the main input area). Use this to customize the appearance of the clickable area that displays the selected value. ',
  },
  {
    name: 'filterConfig',
    type: 'unknown',
    required: false,
    description: ' Custom filter configuration for search functionality. Advanced option for customizing how the select filters options when users type. ',
  },
  {
    name: 'getOptionLabel',
    type: '(option: Option) => ReactNode | undefined',
    required: false,
    description: ' Custom function to format how option labels are displayed in the dropdown menu and control. Receives an option object and should return a React node for custom rendering. Useful for displaying rich content like icons, badges, or formatted text. ',
  },
  {
    name: 'getOptionValue',
    type: '(option: Option) => string',
    required: false,
    description: ' Custom function to extract the value from an option object. Should return a string that uniquely identifies the option. Used internally by react-select for option comparison and selection tracking. ',
  },
  {
    name: 'getSelectedValueLabel',
    type: '(option: Option) => ReactNode | undefined',
    required: false,
    description: ' Custom function to format how selected option labels are displayed. Similar to getOptionLabel but specifically for rendering selected values. Useful when you want different formatting for selected vs dropdown options. ',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: ' HTML ID attribute for the select component container. Should be unique across the page for proper HTML semantics and accessibility. ',
  },
  {
    name: 'inputGroup',
    type: 'InputGroupPlacement',
    required: false,
    description: ' Specifies the select\'s position within an input group: - `prepend`: Select is preceded by another element - `append`: Select is followed by another element Affects styling to create seamless grouped appearance. ',
  },
  {
    name: 'inputId',
    type: 'string',
    required: false,
    description: ' HTML ID attribute for the internal input element. Used for accessibility and form associations. If not provided, one will be generated. ',
  },
  {
    name: 'isClearable',
    type: 'boolean',
    required: false,
    description: ' When true, displays a clear button (X) that allows users to remove their selection. Useful for optional selections where users might want to revert to no selection. ',
  },
  {
    name: 'isLoading',
    type: 'boolean',
    required: false,
    description: ' When true, displays a loading spinner and disables interaction while options are being fetched. Use this when loading options asynchronously to provide visual feedback to users. ',
  },
  {
    name: 'isMulti',
    type: 'boolean',
    required: false,
    description: ' When true, allows selection of multiple options instead of just one. Selected options are displayed as chips/tags within the control area. The onChange callback will receive an array of selected options. ',
  },
  {
    name: 'isSearchable',
    type: 'boolean',
    required: false,
    description: ' When true, allows users to type in the select to filter/search through available options. When false, the select acts as a pure dropdown without search functionality. ',
  },
  {
    name: 'menuIsOpen',
    type: 'boolean',
    required: false,
    description: ' Forces the dropdown menu to remain open regardless of user interaction. Primarily useful for debugging or special UI scenarios. Normally should be left undefined. ',
  },
  {
    name: 'menuPlacement',
    type: 'MenuPlacement',
    required: false,
    description: ' Controls where the dropdown menu appears relative to the select control: - `auto`: Automatically positions based on available space (recommended) - `top`: Always appears above the control - `bottom`: Always appears below the control ',
  },
  {
    name: 'menuPortalTarget',
    type: 'null | HTMLElement',
    required: false,
    description: ' Specifies a DOM element where the dropdown menu should be rendered. When null, renders in the normal document flow. When specified, renders in a portal to that element, which can help with z-index issues. ',
  },
  {
    name: 'noOptionsMessage',
    type: 'string',
    required: false,
    description: ' Custom message to display when no options are available for selection. Shown when the options array is empty or when search filters exclude all options. @default "No options" ',
  },
  {
    name: 'onChange',
    type: '(newValue: SingleValue<Option> | MultiValue<Option>) => void',
    required: true,
    description: ' Callback function triggered when the selected value(s) change. For single selects, receives a single Option or null. For multi-selects, receives an array. Use this to handle selection changes and update your application state. ',
  },
  {
    name: 'options',
    type: 'Option[] | GroupedOption[]',
    required: true,
    description: ' Array of available options for selection in the dropdown. Can be a flat array of options or grouped options with category labels. Each option should have at minimum a label and value property. ',
  },
  {
    name: 'placeholder',
    type: 'string',
    required: false,
    description: ' Placeholder text displayed when no option is selected. Provides guidance to users about what they should select. Only shown when there\'s no current selection. ',
  },
  {
    name: 'showError',
    type: 'boolean',
    required: false,
    description: ' When true, displays error styling (typically red border) on the select control. Used to indicate validation errors or invalid selections. ',
  },
  {
    name: 'small',
    type: 'boolean',
    required: false,
    description: ' When true, renders the select in a smaller, more compact size. Useful for dense layouts or when space is limited. ',
  },
  {
    name: 'value',
    type: 'Option | undefined',
    required: false,
    description: ' Currently selected option(s) for controlled component behavior. For single selects, should be a single Option or undefined. For multi-selects, should be an array of Options. ',
  },
  {
    name: 'defaultValue',
    type: 'Option | undefined',
    required: false,
    description: ' Initial selected option(s) for uncontrolled component behavior. Used when you want the select to manage its own state internally. Only used during initial render. ',
  },
  {
    name: 'filterOption',
    type: '(option: Option, rawInput: string) => boolean',
    required: false,
    description: ' Custom function to determine if an option should be displayed in the menu. Receives the option and current search input, returns true to show the option. Useful for implementing complex filtering logic beyond simple text matching. ',
  },
  {
    name: 'formatGroupLabel',
    type: '(group: GroupBase<unknown>) => ReactNode',
    required: false,
    description: ' Custom function to format group labels when using grouped options. Receives a group object and should return a React node for the group header. ',
  },
  {
    name: 'onRemove',
    type: '({ id }: {',
    required: false,
    description: ' Callback triggered when an option is removed in multi-select mode. Receives an object with the ID of the removed option. Useful for handling removal-specific logic separately from general onChange. ',
  },
  {
    name: 'id',
    type: 'Option | string',
    required: true,
    description: 'id property',
  },
  {
    name: 'onMenuOpen',
    type: '() => void',
    required: false,
    description: ' Callback triggered when the dropdown menu opens. Use this for lazy loading options, analytics, or other open-related side effects. ',
  },
  {
    name: 'onMenuClose',
    type: '() => void',
    required: false,
    description: ' Callback triggered when the dropdown menu closes. Use this for cleanup, saving state, or other close-related side effects. ',
  },
  {
    name: 'components',
    type: 'Partial<any>',
    required: false,
    description: ' Custom react-select components to override default rendering. Allows deep customization of option rendering, control appearance, etc. See react-select documentation for available component slots. ',
  },
  {
    name: 'onMenuInputFocus',
    type: '(inputValue: string) => void',
    required: false,
    description: ' Callback triggered when the search input within the menu receives focus. Receives the current input value. Useful for search-related functionality. ',
  },
  {
    name: 'onInputChange',
    type: '(inputValue: string, action: InputActionMeta) => void',
    required: false,
    description: ' Callback triggered whenever the search input value changes. Different from onChange which only fires on selection - this fires on every keystroke. The action parameter indicates what caused the change (input, menu-close, etc.). ',
  },
  {
    name: 'inputValue',
    type: 'string',
    required: false,
    description: ' Current value of the search input for controlled search behavior. Use this when you want to control the search input externally. ',
  },
];

export { typeDefinitions, selectProps };