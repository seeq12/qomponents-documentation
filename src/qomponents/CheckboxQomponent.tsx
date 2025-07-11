/**
 * CheckboxQomponent Component
 *
 * A documentation component that provides detailed specifications for the Checkbox
 * Qomponent. This component documents checkbox form controls, including checked states,
 * label configurations, validation options, styling variants, and accessibility
 * features for implementing checkbox input elements.
 */

const checkboxProps = [
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: 'Additional CSS class names to apply to the Checkbox component for custom styling.',
  },
  {
    name: 'extraLabelClassNames',
    type: 'string',
    required: false,
    description: 'Additional CSS class names to apply to the Checkbox label for custom styling.',
  },
  {
    name: 'type',
    type: "'radio' | 'checkbox'",
    required: false,
    description: "Specifies whether the input is a radio button or a traditional checkbox. Default is 'checkbox'.",
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: 'A unique identifier for the Checkbox input element.',
  },
  {
    name: 'name',
    type: 'string',
    required: false,
    description: 'The name attribute for the Checkbox input, useful for grouping and form submissions.',
  },
  {
    name: 'checked',
    type: 'boolean',
    required: false,
    description: 'Controls the checked state of the Checkbox (for controlled components).',
  },
  {
    name: 'defaultChecked',
    type: 'boolean',
    required: false,
    description: 'Sets the initial checked state of the Checkbox (for uncontrolled components).',
  },
  {
    name: 'value',
    type: 'string | number',
    required: false,
    description: 'The value associated with the Checkbox input.',
  },
  {
    name: 'label',
    type: 'string | React.ReactNode',
    required: false,
    description: 'The label displayed next to the Checkbox. Can be a string or any React node.',
  },
  {
    name: 'onChange',
    type: 'React.ChangeEventHandler<FormControlElement>',
    required: false,
    description: 'Callback function called when the checked state changes.',
  },
  {
    name: 'onKeyDown',
    type: 'React.KeyboardEventHandler<FormControlElement>',
    required: false,
    description: 'Callback function called when a key is pressed while the Checkbox is focused.',
  },
  {
    name: 'onClick',
    type: 'React.MouseEventHandler<FormControlElement>',
    required: false,
    description: 'Callback function called when the Checkbox is clicked.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'If true, disables the Checkbox so it cannot be interacted with.',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: 'A string for the data-testid attribute, useful for selecting the Checkbox in tests.',
  },
];

const CheckboxQomponent: React.FC = () => {
  return (
    <div className="mt-8 flex flex-col gap-4">
      {checkboxProps.map((prop) => (
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
  );
};

export default CheckboxQomponent;
