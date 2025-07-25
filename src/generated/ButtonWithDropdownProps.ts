// TypeScript type definitions for ButtonWithDropdown props
interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

interface TypeDefinition {
  name: string;
  description: string;
  properties: PropDefinition[];
}

const typeDefinitions: { [key: string]: TypeDefinition } = {
  DropdownItems: {
    name: 'DropdownItems',
    description: 'Interface for main dropdown menu items that can contain sub-menus.\nExtends TooltipComponentProps for enhanced tooltip functionality.',
    properties: [
      {
        name: 'id',
        type: 'string',
        required: false,
        description: ' HTML ID attribute for the dropdown item element. Should be unique for proper HTML semantics and accessibility. ',
      },
      {
        name: 'icon',
        type: 'string',
        required: false,
        description: ' Icon class name to display next to the item label. Typically uses Seeq or FontAwesome classes for consistent visual styling. ',
      },
      {
        name: 'iconType',
        type: 'string',
        required: false,
        description: ' Type/style of the icon that determines its rendering and colors. Common values include \'theme\', \'text\', \'color\' based on the Icon component. ',
      },
      {
        name: 'iconColor',
        type: 'string',
        required: false,
        description: ' Custom color for the icon when using color-type icons. Can be any valid CSS color value (hex, rgb, color names). ',
      },
      {
        name: 'iconCustomId',
        type: 'string',
        required: false,
        description: ' Custom HTML ID attribute specifically for the icon element. Useful for targeting the icon separately from the item container. ',
      },
      {
        name: 'iconExtraClassNames',
        type: 'string',
        required: false,
        description: ' Additional CSS classes to apply to the icon element. Use this to customize icon appearance beyond standard styling. ',
      },
      {
        name: 'label',
        type: 'string | React.ReactNode',
        required: true,
        description: ' Content to display as the item label. Can be simple text or any React element for rich content like formatted text or badges. ',
      },
      {
        name: 'labelCustomId',
        type: 'string',
        required: false,
        description: ' Custom HTML ID attribute specifically for the label element. Useful for accessibility or when you need to target the label separately. ',
      },
      {
        name: 'isLabel',
        type: 'boolean',
        required: false,
        description: ' When true, treats this item as a non-interactive label/header. Label items typically appear different visually and don\'t trigger onClick events. ',
      },
      {
        name: 'onClick',
        type: '(e?: Event) => void',
        required: true,
        description: ' Callback function triggered when the dropdown item is clicked. Required for interactive items. Use this to define the primary action for the item. ',
      },
      {
        name: 'labelClasses',
        type: 'string',
        required: false,
        description: ' Additional CSS classes to apply to the label element. Use this to customize label appearance, typography, or spacing. ',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: ' When true, disables this dropdown item preventing user interaction. Disabled items appear visually dimmed and don\'t respond to clicks. ',
      },
      {
        name: 'itemCustomId',
        type: 'string',
        required: false,
        description: ' Custom HTML ID attribute for the entire dropdown item container. Useful for unique identification and accessibility purposes. ',
      },
      {
        name: 'itemExtraClassNames',
        type: 'string',
        required: false,
        description: ' Additional CSS classes to apply to the dropdown item container. Use this to customize item appearance, spacing, or hover effects. ',
      },
      {
        name: 'labelTestId',
        type: 'string',
        required: false,
        description: ' Test ID attribute for the label element used in automated testing. Helps identify and interact with specific dropdown item labels in tests. ',
      },
      {
        name: 'iconTestId',
        type: 'string',
        required: false,
        description: ' Test ID attribute for the icon element used in automated testing. Helps identify and interact with specific dropdown item icons in tests. ',
      },
      {
        name: 'hasDivider',
        type: 'boolean',
        required: false,
        description: ' When true, displays a visual divider line below this dropdown item. Useful for grouping related items or separating different sections of the menu. ',
      },
      {
        name: 'testId',
        type: 'string',
        required: false,
        description: ' Test ID attribute for the dropdown item container used in automated testing. Helps identify and interact with specific dropdown items in test suites. ',
      },
      {
        name: 'subMenuItems',
        type: 'DropdownSubItem[]',
        required: false,
        description: ' Array of sub-menu items that appear when this item is hovered or clicked. Creates hierarchical dropdown menus for organizing related actions. ',
      }
    ],
  },
  DropdownSubItem: {
    name: 'DropdownSubItem',
    description: 'Interface for sub-menu items that appear in nested dropdown menus.\nUsed to create hierarchical menu structures within dropdown items.',
    properties: [
      {
        name: 'iconClass',
        type: 'string',
        required: false,
        description: ' Icon class name to display next to the sub-item label. Typically uses FontAwesome classes (e.g., \'fc-zoom\', \'fc-delete\'). Optional visual enhancement for better user recognition. ',
      },
      {
        name: 'label',
        type: 'string',
        required: true,
        description: ' Text label for the dropdown sub-item. This is the clickable text that users will see and interact with. ',
      },
      {
        name: 'onClick',
        type: '(e?: Event) => void',
        required: false,
        description: ' Callback function triggered when the sub-item is clicked. Use this to define the action that should occur when users select this sub-item. ',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: ' When true, disables the sub-item preventing user interaction. Disabled items appear visually dimmed and don\'t respond to clicks. ',
      },
      {
        name: 'tooltip',
        type: 'string',
        required: false,
        description: ' Tooltip text to display when hovering over the sub-item. Provides additional context or information about the sub-item\'s action. ',
      }
    ],
  }
};

const buttonwithdropdownProps: PropDefinition[] = [
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
    description: ' React element to use as the clickable trigger button. Typically an icon, text, or button element that users click to open the dropdown. ',
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
    description: ' Additional CSS classes to apply to the dropdown trigger button. Use this to customize the trigger\'s appearance beyond default styling. ',
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

export { typeDefinitions, buttonwithdropdownProps, inheritedProps };