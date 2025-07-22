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
import { sliderProps } from '../generated/SliderProps';

const SliderQomponent: React.FC = () => <ComponentPropsDisplay title="Slider Props" props={sliderProps} />;

export default SliderQomponent;
