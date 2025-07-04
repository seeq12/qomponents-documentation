import React from 'react';

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
  {
    name: 'tooltip',
    type: 'string',
    required: false,
    description: 'Text to display in a tooltip when hovering over the dropdown trigger.',
  },
  {
    name: 'tooltipDelay',
    type: 'number',
    required: false,
    description: 'Delay in milliseconds before showing the tooltip.',
  },
  {
    name: 'tooltipPlacement',
    type: "'top' | 'bottom' | 'left' | 'right'",
    required: false,
    description: 'Placement of the tooltip relative to the trigger.',
  },
  {
    name: 'tooltipTestId',
    type: 'string',
    required: false,
    description: 'A test id for the tooltip, useful for automated testing.',
  },
];

const ButtonWithDropdownQomponent: React.FC = () => {
  return (
    <div className="mt-8 flex flex-col gap-4">
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
  );
};

export default ButtonWithDropdownQomponent;
