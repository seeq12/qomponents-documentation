/**
 * IconQomponent Component
 *
 * A documentation component that provides detailed specifications for the Icon
 * Qomponent. This component documents all available icon properties, types,
 * color options, styling configurations, and interactive behaviors. It covers
 * FontAwesome integration, custom icon support, and various visual styling
 * options available for icon implementation.
 */

const iconProps = [
  {
    name: 'icon',
    type: 'string',
    required: true,
    description: 'Icon class to be used (i.e. fc-zoom)',
  },
  {
    name: 'iconPrefix',
    type: 'string',
    required: false,
    description:
      'Normally we want for Icon to prefix FontAwesome icons with the fa-sharp fa-regular prefix however there are a select few icons that are not pulled from that set. For those we need to pass specific prefixes instead.',
  },
  {
    name: 'type',
    type: 'IconType',
    required: false,
    description: 'Icon color option (text, white, theme, color, inherit; default is "theme")',
  },
  {
    name: 'color',
    type: 'string',
    required: false,
    description: 'Used to add a custom color to the icon (required if type="color")',
  },
  {
    name: 'onClick',
    type: '(e?: React.MouseEvent<HTMLElement, MouseEvent>) => any',
    required: false,
    description: 'Function to call when clicking the icon (takes no parameters)',
  },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: 'Extra class names to be placed on the Icon component',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: 'Id that can be placed on the Icon component',
  },
  {
    name: 'large',
    type: 'boolean',
    required: false,
    description: "True to add the 'fa-lg' class to the icon",
  },
  {
    name: 'small',
    type: 'boolean',
    required: false,
    description: "True to add the 'fa-sm' class to the icon",
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: 'Id that will be used in the data-testid attribute on the icon',
  },
  {
    name: 'customId',
    type: 'string',
    required: false,
    description:
      'Id that will be used in the data-customid attribute on the icon. Can be used to identify the icon as the click event target in an event handler',
  },
  {
    name: 'number',
    type: 'number',
    required: false,
    description: 'Number value for the icon',
  },
];

const inheritedProps = [
  {
    name: 'tooltip',
    type: 'string',
    description: 'Tooltip text to display on hover',
  },
  {
    name: 'tooltipDelay',
    type: 'number',
    description: 'Delay before showing the tooltip',
  },
  {
    name: 'tooltipPlacement',
    type: "'top' | 'bottom' | 'left' | 'right'",
    description: 'Placement of the tooltip',
  },
  {
    name: 'tooltipTestId',
    type: 'string',
    description: 'Test ID for the tooltip',
  },
];

const typeDefinitions = [
  {
    name: 'IconType',
    definition:
      "'theme' | 'white' | 'dark-gray' | 'darkish-gray' | 'gray' | 'color' | 'info' | 'text' | 'warning' | 'inherit' | 'danger' | 'theme-light' | 'success'",
    description: 'Available color variants for the icon',
  },
];

const IconQomponent = () => {
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

      {/* Inheritance Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Inheritance</h3>
        <p className="text-blue-700 text-sm mb-3">
          Icon extends <span className="font-mono bg-white px-1 rounded">TooltipComponentProps</span>, which means it
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

      {/* Icon Props */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Icon Props</h3>
        <div className="flex flex-col gap-4">
          {iconProps.map((prop) => (
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

export default IconQomponent;
