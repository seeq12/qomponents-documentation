/**
 * SliderQomponent Component
 *
 * A documentation component that provides detailed specifications for the Slider
 * Qomponent. This component documents slider control functionality, including
 * range configurations, step values, styling options, orientation settings,
 * and interactive behaviors for implementing slider input controls.
 */

const sliderProps = [
  { name: 'disabled', type: 'boolean', required: false, description: 'Specifies if the slider is disabled.' },
  {
    name: 'onValueChange',
    type: '(value: number[]) => void',
    required: false,
    description: 'Value change handler for the slider.',
  },
  {
    name: 'onPointerUp',
    type: 'React.PointerEventHandler<HTMLDivElement>',
    required: false,
    description: 'Event handler for the key up event.',
  },
  { name: 'id', type: 'string', required: false, description: 'The ID of the slider.' },
  { name: 'name', type: 'string', required: false, description: 'The name of the slider.' },
  { name: 'value', type: 'number', required: true, description: 'The value of the slider.' },
  {
    name: 'rootExtraClassNames',
    type: 'string',
    required: false,
    description: 'Additional class names for the slider.',
  },
  {
    name: 'trackExtraClassNames',
    type: 'string',
    required: false,
    description: 'Additional class names for the track.',
  },
  {
    name: 'thumbExtraClassNames',
    type: 'string',
    required: false,
    description: 'Additional class names for the thumb.',
  },
  {
    name: 'rangeExtraClassNames',
    type: 'string',
    required: false,
    description: 'Additional class names for the range.',
  },
  { name: 'testId', type: 'string', required: false, description: 'The data-testid used for testing purposes.' },
  { name: 'step', type: 'number', required: false, description: 'The step value for number input type.' },
  { name: 'min', type: 'number', required: false, description: 'The min value of a slider.' },
  { name: 'max', type: 'number', required: false, description: 'The max value of a slider.' },
];

const SliderQomponent = () => (
  <div className="text-left">
    <div className="mt-8 flex flex-col gap-4">
      {sliderProps.map((prop) => (
        <div key={prop.name} className="rounded border border-gray-200 bg-white p-4">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="font-mono font-semibold text-blue-700 text-base">{prop.name}</span>
            <span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-700">{prop.type}</span>
            {prop.required && <span className="text-xs text-red-600 font-semibold ml-2">required</span>}
          </div>
          <div className="text-gray-700 text-sm">{prop.description}</div>
        </div>
      ))}
    </div>
  </div>
);

export default SliderQomponent;
