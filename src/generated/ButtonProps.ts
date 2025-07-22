// TypeScript type definitions for Button props
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
  ButtonType: {
    name: 'ButtonType',
    description: 'Type alias for ButtonType',
    properties: [
      {
        name: 'ButtonType',
        type: '(typeof buttonTypes)[number]',
        required: false,
        description: 'Type definition: (typeof buttonTypes)[number]',
      }
    ],
  },
  ButtonSize: {
    name: 'ButtonSize',
    description: 'Type alias for ButtonSize',
    properties: [
      {
        name: 'ButtonSize',
        type: '(typeof buttonSizes)[number]',
        required: false,
        description: 'Type definition: (typeof buttonSizes)[number]',
      }
    ],
  },
  ButtonVariant: {
    name: 'ButtonVariant',
    description: 'Type alias for ButtonVariant',
    properties: [
      {
        name: 'ButtonVariant',
        type: '(typeof buttonVariants)[number]',
        required: false,
        description: 'Type definition: (typeof buttonVariants)[number]',
      }
    ],
  },
  IconPosition: {
    name: 'IconPosition',
    description: 'Type alias for IconPosition',
    properties: [
      {
        name: 'IconPosition',
        type: '(typeof iconPositions)[number]',
        required: false,
        description: 'Type definition: (typeof iconPositions)[number]',
      }
    ],
  }
};

const buttonProps: PropDefinition[] = [
  {
    name: 'onClick',
    type: '(e: React.MouseEvent) => void',
    required: false,
    description: ' Callback function triggered when the button is clicked. Receives the mouse event as a parameter for additional event handling. Use this to define the primary action the button should perform. ',
  },
  {
    name: 'label',
    type: 'string | React.JSX.Element | React.ReactNode',
    required: false,
    description: ' The text, element, or content to display inside the button. Can be a string for simple text, a translation key, or any React element/node for more complex content like formatted text or inline elements. ',
  },
  {
    name: 'variant',
    type: 'ButtonVariant',
    required: false,
    description: ' Visual style variant that determines the button\'s appearance and color scheme: - `outline`: White background with border, suitable for secondary actions - `theme`: Primary theme colors, typically for main call-to-action buttons - `theme-light`: Lighter version of theme colors for subtle primary actions - `warning`: Yellow/orange styling for caution-related actions - `danger`: Red styling for destructive or critical actions - `no-border`: Borderless styling for minimal, text-like buttons @default \'outline\' ',
  },
  {
    name: 'type',
    type: 'ButtonType',
    required: false,
    description: ' HTML button type attribute that determines the button\'s behavior in forms: - `button`: Standard button with no special form behavior (default) - `submit`: Submits the parent form when clicked - `reset`: Resets the parent form fields to their initial values - `link`: Behaves like a button but renders as button type for Firefox compatibility @default \'button\' ',
  },
  {
    name: 'size',
    type: 'ButtonSize',
    required: false,
    description: ' Size variant that controls the button\'s dimensions and text size: - `sm`: Small button with compact padding and smaller text (default) - `lg`: Large button with generous padding and larger text @default \'sm\' ',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: ' When true, disables the button preventing user interaction. Disabled buttons are visually dimmed and do not respond to clicks or focus. The button will also have `pointer-events: none` applied via CSS. ',
  },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply to the button element. These classes are combined with the component\'s built-in styling classes. Use this to customize appearance beyond the standard variants. ',
  },
  {
    name: 'icon',
    type: 'string',
    required: false,
    description: ' Icon class name to display alongside the button text. Typically uses FontAwesome classes (e.g., \'fc-zoom\', \'fc-delete\'). The icon is automatically styled to match the button\'s text color. ',
  },
  {
    name: 'iconStyle',
    type: 'IconType',
    required: false,
    description: ' Determines how the icon should be styled and colored: - `text`: Uses the button\'s text color (default) - `white`: Forces white color regardless of button variant - `theme`: Uses theme-specific colors - `color`: Uses a custom color specified in `iconColor` @default \'text\' ',
  },
  {
    name: 'iconColor',
    type: 'string',
    required: false,
    description: ' Custom color for the icon when `iconStyle` is set to \'color\'. Can be any valid CSS color value (hex, rgb, color name, etc.). This property is required when iconStyle is \'color\'. ',
  },
  {
    name: 'iconPosition',
    type: 'IconPosition',
    required: false,
    description: ' Position of the icon relative to the button text: - `left`: Icon appears before the text with right margin - `right`: Icon appears after the text with left margin @default \'left\' ',
  },
  {
    name: 'iconPrefix',
    type: 'string',
    required: false,
    description: ' Custom prefix for the icon class when not using standard FontAwesome icons. By default, icons are prefixed with \'fa-sharp fa-regular\', but some icons require different prefixes. Use this to override the default behavior. ',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: ' HTML ID attribute for the button element. Should be unique across the entire page for proper HTML semantics. Also used as a prefix for the icon\'s test ID when an icon is present. ',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: ' Test ID attribute for the button element used in automated testing. Applied to the `data-testid` attribute for element selection in test suites. ',
  },
  {
    name: 'stopPropagation',
    type: 'boolean',
    required: false,
    description: ' Controls whether the click event should stop propagation to parent elements. When true (default), prevents the click from bubbling up the DOM tree. Set to false if you need parent elements to also handle the click event. @default true ',
  },
  {
    name: 'tooltip',
    type: 'string',
    required: false,
    description: ' Tooltip text to display when hovering over the button. When provided, the button will show a tooltip with this text on hover. The tooltip appearance and behavior can be customized with `tooltipOptions`. ',
  },
  {
    name: 'isHtmlTooltip',
    type: 'boolean',
    required: false,
    description: ' When true, the tooltip text is rendered as HTML allowing for rich content. When false (default), the tooltip text is treated as plain text for security. Only set to true if you trust the tooltip content source. @default false ',
  },
  {
    name: 'tooltipTestId',
    type: 'string',
    required: false,
    description: ' Test ID attribute specifically for the tooltip element. Used for automated testing to identify and interact with the tooltip. Helpful when you need to test tooltip-specific behavior separately from the button. ',
  },
  {
    name: 'tooltipOptions',
    type: 'Omit<TooltipProps, \'text\'>',
    required: false,
    description: ' Configuration options for customizing tooltip behavior and appearance. Omits the \'text\' property since that\'s handled by the `tooltip` prop. Includes options like position, delay, and other tooltip-specific settings. ',
  },
  {
    name: 'preventBlur',
    type: 'boolean',
    required: false,
    description: ' When true, prevents the blur event from occurring on mouse down. Useful when you want to keep focus on the current element after clicking the button. Commonly used in scenarios where button clicks shouldn\'t interrupt form input focus. @default false ',
  },
];

export { typeDefinitions, buttonProps };