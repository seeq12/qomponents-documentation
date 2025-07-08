import React from 'react';

const typeDefinitions = [
  {
    name: 'SeeqActionDropdownItems',
    definition: `{
  id?: string;
  icon?: string;
  iconExtraClassNames?: string;
  display: string;
  action: (e?: Event) => void;
  enabled?: boolean;
  divider?: boolean;
  testId?: string;
  text?: string;
}`,
    description: 'Properties for each dropdown item.',
  },
];

const seeqActionDropdownProps = [
  {
    name: 'seeqActionDropdownItems',
    type: 'SeeqActionDropdownItems[]',
    required: true,
    description: 'Items for the dropdown content.',
  },
  { name: 'trigger', type: 'React.ReactNode', required: true, description: 'Element to be used as the trigger.' },
  { name: 'id', type: 'string', required: false, description: 'ID of the trigger.' },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: 'Extra class names for the dropdown container.',
  },
  { name: 'containerTestId', type: 'string', required: false, description: 'Test id for the container element.' },
  { name: 'disabled', type: 'boolean', required: false, description: 'Is the button disabled.' },
  {
    name: 'onClick',
    type: '(e: MouseEvent) => void',
    required: false,
    description: 'Function called when the trigger is clicked on.',
  },
  {
    name: 'align',
    type: "'start' | 'center' | 'end'",
    required: false,
    description: 'Alignment of the content of the popover.',
  },
  { name: 'alignOffset', type: 'number', required: false, description: 'Number offset from the aligned position.' },
  {
    name: 'placement',
    type: "'top' | 'bottom' | 'left' | 'right'",
    required: false,
    description: 'Placement of the popover.',
  },
  {
    name: 'placementOffset',
    type: 'number',
    required: false,
    description: 'Number offset from the placement position.',
  },
  { name: 'hasArrow', type: 'boolean', required: false, description: 'Set to display arrow or not.' },
  { name: 'isOpen', type: 'boolean', required: false, description: 'Is popover open.' },
  {
    name: 'onOpenChange',
    type: '(isOpen: boolean) => void',
    required: false,
    description: 'Function called to open and close popover.',
  },
  {
    name: 'setFocusOnTriggerOnClose',
    type: 'boolean',
    required: false,
    description: 'Sets focus on the trigger button after the dropdown is closed.',
  },
  {
    name: 'isCloseOnContentClick',
    type: 'boolean',
    required: false,
    description: 'Should popover close when the content is clicked?',
  },
  {
    name: 'keepFocusInsideDropdown',
    type: 'boolean',
    required: false,
    description: 'Focus should be kept within dropdown.',
  },
  {
    name: 'variant',
    type: "'create-workbench' | 'view-workbench' | 'insert-seeq-content'",
    required: true,
    description: 'Dropdown variant.',
  },
];

const inheritedProps = [
  { name: 'tooltip', type: 'string', description: 'Tooltip text to display on hover.' },
  { name: 'tooltipDelay', type: 'number', description: 'Delay before showing the tooltip.' },
  { name: 'tooltipPlacement', type: "'top' | 'bottom' | 'left' | 'right'", description: 'Placement of the tooltip.' },
  { name: 'tooltipTestId', type: 'string', description: 'Test ID for the tooltip.' },
];

const SeeqActionDropdownQomponent = () => (
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
        SeeqActionDropdown extends <span className="font-mono bg-white px-1 rounded">TooltipComponentProps</span>, which
        means it inherits all tooltip-related properties in addition to its own props.
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
    {/* SeeqActionDropdown Props */}
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">SeeqActionDropdown Props</h3>
      <div className="flex flex-col gap-4">
        {seeqActionDropdownProps.map((prop) => (
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

export default SeeqActionDropdownQomponent;
