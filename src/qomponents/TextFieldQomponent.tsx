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

const textFieldProps = [
  {
    name: 'readonly',
    type: 'boolean',
    required: false,
    description: 'If true, the text field is read-only and cannot be edited by the user.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'If true, disables the text field so it cannot be interacted with.',
  },
  {
    name: 'onChange',
    type: 'React.ChangeEventHandler<FormControlElement>',
    required: false,
    description: 'Callback function called when the value of the text field changes.',
  },
  {
    name: 'onKeyUp',
    type: 'React.KeyboardEventHandler<FormControlElement>',
    required: false,
    description: 'Callback function called when a key is released while the text field is focused.',
  },
  {
    name: 'onKeyDown',
    type: 'React.KeyboardEventHandler<FormControlElement>',
    required: false,
    description: 'Callback function called when a key is pressed while the text field is focused.',
  },
  {
    name: 'onFocus',
    type: 'React.FocusEventHandler<HTMLInputElement>',
    required: false,
    description: 'Callback function called when the text field receives focus.',
  },
  {
    name: 'onBlur',
    type: 'React.FocusEventHandler<FormControlElement>',
    required: false,
    description: 'Callback function called when the text field loses focus.',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: 'A unique identifier for the text field element.',
  },
  {
    name: 'name',
    type: 'string',
    required: false,
    description: 'The name attribute of the text field, useful for form submissions.',
  },
  {
    name: 'size',
    type: "'sm' | 'lg'",
    required: false,
    description: "Sets the size of the text field. Use 'sm' for small or 'lg' for large.",
  },
  {
    name: 'value',
    type: 'string | string[] | number',
    required: false,
    description: 'The current value of the text field. Can be a string, array of strings, or a number.',
  },
  {
    name: 'placeholder',
    type: 'string',
    required: false,
    description: 'Placeholder text displayed when the text field is empty.',
  },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: 'Additional CSS class names to apply to the text field for custom styling.',
  },
  {
    name: 'type',
    type: "'text' | 'password' | 'number' | 'email'",
    required: false,
    description: "Specifies the input type for the text field. Choose from 'text', 'password', 'number', or 'email'.",
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: 'A string for the data-testid attribute, useful for selecting the text field in tests.',
  },
  {
    name: 'ref',
    type: 'any',
    required: false,
    description: 'A React ref to access the text field element directly.',
  },
  {
    name: 'inputGroup',
    type: "'prepend' | 'append'",
    required: false,
    description: "Controls the placement of input group elements. Use 'prepend' or 'append'.",
  },
  {
    name: 'step',
    type: 'number | string',
    required: false,
    description: 'Specifies the step value for number input types, controlling increment/decrement.',
  },
  {
    name: 'showError',
    type: 'boolean',
    required: false,
    description: 'If true, applies error formatting to the text field.',
  },
  {
    name: 'errorText',
    type: 'string',
    required: false,
    description: 'Text to display when the text field is in an error state.',
  },
  {
    name: 'required',
    type: 'boolean',
    required: false,
    description: 'If true, marks the text field as required for form validation.',
  },
  {
    name: 'autoComplete',
    type: 'string',
    required: false,
    description: 'Sets the autocomplete attribute for the text field, controlling browser autofill.',
  },
  {
    name: 'autoFocus',
    type: 'boolean',
    required: false,
    description: 'If true, the text field will automatically receive focus when mounted.',
  },
  {
    name: 'inputWidth',
    type: 'number',
    required: false,
    description: 'Sets the width (in number) of the text field. Used in Editable Text components.',
  },
  {
    name: 'inputHeight',
    type: 'number',
    required: false,
    description: 'Sets the height (in number) of the text field. Used in Editable Text components.',
  },
  {
    name: 'min',
    type: 'number',
    required: false,
    description: 'Minimum value for the text field (for types like date, number, range, etc.).',
  },
  {
    name: 'max',
    type: 'number',
    required: false,
    description: 'Maximum value for the text field (for types like date, number, range, etc.).',
  },
  {
    name: 'maxLength',
    type: 'number',
    required: false,
    description: 'The maximum number of characters allowed in the text field.',
  },
  {
    name: 'minLength',
    type: 'number',
    required: false,
    description: 'The minimum number of characters required in the text field.',
  },
];

const TextFieldQomponent: React.FC = () => {
  return <ComponentPropsDisplay title="TextField Props" props={textFieldProps} />;
};

export default TextFieldQomponent;
