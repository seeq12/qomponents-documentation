/**
 * AlertQomponent Component
 *
 * A documentation component that provides comprehensive information about the Alert
 * Qomponent. This component displays all available props, inheritance details,
 * variants, and configuration options for implementing alert notifications and
 * messaging components within applications. It includes both component-specific
 * properties and inherited tooltip functionality.
 */

const alertProps = [
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'The content to be displayed inside the alert.',
  },
  { name: 'dismissible', type: 'boolean', required: false, description: 'Indicates if the alert can be dismissed.' },
  {
    name: 'onClose',
    type: '() => void',
    required: false,
    description: 'Callback function to be called when the alert is closed.',
  },
  { name: 'show', type: 'boolean', required: false, description: 'Indicates if the alert should be shown.' },
  {
    name: 'variant',
    type: "'danger' | 'theme' | 'warning' | 'gray'",
    required: true,
    description: 'The variant of the alert.',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: 'The test ID for the alert, used for testing purposes.',
  },
  { name: 'id', type: 'string', required: false, description: 'The unique identifier for the alert.' },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: 'Additional CSS class names to be applied to the alert.',
  },
];

const inheritedProps = [
  { name: 'tooltip', type: 'string', description: 'Tooltip text to display on hover.' },
  { name: 'tooltipDelay', type: 'number', description: 'Delay before showing the tooltip.' },
  { name: 'tooltipPlacement', type: "'top' | 'bottom' | 'left' | 'right'", description: 'Placement of the tooltip.' },
  { name: 'tooltipTestId', type: 'string', description: 'Test ID for the tooltip.' },
];

const AlertQomponent: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-blue-800 mb-2">Inheritance</h3>
      <p className="text-blue-700 text-sm mb-3">
        Alert extends <span className="font-mono bg-white px-1 rounded">TooltipComponentProps</span>, which means it
        inherits all tooltip-related properties in addition to its own props.
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
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Alert Props</h3>
      <div className="flex flex-col gap-4">
        {alertProps.map((prop) => (
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

export default AlertQomponent;
