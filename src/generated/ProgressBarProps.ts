// TypeScript type definitions for ProgressBar props
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
  ProgressIndicatorProps: {
    name: 'ProgressIndicatorProps',
    description: 'Props for individual progress indicators within a ProgressBar.\nEach indicator represents a segment of the overall progress with its own value and styling.\nExtends TooltipComponentProps to support tooltip functionality on individual indicators.',
    properties: [
      {
        name: 'extraClasses',
        type: 'string',
        required: false,
        description: ' Additional CSS classes to apply to this specific progress indicator. Use this to customize the appearance of individual indicators within the progress bar. ',
      },
      {
        name: 'testId',
        type: 'string',
        required: false,
        description: ' Test ID attribute for this progress indicator used in automated testing. Helps identify and interact with specific indicators in test suites. ',
      },
      {
        name: 'value',
        type: 'number',
        required: true,
        description: ' Current value of this progress indicator. Should be between 0 and the progress bar\'s max value. The indicator\'s width will be calculated as a percentage based on this value relative to the max. ',
      },
      {
        name: 'color',
        type: 'string',
        required: false,
        description: ' Custom color for this progress indicator. Can be any valid CSS color value (hex, rgb, color names, etc.). If not provided, uses the default theme color for progress indicators. ',
      },
      {
        name: 'label',
        type: 'string',
        required: false,
        description: ' Text label to display on or next to this progress indicator. Useful for showing the indicator\'s name, category, or current value. Can be positioned and styled using labelClasses. ',
      },
      {
        name: 'labelClasses',
        type: 'string',
        required: false,
        description: ' Additional CSS classes to apply specifically to the indicator\'s label. Use this to customize the label\'s typography, positioning, or styling independently from the indicator itself. ',
      }
    ],
  }
};

const progressbarProps: PropDefinition[] = [
  {
    name: 'values',
    type: 'ProgressIndicatorProps[]',
    required: true,
    description: ' Array of progress indicators to display within the progress bar. Each indicator can have its own value, color, label, and styling. Indicators are rendered in the order they appear in the array. ',
  },
  {
    name: 'max',
    type: 'number',
    required: false,
    description: ' Maximum value for the progress bar scale. All indicator values are calculated as percentages relative to this maximum. Determines the full width (100%) of the progress bar. @default 100 ',
  },
  {
    name: 'containerExtraClasses',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply to the progress bar container. Use this to customize the overall appearance, spacing, or layout of the entire progress bar. ',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: ' Test ID attribute for the progress bar container used in automated testing. Applied to the main container element for test targeting and interaction. ',
  },
  {
    name: 'zeroValueLabel',
    type: 'string',
    required: false,
    description: ' Text label to display when all progress indicators have a value of zero. Useful for providing context or instructions when no progress has been made. Only shown when the total progress is zero. ',
  },
];

export { typeDefinitions, progressbarProps };