/**
 * InputGroupQomponent Component
 *
 * A documentation component that provides detailed specifications for the InputGroup
 * Qomponent. This component documents input group functionality, including input
 * combinations, addon configurations, button attachments, and styling options
 * for creating grouped form input elements with enhanced functionality.
 */

const typeDefinitions = [
  {
    name: 'AppendedButtonProps',
    description: 'Interface representing the properties for an appended button.',
    properties: [
      { name: 'variant', type: "'button'", required: true, description: 'Specifies that the variant is a button' },
      { name: 'buttonProps', type: 'ButtonProps', required: true, description: 'The properties for the button' },
    ],
  },
  {
    name: 'ElementProps',
    description: 'Props for an element variant in the InputGroup appended component.',
    properties: [
      { name: 'variant', type: "'element'", required: true, description: 'Specifies that this is an element variant' },
      {
        name: 'element',
        type: 'React.ReactNode',
        required: true,
        description: 'The React node to be rendered as the element',
      },
    ],
  },
  {
    name: 'AppendedProps',
    description: 'Union type for appended items - can be button, element, or undefined.',
    properties: [
      {
        name: 'AppendedButtonProps',
        type: 'AppendedButtonProps',
        required: false,
        description: 'Button variant properties',
      },
      { name: 'ElementProps', type: 'ElementProps', required: false, description: 'Element variant properties' },
      { name: 'undefined', type: 'undefined', required: false, description: 'Can also be undefined' },
    ],
  },
  {
    name: 'BaseInputGroupProps',
    description: 'Interface representing the base properties for an input group component, extends TextFieldProps.',
    properties: [
      {
        name: 'append',
        type: 'AppendedProps[]',
        required: true,
        description: 'Array of elements to be appended to the input group',
      },
      {
        name: 'field',
        type: 'React.ReactNode',
        required: false,
        description: 'The field to be rendered in the input group',
      },
    ],
  },
  {
    name: 'InputGroupProps',
    description:
      'Combined InputGroupProps that extends BaseInputGroupProps, TooltipComponentProps, and InputLengthStyleProps.',
    properties: [
      {
        name: 'BaseInputGroupProps',
        type: 'BaseInputGroupProps',
        required: true,
        description: 'Base input group properties',
      },
      {
        name: 'TooltipComponentProps',
        type: 'TooltipComponentProps',
        required: true,
        description: 'Tooltip-related properties',
      },
      {
        name: 'InputLengthStyleProps',
        type: 'InputLengthStyleProps',
        required: true,
        description: 'Input length styling properties',
      },
    ],
  },
];

const inputGroupProps = [
  {
    name: 'append',
    type: 'AppendedProps[]',
    required: true,
    description: 'Array of elements to be appended to the input group. Each element can be a button or custom element.',
  },
  {
    name: 'field',
    type: 'React.ReactNode',
    required: false,
    description: 'The field to be rendered in the input group.',
  },
];

const inheritedProps = [
  {
    name: 'TextFieldProps',
    type: 'object',
    description: 'All props from TextField component including value, onChange, placeholder, etc.',
  },
  {
    name: 'TooltipComponentProps',
    type: 'object',
    description: 'All tooltip-related props including tooltip, tooltipPlacement, tooltipDelay.',
  },
  {
    name: 'InputLengthStyleProps',
    type: 'object',
    description: 'Input length styling properties for visual customization.',
  },
];

const InputGroupQomponent = () => (
  <div className="space-y-6">
    {/* Type Definitions */}
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Type Definitions</h3>
      <div className="flex flex-col gap-6">
        {typeDefinitions.map((type) => (
          <div key={type.name} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono font-semibold text-blue-800 text-base">{type.name}</span>
              <span className="text-xs text-blue-600">interface</span>
            </div>
            <div className="text-blue-700 text-sm mb-3">{type.description}</div>
            <div className="flex flex-col gap-2">
              {type.properties.map((prop) => (
                <div key={prop.name} className="bg-white p-2 rounded">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-mono font-semibold text-blue-700 text-sm">{prop.name}</span>
                    <span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-700">{prop.type}</span>
                    {prop.required && <span className="text-xs text-red-600 font-semibold">required</span>}
                  </div>
                  <div className="text-blue-700 text-xs">{prop.description}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Inheritance Notice */}
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-blue-800 mb-2">Inheritance</h3>
      <p className="text-blue-700 text-sm mb-3">
        InputGroup extends multiple interfaces: <span className="font-mono bg-white px-1 rounded">TextFieldProps</span>,{' '}
        <span className="font-mono bg-white px-1 rounded">TooltipComponentProps</span>, and{' '}
        <span className="font-mono bg-white px-1 rounded">InputLengthStyleProps</span>, which means it inherits all
        properties from these components in addition to its own props.
      </p>
      <div className="flex flex-col gap-2">
        {inheritedProps.map((prop) => (
          <div key={prop.name} className="bg-white p-2 rounded">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="font-mono font-semibold text-blue-700 text-sm">{prop.name}</span>
              <span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-700">{prop.type}</span>
              <span className="text-xs text-blue-600">inherited</span>
            </div>
            <div className="text-blue-700 text-xs">{prop.description}</div>
          </div>
        ))}
      </div>
    </div>
    {/* InputGroup Props */}
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">InputGroup Props</h3>
      <div className="flex flex-col gap-4">
        {inputGroupProps.map((prop) => (
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

export default InputGroupQomponent;
