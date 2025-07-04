const buttonWithPopoverProps = [
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'Items for the popover content',
  },
  {
    name: 'trigger',
    type: 'React.ReactNode',
    required: false,
    description: "Icon class to be used with the toolbar (i.e. 'fc-zoom')",
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: 'Unique identifier for the component',
  },
  {
    name: 'containerTestId',
    type: 'string',
    required: false,
    description: 'Id that will be used in the data-testid attribute on the container element',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Whether the button with popover is disabled',
  },
  {
    name: 'onClick',
    type: '(isOpen: boolean) => void',
    required: false,
    description: 'Function called when the toolbar is clicked on, i.e. for tracking (does not open the popover)',
  },
  {
    name: 'align',
    type: "'start' | 'center' | 'end'",
    required: false,
    description: 'Alignment of the content of the popover',
  },
  {
    name: 'alignOffset',
    type: 'number',
    required: false,
    description: 'Number offset from the aligned position',
  },
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
  {
    name: 'isOpen',
    type: 'boolean',
    required: false,
    description: 'Is popover open',
  },
  {
    name: 'onOpenChange',
    type: '(isOpen: boolean) => void',
    required: false,
    description: 'Function called to open and close popover',
  },
  {
    name: 'hasArrow',
    type: 'boolean',
    required: false,
    description: 'Set to display arrow or not',
  },
  {
    name: 'isHoverEnabled',
    type: 'boolean',
    required: false,
    description: 'Displays the popover when we hover over trigger',
  },
  {
    name: 'hoverOpenDelay',
    type: 'number',
    required: false,
    description: 'Delay before popover is displayed when isHoverEnabled is true',
  },
  {
    name: 'extraTriggerClassNames',
    type: 'string',
    required: false,
    description: 'Extra trigger container classnames',
  },
  {
    name: 'extraPopoverClassNames',
    type: 'string',
    required: false,
    description: 'Extra popover container classnames',
  },
  {
    name: 'isCloseOnContentClick',
    type: 'boolean',
    required: false,
    description: 'Should popover close when the content is clicked?',
  },
  {
    name: 'onInteractOutside',
    type: '() => void',
    required: false,
    description: 'Calls the function if click or focus happens outside popover content',
  },
  {
    name: 'onPointerDownOutside',
    type: '() => void',
    required: false,
    description: 'Calls the function if pointer down happens outside popover content',
  },
  {
    name: 'isTriggerAsChild',
    type: 'boolean',
    required: false,
    description: 'Merge trigger button with trigger element',
  },
  {
    name: 'shouldTriggerFullWidth',
    type: 'boolean',
    required: false,
    description: 'Should trigger button take full width',
  },
  {
    name: 'isPortal',
    type: 'boolean',
    required: false,
    description: 'Is popover rendered in a portal',
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

const ButtonWithPopoverQomponent = () => {
  return (
    <div className="space-y-6">
      {/* Inheritance Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Inheritance</h3>
        <p className="text-blue-700 text-sm mb-3">
          ButtonWithPopover extends <span className="font-mono bg-white px-1 rounded">TooltipComponentProps</span>,
          which means it inherits all tooltip-related properties in addition to its own props.
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

      {/* ButtonWithPopover Props */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">ButtonWithPopover Props</h3>
        <div className="flex flex-col gap-4">
          {buttonWithPopoverProps.map((prop) => (
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

export default ButtonWithPopoverQomponent;
