/**
 * TabsQomponent Component
 *
 * A documentation component that provides comprehensive information about the Tabs
 * Qomponent. This component documents tab navigation functionality, including
 * tab configurations, content panels, styling variants, orientation options,
 * and accessibility features for implementing tabbed content interfaces.
 */

const tabsProps = [
  {
    name: 'tabs',
    type: 'TabItem[]',
    required: true,
    description: 'Array of tabs to be rendered',
  },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: 'Adds a class to the tabs container',
  },
  {
    name: 'defaultActiveTab',
    type: 'string',
    required: false,
    description: 'Sets the default active tab to be selected on first load',
  },
  {
    name: 'activeTab',
    type: 'string',
    required: false,
    description: 'Sets the active tab to be selected',
  },
  {
    name: 'transition',
    type: 'boolean',
    required: false,
    description: 'Enable transition animations',
  },
  {
    name: 'onTabSelect',
    type: '(tabId: string) => void',
    required: false,
    description: 'Function to be called when a tab is selected',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: 'Unique identifier for the tabs container',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: 'Test id for the tabs container',
  },
  {
    name: 'stretchTabs',
    type: 'boolean',
    required: false,
    description: 'If true, the tabs will stretch to fill the width of the container',
  },
];

const tabItemProps = [
  {
    name: 'label',
    type: 'string',
    required: true,
    description: 'Label of the tab',
  },
  {
    name: 'id',
    type: 'string',
    required: true,
    description: 'Unique identifier for the tab',
  },
  {
    name: 'content',
    type: 'React.JSX.Element',
    required: true,
    description: 'Content to be rendered when the tab is selected',
  },
  {
    name: 'icon',
    type: 'string',
    required: false,
    description: 'Icon to be rendered next to the label',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: 'Test id for the tab',
  },
  {
    name: 'tabExtraClassNames',
    type: 'string',
    required: false,
    description: 'Additional class names to be added to the tab',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Whether the tab is disabled',
  },
  {
    name: 'tabContentExtraClassNames',
    type: 'string',
    required: false,
    description: 'Additional class names to be added to the tab content',
  },
];

const TabsQomponent = () => {
  return (
    <div className="space-y-6">
      {/* TabItem Type Definition */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">TabItem Type</h3>
        <div className="rounded border border-blue-200 bg-blue-50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono font-semibold text-blue-800 text-base">TabItem</span>
            <span className="text-xs text-blue-600">interface</span>
          </div>
          <div className="text-blue-700 text-sm mb-3">Individual tab configuration object</div>
          <div className="flex flex-col gap-2">
            {tabItemProps.map(({ name, description, type, required }) => (
              <div key={name} className="bg-white p-3 rounded">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-mono font-semibold text-blue-700 text-sm">{name}</span>
                  <span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-700">{type}</span>
                  {required && <span className="text-xs text-red-600 font-semibold ml-2">required</span>}
                </div>
                <div className="text-gray-700 text-xs">{description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tabs Props</h3>
        <div className="flex flex-col gap-4">
          {tabsProps.map(({ name, description, type, required }) => (
            <div key={name} className="rounded border border-gray-200 bg-white p-4">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="font-mono font-semibold text-blue-700 text-base">{name}</span>
                <span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-700">{type}</span>
                {required && <span className="text-xs text-red-600 font-semibold ml-2">required</span>}
              </div>
              <div className="text-gray-700 text-sm">{description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsQomponent;
