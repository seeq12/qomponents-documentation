/**
 * ButtonWithDropdownQomponent Component
 *
 * A documentation component that provides comprehensive information about the ButtonWithDropdown
 * Qomponent. This component documents button dropdown functionality, including dropdown
 * configurations, menu items, positioning options, and interactive behaviors for
 * implementing button components with attached dropdown menus.
 */

import React from 'react';

const typeDefinitions = [
  {
    name: 'DropdownSubItem',
    description: 'Interface for dropdown sub-menu items with optional icons, click handlers, and tooltips.',
    properties: [
      {
        name: 'iconClass',
        type: 'string',
        required: false,
        description: "Icon class for dropdown subitems (e.g., 'fc-zoom')",
      },
      {
        name: 'label',
        type: 'string',
        required: true,
        description: 'Display label for the subitem',
      },
      {
        name: 'onClick',
        type: '(e?: Event) => void',
        required: false,
        description: 'Click handler function for the subitem',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: 'Whether the subitem is disabled',
      },
      {
        name: 'tooltip',
        type: 'string',
        required: false,
        description: 'Tooltip text for the subitem',
      },
    ],
  },
  {
    name: 'DropdownItems',
    description: 'Interface for main dropdown items, extends TooltipComponentProps for tooltip functionality.',
    properties: [
      {
        name: 'id',
        type: 'string',
        required: false,
        description: 'Unique identifier for the dropdown item',
      },
      {
        name: 'icon',
        type: 'string',
        required: false,
        description: "Icon class (e.g., 'fc-zoom')",
      },
      {
        name: 'iconType',
        type: 'string',
        required: false,
        description: "Icon type (e.g., 'theme')",
      },
      {
        name: 'iconColor',
        type: 'string',
        required: false,
        description: 'Icon color',
      },
      {
        name: 'iconCustomId',
        type: 'string',
        required: false,
        description: 'Custom ID for the icon',
      },
      {
        name: 'iconExtraClassNames',
        type: 'string',
        required: false,
        description: 'Additional CSS classes for the icon',
      },
      {
        name: 'label',
        type: 'string | React.ReactNode',
        required: true,
        description: 'Label content (string or React element)',
      },
      {
        name: 'labelCustomId',
        type: 'string',
        required: false,
        description: 'Custom ID for the label',
      },
      {
        name: 'isLabel',
        type: 'boolean',
        required: false,
        description: 'Whether this item is just a label',
      },
      {
        name: 'onClick',
        type: '(e?: Event) => void',
        required: true,
        description: 'Required click handler',
      },
      {
        name: 'labelClasses',
        type: 'string',
        required: false,
        description: 'CSS classes for the label',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: 'Whether the item is disabled',
      },
      {
        name: 'itemCustomId',
        type: 'string',
        required: false,
        description: 'Custom ID for the item',
      },
      {
        name: 'itemExtraClassNames',
        type: 'string',
        required: false,
        description: 'Additional CSS classes for the item',
      },
      {
        name: 'labelTestId',
        type: 'string',
        required: false,
        description: 'Test ID for the label',
      },
      {
        name: 'iconTestId',
        type: 'string',
        required: false,
        description: 'Test ID for the icon',
      },
      {
        name: 'hasDivider',
        type: 'boolean',
        required: false,
        description: 'Whether to show a divider below this item',
      },
      {
        name: 'testId',
        type: 'string',
        required: false,
        description: 'General test ID for the item',
      },
      {
        name: 'subMenuItems',
        type: 'DropdownSubItem[]',
        required: false,
        description: 'Array of sub-menu items',
      },
    ],
  },
  {
    name: 'ButtonWithDropdownProps',
    description: 'Main component props interface, extends TooltipComponentProps for tooltip functionality.',
    properties: [
      {
        name: 'dropdownItems',
        type: 'DropdownItems[]',
        required: true,
        description: 'Array of dropdown item configurations',
      },
      {
        name: 'triggerIcon',
        type: 'React.ReactNode',
        required: true,
        description: 'React element used as the dropdown trigger',
      },
      {
        name: 'id',
        type: 'string',
        required: false,
        description: 'Unique identifier for the trigger',
      },
      {
        name: 'extraClassNames',
        type: 'string',
        required: false,
        description: 'Additional CSS classes for the trigger',
      },
      {
        name: 'containerTestId',
        type: 'string',
        required: false,
        description: 'Test ID for the dropdown container',
      },
      {
        name: 'contentExtraClassNames',
        type: 'string',
        required: false,
        description: 'Additional CSS classes for dropdown content',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: 'Whether the dropdown is disabled',
      },
      {
        name: 'align',
        type: "'start' | 'center' | 'end'",
        required: false,
        description: 'Horizontal alignment of dropdown content',
      },
      {
        name: 'alignOffset',
        type: 'number',
        required: false,
        description: 'Pixel offset from aligned position',
      },
      {
        name: 'placement',
        type: "'top' | 'bottom' | 'left' | 'right'",
        required: false,
        description: 'Where dropdown appears relative to trigger',
      },
      {
        name: 'placementOffset',
        type: 'number',
        required: false,
        description: 'Pixel offset from placement position',
      },
      {
        name: 'hasArrow',
        type: 'boolean',
        required: false,
        description: 'Whether to show an arrow pointer',
      },
      {
        name: 'isOpen',
        type: 'boolean',
        required: false,
        description: 'Controlled open state',
      },
      {
        name: 'onOpenChange',
        type: '(isOpen: boolean) => void',
        required: false,
        description: 'Callback when open state changes',
      },
      {
        name: 'setFocusOnTriggerOnClose',
        type: 'boolean',
        required: false,
        description: 'Focus trigger after dropdown closes',
      },
      {
        name: 'keepFocusInsideDropdown',
        type: 'boolean',
        required: false,
        description: 'Keep focus trapped within dropdown',
      },
      {
        name: 'onContainerClick',
        type: '(e: React.MouseEvent<HTMLDivElement>) => void',
        required: false,
        description: 'Callback for container click events',
      },
    ],
  },
];

