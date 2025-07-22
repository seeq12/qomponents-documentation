/**
 * CheckboxQomponent Component
 *
 * A documentation component that provides detailed specifications for the Checkbox
 * Qomponent. This component documents checkbox form controls, including checked states,
 * label configurations, validation options, styling variants, and accessibility
 * features for implementing checkbox input elements.
 */

import React from 'react';
import { ComponentPropsDisplay } from './components';
import { checkboxProps } from '../generated/CheckboxProps';

const CheckboxQomponent: React.FC = () => {
  return <ComponentPropsDisplay title="Checkbox Props" props={checkboxProps} />;
};

export default CheckboxQomponent;
