import React from 'react';

const typeDefinitions = [
  {
    name: 'SeeqActionDropdownItems',
    description: 'Properties for each dropdown item with display text, actions, and optional styling.',
    properties: [
      { name: 'id', type: 'string', required: false, description: 'Optional unique identifier for the dropdown item' },
      {
        name: 'icon',
        type: 'string',
        required: false,
        description: "Icon class to be used with the workbench items (e.g., 'fc-zoom')",
      },
      {
        name: 'iconExtraClassNames',
        type: 'string',
        required: false,
        description: 'Additional CSS classes for the icon',
      },
      { name: 'display', type: 'string', required: true, description: 'Label text for the workbench items' },
      {
        name: 'action',
        type: '(e?: Event) => void',
        required: true,
        description: 'Function called when the workbench item is clicked',
      },
      {
        name: 'enabled',
        type: 'boolean',
        required: false,
        description: 'Whether the item is enabled (opposite of disabled)',
      },
      {
        name: 'divider',
        type: 'boolean',
        required: false,
        description: 'Displays a divider line under present workbench item',
      },
      { name: 'testId', type: 'string', required: false, description: 'Test ID for the workbench item' },
      { name: 'text', type: 'string', required: false, description: 'Subtext displayed below workbench item headline' },
    ],
  },
  {
    name: 'SeeqActionDropdownProps',
    description: 'Main component props interface, extends TooltipComponentProps for tooltip functionality.',
    properties: [
      {
        name: 'seeqActionDropdownItems',
        type: 'SeeqActionDropdownItems[]',
        required: true,
        description: 'Items for the dropdown content',
      },
      { name: 'trigger', type: 'React.ReactNode', required: true, description: 'Element to be used as the trigger' },
      { name: 'id', type: 'string', required: false, description: 'ID of the trigger' },
      {
        name: 'extraClassNames',
        type: 'string',
        required: false,
        description: 'Extra class names to be placed on the dropdown container',
      },
      {
        name: 'containerTestId',
        type: 'string',
        required: false,
        description: 'ID for the data-testid attribute on the container element',
      },
      { name: 'disabled', type: 'boolean', required: false, description: 'Whether the button is disabled' },
      {
        name: 'onClick',
        type: '(e: MouseEvent) => void',
        required: false,
        description: 'Function called when the trigger is clicked (for tracking, does not open popover)',
      },
      {
        name: 'align',
        type: "'start' | 'center' | 'end'",
        required: false,
        description: 'Alignment of the content of the popover',
      },
      { name: 'alignOffset', type: 'number', required: false, description: 'Number offset from the aligned position' },
      {
        name: 'placement',
        type: "'top' | 'bottom' | 'left' | 'right'",
        required: false,
        description: 'The placement of the popover',
      },
      {
        name: 'placementOffset',
        type: 'number',
        required: false,
        description: 'Number offset from the placement position',
      },
      { name: 'hasArrow', type: 'boolean', required: false, description: 'Set to display arrow or not' },
      { name: 'isOpen', type: 'boolean', required: false, description: 'Whether popover is open' },
      {
        name: 'onOpenChange',
        type: '(isOpen: boolean) => void',
        required: false,
        description: 'Function called to open and close popover',
      },
      {
        name: 'setFocusOnTriggerOnClose',
        type: 'boolean',
        required: false,
        description: 'Sets focus on the trigger button after the dropdown is closed',
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
        description: 'Focus should be kept within dropdown',
      },
      {
        name: 'variant',
        type: "'create-workbench' | 'view-workbench' | 'insert-seeq-content'",
        required: true,
        description: 'Dropdown variant specifying the type of action',
      },
    ],
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
