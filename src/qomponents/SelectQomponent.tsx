const selectProps = [
  {
    name: 'onChange',
    type: '(newValue: SingleValue<Option> | MultiValue<Option>) => void',
    required: true,
    description: 'Handle change events on the select',
  },
  {
    name: 'options',
    type: 'Option[] | GroupedOption[]',
    required: true,
    description: 'Array of options that populate the select menu',
  },
  {
    name: 'closeMenuOnSelect',
    type: 'boolean',
    required: false,
    description: 'Set to true to not automatically close the menu on selection',
  },
  {
    name: 'creatable',
    type: 'boolean',
    required: false,
    description: 'Set to true if users can add new options',
  },
  {
    name: 'isDisabled',
    type: 'boolean',
    required: false,
    description: 'Set to true to disable the select',
  },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: 'Extra class names to be placed on the select container: this can be used to size the select',
  },
  {
    name: 'controlClassNames',
    type: 'string',
    required: false,
    description: 'Extra class names to be placed on the select control',
  },
  {
    name: 'filterConfig',
    type: 'unknown',
    required: false,
    description: 'Custom filter for search',
  },
  {
    name: 'getOptionLabel',
    type: '(option: Option) => ReactNode | undefined',
    required: false,
    description: 'Formats option labels in the menu and control as React components',
  },
  {
    name: 'getOptionValue',
    type: '(option: Option) => string',
    required: false,
    description: 'Resolves option data to a string to be displayed as the label by components',
  },
  {
    name: 'getSelectedValueLabel',
    type: '(option: Option) => ReactNode | undefined',
    required: false,
    description: 'Formats the selected option labels in the menu and control as React components',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: 'Id of the select component',
  },
  {
    name: 'inputGroup',
    type: 'InputGroupPlacement',
    required: false,
    description: 'If the select is displayed as part of an input group provide the placement here',
  },
  {
    name: 'inputId',
    type: 'string',
    required: false,
    description: 'Id of the input component',
  },
  {
    name: 'isClearable',
    type: 'boolean',
    required: false,
    description: 'Set to true if users should be able to clear selection',
  },
  {
    name: 'isLoading',
    type: 'boolean',
    required: false,
    description: 'Set to true while select options are loading',
  },
  {
    name: 'isMulti',
    type: 'boolean',
    required: false,
    description: 'Set to true if multiple options can be selected',
  },
  {
    name: 'isSearchable',
    type: 'boolean',
    required: false,
    description: 'Set to true if select should be searchable by typing in the select box',
  },
  {
    name: 'menuIsOpen',
    type: 'boolean',
    required: false,
    description: 'Set to true to keep the menu open; this is helpful for debugging',
  },
  {
    name: 'menuPlacement',
    type: 'MenuPlacement',
    required: false,
    description: 'Where the menu should be displayed - auto is usually a great choice',
  },
  {
    name: 'menuPortalTarget',
    type: 'null | HTMLElement',
    required: false,
    description: 'Whether the menu should use a portal, and where it should attach',
  },
  {
    name: 'noOptionsMessage',
    type: 'string',
    required: false,
    description: 'Message displayed if no options are available',
  },
  {
    name: 'placeholder',
    type: 'string',
    required: false,
    description: 'Placeholder text that is displayed when no option is selected',
  },
  {
    name: 'showError',
    type: 'boolean',
    required: false,
    description: 'If true error formatting will be displayed',
  },
  {
    name: 'small',
    type: 'boolean',
    required: false,
    description: 'If true the select will be displayed in a "small" version',
  },
  {
    name: 'value',
    type: 'Option | undefined',
    required: false,
    description: 'Value of the select',
  },
  {
    name: 'defaultValue',
    type: 'Option | undefined',
    required: false,
    description: 'Default value of the select',
  },
  {
    name: 'filterOption',
    type: '(option: Option, rawInput: string) => boolean',
    required: false,
    description: 'Custom method to filter whether an option should be displayed in the menu',
  },
  {
    name: 'formatGroupLabel',
    type: '(group: GroupBase<unknown>) => ReactNode',
    required: false,
    description: 'Formats group labels in the menu as React components',
  },
  {
    name: 'onRemove',
    type: '({ id }: { id: Option | string }) => void',
    required: false,
    description: 'Handle remove events in multi-select',
  },
  {
    name: 'onMenuOpen',
    type: '() => void',
    required: false,
    description: 'Custom handle for on menu open events in select component',
  },
  {
    name: 'onMenuClose',
    type: '() => void',
    required: false,
    description: 'Custom handle for on menu close events in select component',
  },
  {
    name: 'components',
    type: 'Partial<any>',
    required: false,
    description: 'Custom components to be used in the select',
  },
  {
    name: 'onMenuInputFocus',
    type: '(inputValue: string) => void',
    required: false,
    description: 'Custom handle for on menu input focus events in select',
  },
  {
    name: 'onInputChange',
    type: '(inputValue: string, action: InputActionMeta) => void',
    required: false,
    description:
      'Custom handle for on input change events for the select - this is different from onChange which is only called when an option is selected - this event is called whenever something about the select changes; the action tells you what changed',
  },
  {
    name: 'inputValue',
    type: 'string',
    required: false,
    description: 'Value of the search input',
  },
];

const typeDefinitions = [
  {
    name: 'Option',
    definition: '{ label: string; value: string | number } | any',
    description: 'Basic option type with label and value, or any custom object',
  },
  {
    name: 'GroupedOption',
    definition: '{ label: string; options: Option[] }',
    description: 'Option group with a label and array of options',
  },
  {
    name: 'InputGroupPlacement',
    definition: "'left' | 'right'",
    description: 'Placement of the select within an input group',
  },
];

const SelectQomponent = () => {
  return (
    <div className="space-y-6">
      {/* Type Definitions */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Type Definitions</h3>
        <div className="flex flex-col gap-3">
          {typeDefinitions.map((type) => (
            <div key={type.name} className="rounded border border-blue-200 bg-blue-50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono font-semibold text-blue-800 text-base">{type.name}</span>
                <span className="text-xs text-blue-600">type</span>
              </div>
              <div className="font-mono text-sm text-blue-700 mb-2 bg-white p-2 rounded">{type.definition}</div>
              <div className="text-blue-700 text-sm">{type.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Props */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Props</h3>
        <div className="flex flex-col gap-4">
          {selectProps.map((prop) => (
            <div key={prop.name} className="rounded border border-gray-200 bg-white p-4">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="font-mono font-semibold text-blue-700 text-base">{prop.name}</span>
                <span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-700">{prop.type}</span>
                {prop.required && <span className="text-xs text-red-600 font-semibold ml-2">required</span>}
              </div>
              <div className="text-gray-700 text-sm">{prop.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectQomponent;
