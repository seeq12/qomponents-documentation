// TypeScript type definitions for SvgIcon props
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
  SvgIconType: {
    name: 'SvgIconType',
    description: 'Type alias for SvgIconType',
    properties: [
      {
        name: 'SvgIconType',
        type: '(typeof svgIconTypes)[number]',
        required: false,
        description: 'Type definition: (typeof svgIconTypes)[number]',
      }
    ],
  }
};

const svgiconProps: PropDefinition[] = [
  {
    name: 'icon',
    type: 'string',
    required: true,
    description: ' SVG icon identifier or class name to display. This should correspond to an available SVG icon in your icon system. Examples: \'fc-zoom\', \'fc-delete\', \'custom-arrow\'. ',
  },
  {
    name: 'type',
    type: 'SvgIconType',
    required: false,
    description: ' Visual style type that determines the icon\'s color and appearance: - `default`: Uses automatic dark/light text colors based on theme - `theme`: Uses primary theme colors - `white`: Pure white color - `text`: Uses standard text color - `dark-gray`: Dark gray color - `darkish-gray`: Medium-dark gray color - `gray`: Standard gray color - `color`: Uses custom color specified in `color` prop - `info`: Blue informational color - `warning`: Yellow/orange warning color - `danger`: Red error/danger color - `success`: Green success color - `theme-light`: Lighter version of theme color - `inherit`: Inherits color from parent element @default \'default\' ',
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
    description: ' Additional CSS classes to apply to the SVG icon element. Use this to customize the icon\'s appearance, spacing, or behavior beyond built-in options. ',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: ' HTML ID attribute for the SVG icon element. Should be unique across the page for proper HTML semantics and accessibility. ',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: ' Test ID attribute for the SVG icon element used in automated testing. Applied to the `data-testid` attribute for element selection in test suites. ',
  },
  {
    name: 'customId',
    type: 'string',
    required: false,
    description: ' Custom identifier placed in the `data-customid` attribute on the icon element. Useful for identifying the specific icon in event handlers when multiple icons share the same click handler. Helps distinguish which icon was clicked. ',
  },
  {
    name: 'viewBox',
    type: 'string',
    required: false,
    description: ' SVG viewBox attribute that defines the coordinate system and aspect ratio. Format: "min-x min-y width height" (e.g., "0 0 24 24"). If not provided, uses the default viewBox from the SVG definition. Use this to crop or scale the icon\'s visible area. ',
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

export { typeDefinitions, svgiconProps, inheritedProps };