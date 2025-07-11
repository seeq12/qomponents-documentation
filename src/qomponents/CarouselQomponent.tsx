/**
 * CarouselQomponent Component
 *
 * A documentation component that provides comprehensive information about the Carousel
 * Qomponent. This component documents carousel functionality, including slide navigation,
 * transition effects, auto-play configurations, indicator controls, and responsive
 * behaviors for implementing image and content carousels.
 */

import React from 'react';
import { ComponentPropsDisplay } from './components';

const carouselProps = [
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: 'Optional test ID for the carousel, useful for testing purposes.',
  },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: 'Additional class names to apply to the carousel for custom styling.',
  },
  { name: 'activeIndex', type: 'number', required: false, description: 'The index of the currently active slide.' },
  {
    name: 'onSlide',
    type: '(nextSlide: number, direction: "left" | "right") => void',
    required: false,
    description: 'Callback function that is called when the slide changes.',
  },
  {
    name: 'autoSlide',
    type: 'boolean',
    required: false,
    description: 'Whether the carousel should automatically slide to the next item.',
  },
  {
    name: 'interval',
    type: 'number',
    required: false,
    description: 'The interval (in milliseconds) between automatic slide transitions.',
  },
  { name: 'nextIcon', type: 'string', required: false, description: 'The icon to use for the "next" arrow.' },
  { name: 'prevIcon', type: 'string', required: false, description: 'The icon to use for the "previous" arrow.' },
  {
    name: 'iconExtraClassNames',
    type: 'string',
    required: false,
    description: 'Additional class names to apply to the icons for custom styling.',
  },
  { name: 'showArrows', type: 'boolean', required: false, description: 'Whether to show navigation arrows.' },
  { name: 'showIndicators', type: 'boolean', required: false, description: 'Whether to show slide indicators.' },
  {
    name: 'continuous',
    type: 'boolean',
    required: false,
    description: 'Whether the carousel should loop continuously.',
  },
  {
    name: 'carouselItems',
    type: 'React.ReactNode[]',
    required: true,
    description: 'The items to display in the carousel.',
  },
];

const CarouselQomponent: React.FC = () => <ComponentPropsDisplay title="Carousel Props" props={carouselProps} />;

export default CarouselQomponent;
