const typeDefinitions = [
  {
    name: 'AppendedButtonProps',
    description: 'Properties for an appended button in the group.',
    properties: [
      { name: 'variant', type: "'button'", required: true, description: 'Identifies this as a button variant' },
      {
        name: 'buttonProps',
        type: "Omit<ButtonProps, 'onClick'> & { value: string; isActive?: boolean }",
        required: true,
        description: 'Button properties with value and optional active state',
      },
    ],
  },
  {
    name: 'ElementProps',
    description: 'Properties for an appended element in the group.',
    properties: [
      { name: 'variant', type: "'element'", required: true, description: 'Identifies this as an element variant' },
      { name: 'element', type: 'React.ReactNode', required: true, description: 'React element to render' },
      {
        name: 'extraClassNames',
        type: 'string',
        required: false,
        description: 'Additional CSS class names for the element',
      },
    ],
  },
  {
    name: 'Props',
    description: 'Union type for appended items - can be either a button or element.',
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
];

const buttonGroupProps = [
  { name: 'buttons', type: 'Props[]', required: true, description: 'Array of buttons/elements to form a group.' },
  { name: 'id', type: 'string', required: false, description: 'Unique identifier for the button group.' },
  { name: 'extraClassNames', type: 'string', required: false, description: 'Additional CSS class names.' },
  {
    name: 'onChange',
    type: '(value: string) => void',
    required: false,
    description: 'Callback when the selected value changes.',
  },
  { name: 'testId', type: 'string', required: false, description: 'Test ID for the button group.' },
];

const inheritedProps = [
  { name: 'tooltip', type: 'string', description: 'Tooltip text to display on hover.' },
  { name: 'tooltipDelay', type: 'number', description: 'Delay before showing the tooltip.' },
  { name: 'tooltipPlacement', type: "'top' | 'bottom' | 'left' | 'right'", description: 'Placement of the tooltip.' },
  { name: 'tooltipTestId', type: 'string', description: 'Test ID for the tooltip.' },
];

const ButtonGroupQomponent = () => (
  <div className="space-y-6">
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
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-blue-800 mb-2">Inheritance</h3>
      <p className="text-blue-700 text-sm mb-3">
        ButtonGroup extends <span className="font-mono bg-white px-1 rounded">TooltipComponentProps</span>, which means
        it inherits all tooltip-related properties in addition to its own props.
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
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">ButtonGroup Props</h3>
      <div className="flex flex-col gap-4">
        {buttonGroupProps.map((prop) => (
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

export default ButtonGroupQomponent;
