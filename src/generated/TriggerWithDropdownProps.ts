// TypeScript type definitions for TriggerWithDropdown props
interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

const triggerwithdropdownProps: PropDefinition[] = [
  {
    name: 'dropdownItems',
    type: 'DropdownItems[]',
    required: true,
    description: ' Array of items to display in the dropdown menu. Each item can be interactive (with onClick) or decorative (labels/dividers). Items can also contain sub-menus for hierarchical organization. ',
  },
  {
    name: 'triggerIcon',
    type: 'React.ReactNode',
    required: true,
    description: ' React element to use as the clickable trigger. Can be any React element — icon, text, custom component, etc. ',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: ' HTML ID attribute for the dropdown trigger element. Should be unique across the page for proper HTML semantics and accessibility. ',
  },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply to the dropdown trigger. Use this to customize the trigger\'s appearance beyond default styling. ',
  },
  {
    name: 'containerTestId',
    type: 'string',
    required: false,
    description: ' Test ID attribute for the dropdown container element used in automated testing. Applied to the main container that wraps both trigger and dropdown content. ',
  },
  {
    name: 'contentExtraClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply to the dropdown content container. Use this to customize the dropdown menu\'s appearance, spacing, or styling. ',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: ' When true, disables the dropdown trigger preventing user interaction. Disabled triggers appear visually dimmed and don\'t open the dropdown when clicked. ',
  },
  {
    name: 'align',
    type: '\'start\' | \'center\' | \'end\'',
    required: false,
    description: ' Horizontal alignment of the dropdown content relative to the trigger: - `start`: Aligns to the left edge of the trigger - `center`: Centers the dropdown on the trigger - `end`: Aligns to the right edge of the trigger ',
  },
  {
    name: 'alignOffset',
    type: 'number',
    required: false,
    description: ' Numeric offset in pixels from the aligned position. Positive values move the dropdown further from the trigger in the align direction. ',
  },
  {
    name: 'placement',
    type: '\'top\' | \'bottom\' | \'left\' | \'right\'',
    required: false,
    description: ' Position of the dropdown relative to the trigger element: - `top`: Dropdown appears above the trigger - `bottom`: Dropdown appears below the trigger - `left`: Dropdown appears to the left of the trigger - `right`: Dropdown appears to the right of the trigger ',
  },
  {
    name: 'placementOffset',
    type: 'number',
    required: false,
    description: ' Numeric offset in pixels from the placement position. Positive values move the dropdown further away from the trigger. ',
  },
  {
    name: 'hasArrow',
    type: 'boolean',
    required: false,
    description: ' When true, displays a visual arrow pointing from the dropdown to the trigger. Helps users understand the relationship between trigger and dropdown content. ',
  },
  {
    name: 'isOpen',
    type: 'boolean',
    required: false,
    description: ' Controls whether the dropdown is currently open and visible. Use this for controlled dropdown behavior where you manage open state externally. ',
  },
  {
    name: 'onOpenChange',
    type: '(isOpen: boolean) => void',
    required: false,
    description: ' Callback function triggered when the dropdown open state changes. Receives the new open state as a boolean parameter. Use this to sync with external state. ',
  },
  {
    name: 'setFocusOnTriggerOnClose',
    type: 'boolean',
    required: false,
    description: ' When true, automatically focuses the trigger button when the dropdown closes. Improves keyboard navigation and accessibility by returning focus to the trigger. ',
  },
  {
    name: 'keepFocusInsideDropdown',
    type: 'boolean',
    required: false,
    description: ' When true, traps keyboard focus within the dropdown when it\'s open. Prevents users from tabbing outside the dropdown, improving accessibility. ',
  },
  {
    name: 'onContainerClick',
    type: '(e: React.MouseEvent<HTMLDivElement>) => void',
    required: false,
    description: ' Callback function triggered when the dropdown container is clicked. Receives the click event. Use this for handling container-level interactions. ',
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

export { triggerwithdropdownProps, inheritedProps };