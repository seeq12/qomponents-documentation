import React from 'react';
import { ComponentPropsDisplay } from './components';
import { textareaProps } from '../generated/TextAreaProps';

/**
 * TextAreaQomponent Component
 *
 * A documentation component that provides detailed specifications for the TextArea
 * Qomponent. This component documents multi-line text input functionality, including
 * sizing options, validation features, placeholder configurations, resize behaviors,
 * and styling variants for implementing textarea form controls.
 */

const TextAreaQomponent: React.FC = () => {
  return <ComponentPropsDisplay title="TextArea Props" props={textareaProps} />;
};
export default TextAreaQomponent;
