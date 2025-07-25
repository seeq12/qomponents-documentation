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
import { carouselProps } from '../generated/CarouselProps';

const CarouselQomponent: React.FC = () => <ComponentPropsDisplay title="Carousel Props" props={carouselProps} />;

export default CarouselQomponent;
