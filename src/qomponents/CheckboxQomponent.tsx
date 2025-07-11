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

const checkboxProps = [
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: 'Additional CSS class names to apply to the Checkbox component for custom styling.',
  },
  {
    name: 'extraLabelClassNames',
    type: 'string',
    required: false,
    description: 'Additional CSS class names to apply to the Checkbox label for custom styling.',
  },
  {
    name: 'type',
    type: "'radio' | 'checkbox'",
    required: false,
    description: "Specifies whether the input is a radio button or a traditional checkbox. Default is 'checkbox'.",
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: 'A unique identifier for the Checkbox input element.',
  },
  {
    name: 'name',
    type: 'string',
    required: false,
    description: 'The name attribute for the Checkbox input, useful for grouping and form submissions.',
  },
  {
    name: 'checked',
    type: 'boolean',
    required: false,
    description: 'Controls the checked state of the Checkbox (for controlled components).',
  },
  {
    name: 'defaultChecked',
    type: 'boolean',
    required: false,
    description: 'Sets the initial checked state of the Checkbox (for uncontrolled components).',
  },
  {
    name: 'value',
    type: 'string | number',
    required: false,
    description: 'The value associated with the Checkbox input.',
  },
  {
    name: 'label',
    type: 'string | React.ReactNode',
    required: false,
    description: 'The label displayed next to the Checkbox. Can be a string or any React node.',
  },
  {
    name: 'onChange',
    type: 'React.ChangeEventHandler<FormControlElement>',
    required: false,
    description: 'Callback function called when the checked state changes.',
  },
  {
    name: 'onKeyDown',
    type: 'React.KeyboardEventHandler<FormControlElement>',
    required: false,
    description: 'Callback function called when a key is pressed while the Checkbox is focused.',
  },
  {
    name: 'onClick',
    type: 'React.MouseEventHandler<FormControlElement>',
    required: false,
    description: 'Callback function called when the Checkbox is clicked.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'If true, disables the Checkbox so it cannot be interacted with.',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: 'A string for the data-testid attribute, useful for selecting the Checkbox in tests.',
  },
];

const CheckboxQomponent: React.FC = () => {
  return <ComponentPropsDisplay title="Checkbox Props" props={checkboxProps} />;
};

export default CheckboxQomponent;
