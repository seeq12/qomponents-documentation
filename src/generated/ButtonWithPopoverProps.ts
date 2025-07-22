// TypeScript type definitions for ButtonWithPopover props
interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

const buttonwithpopoverProps: PropDefinition[] = [
  {
    name: 'trigger',
    type: 'React.ReactNode',
    required: false,
    description: ' React element to use as the clickable trigger for the popover. Can be an icon, text, button, or any interactive element that users click to open the popover. ',
  },
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    description: ' Content to display inside the popover when it\'s open. Can be any React elements including forms, lists, complex layouts, or interactive components. ',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: ' HTML ID attribute for the popover trigger element. Should be unique across the page for proper HTML semantics and accessibility. ',
  },
  {
    name: 'containerTestId',
    type: 'string',
    required: false,
    description: ' Test ID attribute for the popover container element used in automated testing. Applied to the main container that wraps both trigger and popover content. ',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: ' When true, disables the popover trigger preventing user interaction. Disabled triggers appear visually dimmed and don\'t open the popover when clicked. ',
  },
  {
    name: 'onClick',
    type: '(isOpen: boolean) => void',
    required: false,
    description: ' Callback function triggered when the trigger is clicked. Receives the current open state as a parameter. Note: this doesn\'t control popover opening, it\'s mainly for tracking or analytics purposes. ',
  },
  {
    name: 'align',
    type: '\'start\' | \'center\' | \'end\'',
    required: false,
    description: ' Horizontal alignment of the popover content relative to the trigger: - `start`: Aligns to the left edge of the trigger - `center`: Centers the popover on the trigger - `end`: Aligns to the right edge of the trigger ',
  },
  {
    name: 'alignOffset',
    type: 'number',
    required: false,
    description: ' Numeric offset in pixels from the aligned position. Positive values move the popover further from the trigger in the align direction. ',
  },
  {
    name: 'placement',
    type: '\'top\' | \'bottom\' | \'left\' | \'right\'',
    required: false,
    description: ' Position of the popover relative to the trigger element: - `top`: Popover appears above the trigger - `bottom`: Popover appears below the trigger - `left`: Popover appears to the left of the trigger - `right`: Popover appears to the right of the trigger ',
  },
  {
    name: 'placementOffset',
    type: 'number',
    required: false,
    description: ' Numeric offset in pixels from the placement position. Positive values move the popover further away from the trigger. ',
  },
  {
    name: 'isOpen',
    type: 'boolean',
    required: false,
    description: ' Controls whether the popover is currently open and visible. Use this for controlled popover behavior where you manage open state externally. ',
  },
  {
    name: 'onOpenChange',
    type: '(isOpen: boolean) => void',
    required: false,
    description: ' Callback function triggered when the popover open state changes. Receives the new open state as a boolean parameter. Use this to sync with external state. ',
  },
  {
    name: 'hasArrow',
    type: 'boolean',
    required: false,
    description: ' When true, displays a visual arrow pointing from the popover to the trigger. Helps users understand the relationship between trigger and popover content. ',
  },
  {
    name: 'isHoverEnabled',
    type: 'boolean',
    required: false,
    description: ' When true, enables the popover to open when hovering over the trigger. Useful for preview or quick-info popovers that don\'t require clicking. ',
  },
  {
    name: 'hoverOpenDelay',
    type: 'number',
    required: false,
    description: ' Delay in milliseconds before the popover opens when hover is enabled. Prevents accidental popover opening from brief mouse movements. Only relevant when `isHoverEnabled` is true. ',
  },
  {
    name: 'extraTriggerClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply to the trigger container element. Use this to customize the trigger\'s appearance beyond default styling. ',
  },
  {
    name: 'extraPopoverClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply to the popover content container. Use this to customize the popover\'s appearance, spacing, or styling. ',
  },
  {
    name: 'isCloseOnContentClick',
    type: 'boolean',
    required: false,
    description: ' When true, automatically closes the popover when any content inside it is clicked. Useful for action popovers where selecting an option should close the popover. ',
  },
  {
    name: 'onInteractOutside',
    type: '() => void',
    required: false,
    description: ' Callback function triggered when user interacts outside the popover content. This includes clicks, taps, and focus events outside the popover area. Use this to handle outside interactions or implement custom close behavior. ',
  },
  {
    name: 'onPointerDownOutside',
    type: '() => void',
    required: false,
    description: ' Callback function triggered when user clicks/taps outside the popover content. More specific than `onInteractOutside`, focusing only on pointer down events. Use this for custom outside-click handling. ',
  },
  {
    name: 'isTriggerAsChild',
    type: 'boolean',
    required: false,
    description: ' When true, merges the trigger functionality with the provided trigger element. Instead of wrapping the trigger in a button, it adds trigger behavior to the element itself. Useful when the trigger element is already interactive. ',
  },
  {
    name: 'shouldTriggerFullWidth',
    type: 'boolean',
    required: false,
    description: ' When true, makes the trigger button expand to fill the full width of its container. Useful for layout consistency or when the trigger should span the available space. ',
  },
  {
    name: 'isPortal',
    type: 'boolean',
    required: false,
    description: ' When true, renders the popover content in a React portal. This moves the popover to the end of the document body, which can help with z-index issues and ensure the popover appears above other content. ',
  },
];

const inheritedProps: PropDefinition[] = [
  {
    name: 'tooltip',
    type: 'string',
    required: false,
    description: 'Text to display in a tooltip when hovering over the component.',
  },
  {
    name: 'tooltipDelay',
    type: 'number',
    required: false,
    description: 'Delay in milliseconds before showing the tooltip.',
  },
  {
    name: 'tooltipPlacement',
    type: '\'top\' | \'bottom\' | \'left\' | \'right\'',
    required: false,
    description: 'Placement of the tooltip relative to the component.',
  },
  {
    name: 'tooltipTestId',
    type: 'string',
    required: false,
    description: 'A test id for the tooltip, useful for automated testing.',
  },
];

export { buttonwithpopoverProps, inheritedProps };