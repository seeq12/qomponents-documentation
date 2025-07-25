// TypeScript type definitions for ToolbarButton props
interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

const toolbarbuttonProps: PropDefinition[] = [
  {
    name: 'icon',
    type: 'string',
    required: true,
    description: ' Primary icon class name to display on the button. Typically uses FontAwesome classes (e.g., \'fc-zoom\', \'fc-delete\'). This is the main visual identifier for the button\'s function. ',
  },
  {
    name: 'secondIcon',
    type: 'string',
    required: false,
    description: ' Secondary icon class name to display alongside the primary icon. Useful for showing state indicators, badges, or additional context. ',
  },
  {
    name: 'forceSmallIcon',
    type: 'boolean',
    required: false,
    description: ' When true, forces the primary icon to render in a smaller size. Overrides automatic sizing based on button variant or layout. ',
  },
  {
    name: 'label',
    type: 'string',
    required: false,
    description: ' Text label for the toolbar button. Typically shown when the toolbar has sufficient width or in expanded states. Helps users understand the button\'s function when icons alone aren\'t clear. ',
  },
  {
    name: 'popoverContent',
    type: 'React.ReactNode',
    required: false,
    description: ' React content to display in an attached popover when the button is clicked. Can be any React elements including forms, menus, or complex layouts. When provided, the button becomes a popover trigger. ',
  },
  {
    name: 'isSmall',
    type: 'boolean',
    required: false,
    description: ' When true, renders the button in a compact, icon-only mode. Hides the label even if provided and uses minimal padding for space-constrained layouts. ',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: ' HTML ID attribute for the toolbar button element. Should be unique across the page for proper HTML semantics and accessibility. ',
  },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply to the toolbar button container. Use this to customize the button\'s appearance beyond the built-in variants. ',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: ' Test ID attribute for the toolbar button element used in automated testing. Applied to the button element for test targeting and interaction. ',
  },
  {
    name: 'tooltipText',
    type: 'string',
    required: false,
    description: ' Text to display in the button\'s tooltip when hovering. Provides additional context or instructions about the button\'s function. ',
  },
  {
    name: 'isHtmlTooltip',
    type: 'boolean',
    required: false,
    description: ' When true, the tooltip text is rendered as HTML allowing for rich content. When false (default), the tooltip text is treated as plain text for security. Only set to true if you trust the tooltip content source. ',
  },
  {
    name: 'tooltipTestId',
    type: 'string',
    required: false,
    description: ' Test ID attribute specifically for the tooltip element used in automated testing. Helps identify and interact with the tooltip separately from the button. ',
  },
  {
    name: 'tooltipOptions',
    type: 'Omit<TooltipProps, \'text\'>',
    required: false,
    description: ' Configuration options for customizing tooltip behavior and appearance. Omits the \'text\' property since that\'s handled by the `tooltipText` prop. Includes options like position, delay, and other tooltip-specific settings. ',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: ' When true, disables the toolbar button preventing user interaction. Disabled buttons appear visually dimmed and don\'t respond to clicks or show popovers. ',
  },
  {
    name: 'onClick',
    type: '(e: MouseEvent) => void',
    required: false,
    description: ' Callback function triggered when the toolbar button is clicked. Primarily used for tracking, analytics, or additional click handling. Note: this doesn\'t prevent popover opening if popoverContent is provided. ',
  },
  {
    name: 'isActive',
    type: 'boolean',
    required: false,
    description: ' When true, displays the button in an "active" or "pressed" visual state. Useful for toggle buttons or indicating the current tool/mode in a toolbar. ',
  },
  {
    name: 'onHide',
    type: '() => void',
    required: false,
    description: ' Callback function triggered when an attached popover is hidden/closed. Use this for cleanup, state management, or other hide-related side effects. ',
  },
  {
    name: 'hasArrow',
    type: 'boolean',
    required: false,
    description: ' When true, displays a visual arrow on the button indicating it has a dropdown/popover. Helps users understand that clicking will reveal additional options or content. ',
  },
  {
    name: 'isPrimaryAnSvg',
    type: 'boolean',
    required: false,
    description: ' When true, treats the primary icon string as an SVG identifier instead of a font icon class. Changes how the icon is rendered and styled within the component. ',
  },
  {
    name: 'primaryIconExtraClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply specifically to the primary icon element. Use this to customize the icon\'s appearance independently from the button container. ',
  },
  {
    name: 'iconHeight',
    type: 'number',
    required: false,
    description: 'height for the icon',
  },
  {
    name: 'iconWidth',
    type: 'number',
    required: false,
    description: 'width for the icon',
  },
  {
    name: 'primaryIconViewbox',
    type: 'string',
    required: false,
    description: 'viewbox for the icon',
  },
];

export { toolbarbuttonProps };