import React from 'react';
import { ComponentPropsDisplay } from './components';

/**
 * TextAreaQomponent Component
 *
 * A documentation component that provides detailed specifications for the TextArea
 * Qomponent. This component documents multi-line text input functionality, including
 * sizing options, validation features, placeholder configurations, resize behaviors,
 * and styling variants for implementing textarea form controls.
 */

const textAreaProps = [
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: 'Additional CSS class names to apply to the TextArea component for custom styling.',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: 'A unique identifier for the TextArea element.',
  },
  {
    name: 'name',
    type: 'string',
    required: false,
    description: 'The name attribute for the TextArea, useful for form submissions.',
  },
  {
    name: 'onChange',
    type: 'React.ChangeEventHandler<FormControlElement>',
    required: false,
    description: 'Callback function called when the value of the TextArea changes.',
  },
  {
    name: 'onKeyUp',
    type: 'React.KeyboardEventHandler<FormControlElement>',
    required: false,
    description: 'Callback function called when a key is released while the TextArea is focused.',
  },
  {
    name: 'onKeyDown',
    type: 'React.KeyboardEventHandler<FormControlElement>',
    required: false,
    description: 'Callback function called when a key is pressed while the TextArea is focused.',
  },
  {
    name: 'onFocus',
    type: 'React.FocusEventHandler<HTMLTextAreaElement>',
    required: false,
    description: 'Callback function called when the TextArea receives focus.',
  },
  {
    name: 'onBlur',
    type: 'React.FocusEventHandler<FormControlElement>',
    required: false,
    description: 'Callback function called when the TextArea loses focus.',
  },
  {
    name: 'placeholder',
    type: 'string',
    required: false,
    description: 'Placeholder text displayed when the TextArea is empty.',
  },
  {
    name: 'readonly',
    type: 'boolean',
    required: false,
    description: 'If true, the TextArea is read-only and cannot be edited by the user.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'If true, disables the TextArea so it cannot be interacted with.',
  },
  {
    name: 'rows',
    type: 'number',
    required: false,
    description: 'Specifies the visible number of lines in the TextArea.',
  },
  {
    name: 'cols',
    type: 'number',
    required: false,
    description: 'Specifies the visible width of the TextArea.',
  },
  {
    name: 'autoFocus',
    type: 'boolean',
    required: false,
    description: 'If true, the TextArea will automatically receive focus when mounted.',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: 'A string for the data-testid attribute, useful for selecting the TextArea in tests.',
  },
  {
    name: 'value',
    type: 'string | string[] | number',
    required: false,
    description: 'The current value of the TextArea. Can be a string, array of strings, or a number.',
  },
  {
    name: 'showError',
    type: 'boolean',
    required: false,
    description: 'If true, applies error formatting to the TextArea.',
  },
];

const TextAreaQomponent: React.FC = () => {
  return <ComponentPropsDisplay title="TextArea Props" props={textAreaProps} />;
};
export default TextAreaQomponent;
