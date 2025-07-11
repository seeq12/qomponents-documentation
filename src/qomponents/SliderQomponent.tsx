/**
 * SliderQomponent Component
 *
 * A documentation component that provides detailed specifications for the Slider
 * Qomponent. This component documents slider control functionality, including
 * range configurations, step values, styling options, orientation settings,
 * and interactive behaviors for implementing slider input controls.
 */

import React from 'react';
import { ComponentPropsDisplay } from './components';

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

const SliderQomponent: React.FC = () => <ComponentPropsDisplay title="Slider Props" props={sliderProps} />;

export default SliderQomponent;
