/**
 * ButtonQomponent Component
 *
 * A comprehensive documentation component that displays Button component specifications,
 * props, variants, and usage information. This component provides detailed documentation
 * for the Button Qomponent including all available properties, styling variants,
 * and behavioral configurations for developers to understand and implement buttons
 * effectively in their applications.
 */

import React from 'react';
import { ComponentPropsDisplay } from './components';
import { buttonProps } from '../generated/ButtonProps';

const ButtonQomponent: React.FC = () => {
  return (
    <div className="text-left">
      <ComponentPropsDisplay title="Button Props" props={buttonProps} />
    </div>
  );
};

export default ButtonQomponent;