const buttonWithDropdownProps = [
  {
    name: 'dropdownItems',
    type: 'DropdownItems[]',
    required: true,
    description:
      'An array of dropdown item objects, each describing a selectable option or submenu in the dropdown. Each item can have icons, labels, click handlers, subitems, and more.',
  },
  {
    name: 'triggerIcon',
    type: 'React.ReactNode',
    required: true,
    description: 'The icon or element that triggers the dropdown when clicked. Typically an <Icon /> component.',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: 'A unique identifier for the dropdown trigger element.',
  },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: 'Additional CSS class names to apply to the dropdown trigger for custom styling.',
  },
  {
    name: 'containerTestId',
    type: 'string',
    required: false,
    description: 'A string for the data-testid attribute on the dropdown container, useful for testing.',
  },
  {
    name: 'contentExtraClassNames',
    type: 'string',
    required: false,
    description: 'Additional CSS class names to apply to the dropdown content container.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'If true, disables the dropdown trigger so it cannot be interacted with.',
  },
  {
    name: 'align',
    type: "'start' | 'center' | 'end'",
    required: false,
    description: 'Controls horizontal alignment of the dropdown content relative to the trigger.',
  },
  {
    name: 'alignOffset',
    type: 'number',
    required: false,
    description: 'Number of pixels to offset the dropdown content from its aligned position.',
  },
  {
    name: 'placement',
    type: "'top' | 'bottom' | 'left' | 'right'",
    required: false,
    description: 'Specifies where the dropdown appears relative to the trigger.',
  },
  {
    name: 'placementOffset',
    type: 'number',
    required: false,
    description: 'Number of pixels to offset the dropdown content from its placement position.',
  },
  {
    name: 'hasArrow',
    type: 'boolean',
    required: false,
    description: 'If true, displays an arrow pointing from the dropdown content to the trigger.',
  },
  {
    name: 'isOpen',
    type: 'boolean',
    required: false,
    description: 'Controls whether the dropdown is open. Useful for controlled components.',
  },
  {
    name: 'onOpenChange',
    type: '(isOpen: boolean) => void',
    required: false,
    description: 'Callback function called when the open state of the dropdown changes.',
  },
  {
    name: 'setFocusOnTriggerOnClose',
    type: 'boolean',
    required: false,
    description: 'If true, focuses the trigger button after the dropdown is closed.',
  },
  {
    name: 'keepFocusInsideDropdown',
    type: 'boolean',
    required: false,
    description: 'If true, keeps keyboard focus trapped within the dropdown while open.',
  },
  {
    name: 'onContainerClick',
    type: '(e: React.MouseEvent<HTMLDivElement>) => void',
    required: false,
    description: 'Callback function called when the dropdown container is clicked.',
  },
];

const inheritedProps = [
  {
    name: 'tooltip',
    type: 'string',
    description: 'Text to display in a tooltip when hovering over the dropdown trigger.',
  },
  {
    name: 'tooltipDelay',
    type: 'number',
    description: 'Delay in milliseconds before showing the tooltip.',
  },
  {
    name: 'tooltipPlacement',
    type: "'top' | 'bottom' | 'left' | 'right'",
    description: 'Placement of the tooltip relative to the trigger.',
  },
  {
    name: 'tooltipTestId',
    type: 'string',
    description: 'A test id for the tooltip, useful for automated testing.',
  },
];

const ButtonWithDropdownQomponent: React.FC = () => (
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
        ButtonWithDropdown extends <span className="font-mono bg-white px-1 rounded">TooltipComponentProps</span>, which
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
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">ButtonWithDropdown Props</h3>
      <div className="flex flex-col gap-4">
        {buttonWithDropdownProps.map((prop) => (
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

export default ButtonWithDropdownQomponent;
