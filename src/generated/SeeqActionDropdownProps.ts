// TypeScript type definitions for SeeqActionDropdown props
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
  SeeqActionDropdownItems: {
    name: 'SeeqActionDropdownItems',
    description: 'Interface for individual action items within a SeeqActionDropdown.\nEach item represents a clickable action with optional icon, text, and divider.',
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
        description: ' Icon class name to display next to the item label. Typically uses FontAwesome classes (e.g., \'fc-zoom\', \'fc-delete\'). Provides visual context for the action. ',
      },
      {
        name: 'iconExtraClassNames',
        type: 'string',
        required: false,
        description: ' Additional CSS classes to apply to the icon element. Use this to customize icon appearance beyond standard styling. ',
      },
      {
        name: 'display',
        type: 'string',
        required: true,
        description: ' Main display text for the dropdown item. This is the primary text that users see and click on to trigger the action. ',
      },
      {
        name: 'action',
        type: '(e?: Event) => void',
        required: true,
        description: ' Callback function triggered when the dropdown item is clicked. Use this to define the specific action that should occur when users select this item. ',
      },
      {
        name: 'enabled',
        type: 'boolean',
        required: false,
        description: ' When true, the item is clickable and interactive. When false, the item appears disabled and doesn\'t respond to clicks. @default true ',
      },
      {
        name: 'divider',
        type: 'boolean',
        required: false,
        description: ' When true, displays a visual divider line below this dropdown item. Useful for grouping related items or separating different sections of actions. ',
      },
      {
        name: 'testId',
        type: 'string',
        required: false,
        description: ' Test ID attribute for the dropdown item used in automated testing. Helps identify and interact with specific action items in test suites. ',
      },
      {
        name: 'text',
        type: 'string',
        required: false,
        description: ' Secondary descriptive text displayed below the main display text. Provides additional context or explanation about what the action does. ',
      }
    ],
  }
};

const seeqactiondropdownProps: PropDefinition[] = [
  {
    name: 'seeqActionDropdownItems',
    type: 'SeeqActionDropdownItems[]',
    required: true,
    description: ' Array of action items to display in the dropdown menu. Each item represents a specific action users can perform, with icons and descriptions. ',
  },
  {
    name: 'trigger',
    type: 'React.ReactNode',
    required: true,
    description: ' React element to use as the clickable trigger for the dropdown. Typically a button, icon, or text element that users click to open the action menu. ',
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
    description: ' Additional CSS classes to apply to the dropdown container. Use this to customize the dropdown\'s appearance beyond default Seeq styling. ',
  },
  {
    name: 'containerTestId',
    type: 'string',
    required: false,
    description: ' Test ID attribute for the dropdown container element used in automated testing. Applied to the main container that wraps both trigger and dropdown content. ',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: ' When true, disables the dropdown trigger preventing user interaction. Disabled triggers appear visually dimmed and don\'t open the dropdown when clicked. ',
  },
  {
    name: 'onClick',
    type: '(e: MouseEvent) => void',
    required: false,
    description: ' Callback function triggered when the trigger is clicked. Primarily used for tracking or analytics purposes. Note: this doesn\'t control dropdown opening, which is handled separately. ',
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
    name: 'isCloseOnContentClick',
    type: 'boolean',
    required: false,
    description: ' When true, automatically closes the dropdown when any content inside it is clicked. Useful for action dropdowns where selecting an option should close the dropdown. ',
  },
  {
    name: 'keepFocusInsideDropdown',
    type: 'boolean',
    required: false,
    description: ' When true, traps keyboard focus within the dropdown when it\'s open. Prevents users from tabbing outside the dropdown, improving accessibility. ',
  },
  {
    name: 'variant',
    type: '\'create-workbench\' | \'view-workbench\' | \'insert-seeq-content\'',
    required: true,
    description: ' Predefined variant that determines the dropdown\'s styling and behavior: - `create-workbench`: For workbench creation actions - `view-workbench`: For workbench viewing and management actions - `insert-seeq-content`: For inserting Seeq-specific content and objects Each variant has specific styling and may filter available actions. ',
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

export { typeDefinitions, seeqactiondropdownProps, inheritedProps };