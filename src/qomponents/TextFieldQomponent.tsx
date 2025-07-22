/**
 * TextFieldQomponent Component
 *
 * A documentation component that provides comprehensive information about the TextField
 * Qomponent. This component documents text input functionality, including input
 * types, validation options, styling variants, placeholder configurations,
 * and accessibility features for implementing single-line text input controls.
 */

import React from 'react';
import { ComponentPropsDisplay } from './components';
import { textfieldProps } from '../generated/TextFieldProps';

const TextFieldQomponent: React.FC = () => {
  return <ComponentPropsDisplay title="TextField Props" props={textfieldProps} />;
};

export default TextFieldQomponent;
