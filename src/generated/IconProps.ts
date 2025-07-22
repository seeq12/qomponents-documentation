// TypeScript type definitions for Icon props
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
  IconType: {
    name: 'IconType',
    description: 'Type alias for IconType',
    properties: [
      {
        name: 'IconType',
        type: '(typeof iconTypes)[number]',
        required: false,
        description: 'Type definition: (typeof iconTypes)[number]',
      }
    ],
  }
};

const iconProps: PropDefinition[] = [
  {
    name: 'icon',
    type: 'string',
    required: true,
    description: ' Icon class name to display, typically from FontAwesome. Examples: \'fc-zoom\', \'fc-delete\', \'fc-save\'. This determines which icon is rendered. ',
  },
  {
    name: 'iconPrefix',
    type: 'string',
    required: false,
    description: ' Custom prefix for the icon class when not using standard FontAwesome icons. By default, icons are prefixed with \'fa-sharp fa-regular\', but some icons from different icon sets require specific prefixes. Use this to override the default. ',
  },
  {
    name: 'type',
    type: 'IconType',
    required: false,
    description: ' Visual style type that determines the icon\'s color and appearance: - `theme`: Uses primary theme colors (default) - `white`: Pure white color - `text`: Uses standard text color - `dark-gray`: Dark gray color - `darkish-gray`: Medium-dark gray color - `gray`: Standard gray color - `color`: Uses custom color specified in `color` prop - `info`: Blue informational color - `warning`: Yellow/orange warning color - `danger`: Red error/danger color - `success`: Green success color - `theme-light`: Lighter version of theme color - `inherit`: Inherits color from parent element @default \'theme\' ',
  },
  {
    name: 'color',
    type: 'string',
    required: false,
    description: ' Custom color value for the icon when `type` is set to \'color\'. Can be any valid CSS color (hex, rgb, color names, etc.). This property is required when type is \'color\'. ',
  },
  {
    name: 'onClick',
    type: '(e?: React.MouseEvent<HTMLElement, MouseEvent>) => any',
    required: false,
    description: ' Callback function triggered when the icon is clicked. Receives the mouse event as a parameter. Use this to make icons interactive for actions like opening menus, triggering functions, or navigation. ',
  },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply to the icon element. Use this to customize the icon\'s appearance, spacing, or behavior beyond built-in options. ',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: ' HTML ID attribute for the icon element. Should be unique across the page for proper HTML semantics and accessibility. ',
  },
  {
    name: 'large',
    type: 'boolean',
    required: false,
    description: ' When true, applies the \'fa-lg\' class to make the icon larger than normal size. Cannot be used together with the `small` prop. Useful for emphasis or better visibility. ',
  },
  {
    name: 'small',
    type: 'boolean',
    required: false,
    description: ' When true, applies the \'fa-sm\' class to make the icon smaller than normal size. Cannot be used together with the `large` prop. Useful for compact layouts or inline text. ',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: ' Test ID attribute for the icon element used in automated testing. Applied to the `data-testid` attribute for element selection in test suites. ',
  },
  {
    name: 'customId',
    type: 'string',
    required: false,
    description: ' Custom identifier placed in the `data-customid` attribute on the icon element. Useful for identifying the specific icon in event handlers when multiple icons share the same click handler. Helps distinguish which icon was clicked. ',
  },
  {
    name: 'number',
    type: 'number',
    required: false,
    description: ' Numeric value associated with the icon, purpose depends on specific use case. Can be used for ordering, counting, or any numeric data related to the icon. ',
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

export { typeDefinitions, iconProps, inheritedProps };