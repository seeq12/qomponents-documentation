// TypeScript type definitions for Slider props
interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

const sliderProps: PropDefinition[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: ' When true, disables the slider preventing user interaction. Disabled sliders appear visually dimmed and don\'t respond to mouse or keyboard input. ',
  },
  {
    name: 'onValueChange',
    type: '(value: number[]) => void',
    required: false,
    description: ' Callback function triggered when the slider value changes. Receives an array of numbers (even for single-value sliders for consistency). Use this to handle value changes and update your application state. ',
  },
  {
    name: 'onPointerUp',
    type: 'React.PointerEventHandler<HTMLDivElement>',
    required: false,
    description: ' Callback function triggered when the user releases the pointer (mouse/touch) from the slider. Useful for triggering actions only when the user finishes adjusting the value, rather than continuously during dragging. ',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: ' HTML ID attribute for the slider component. Should be unique across the page for proper HTML semantics and accessibility. ',
  },
  {
    name: 'name',
    type: 'string',
    required: false,
    description: ' Name attribute for the slider used in form submission. Identifies the slider\'s data when the form is submitted to a server. ',
  },
  {
    name: 'value',
    type: 'number',
    required: true,
    description: ' Current value of the slider. Should be within the min/max range. The slider thumb will be positioned proportionally based on this value relative to the min/max range. ',
  },
  {
    name: 'rootExtraClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply to the slider\'s root container. Use this to customize the overall slider appearance and layout. ',
  },
  {
    name: 'trackExtraClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply to the slider track (the background line). Use this to customize the track\'s color, height, or styling. ',
  },
  {
    name: 'thumbExtraClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply to the slider thumb (the draggable handle). Use this to customize the thumb\'s size, color, shape, or styling. ',
  },
  {
    name: 'rangeExtraClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply to the active range (filled portion of the track). Use this to customize the color or styling of the filled area from min to current value. ',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: ' Test ID attribute for the slider component used in automated testing. Applied to the slider\'s root element for test targeting and interaction. ',
  },
  {
    name: 'step',
    type: 'number',
    required: false,
    description: ' Step value that defines the increment/decrement amount for the slider. The slider value will snap to multiples of this step value. Smaller steps provide finer control, larger steps provide coarser control. @default 1 ',
  },
  {
    name: 'min',
    type: 'number',
    required: false,
    description: ' Minimum allowed value for the slider. The slider thumb cannot be moved below this value. Defines the left/bottom end of the slider range. @default 0 ',
  },
  {
    name: 'max',
    type: 'number',
    required: false,
    description: ' Maximum allowed value for the slider. The slider thumb cannot be moved above this value. Defines the right/top end of the slider range. @default 100 ',
  },
];

export { sliderProps };