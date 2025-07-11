/**
 * InputGroupQomponent Component
 *
 * A documentation component that provides detailed specifications for the InputGroup
 * Qomponent. This component documents input group functionality, including input
 * combinations, addon configurations, button attachments, and styling options
 * for creating grouped form input elements with enhanced functionality.
 */

import React from 'react';
import { ComponentPropsDisplay, ComponentSubPropsDisplay } from './components';

const typeDefinitions = [
  {
    name: 'AppendedButtonProps',
    description: 'Interface representing the properties for an appended button.',
    properties: [
      { name: 'variant', type: "'button'", required: true, description: 'Specifies that the variant is a button' },
      { name: 'buttonProps', type: 'ButtonProps', required: true, description: 'The properties for the button' },
    ],
  },
  {
    name: 'ElementProps',
    description: 'Props for an element variant in the InputGroup appended component.',
    properties: [
      { name: 'variant', type: "'element'", required: true, description: 'Specifies that this is an element variant' },
      {
        name: 'element',
        type: 'React.ReactNode',
        required: true,
        description: 'The React node to be rendered as the element',
      },
    ],
  },
  {
    name: 'AppendedProps',
    description: 'Union type for appended items - can be button, element, or undefined.',
    properties: [
      {
        name: 'AppendedButtonProps',
        type: 'AppendedButtonProps',
        required: false,
        description: 'Button variant properties',
      },
      { name: 'ElementProps', type: 'ElementProps', required: false, description: 'Element variant properties' },
    ],
  },
  {
    name: 'Extended InputGroupProps',
    description: 'Combined InputGroupProps that extends TooltipComponentProps and InputLengthStyleProps.',
    properties: [
      {
        name: 'TooltipComponentProps',
        type: 'TooltipComponentProps',
        required: true,
        description: 'Tooltip-related properties',
      },
      {
        name: 'InputLengthStyleProps',
        type: 'InputLengthStyleProps',
        required: true,
        description: 'Input length styling properties',
      },
    ],
  },
];

const inputGroupProps = [
  {
    name: 'append',
    type: 'AppendedProps[]',
    required: true,
    description: 'Array of elements to be appended to the input group. Each element can be a button or custom element.',
  },
  {
    name: 'field',
    type: 'React.ReactNode',
    required: false,
    description: 'The field to be rendered in the input group.',
  },
];

const inheritedProps = [
  {
    name: 'TextFieldProps',
    type: 'object',
    description: 'All props from TextField component including value, onChange, placeholder, etc.',
  },
  {
    name: 'TooltipComponentProps',
    type: 'object',
    description: 'All tooltip-related props including tooltip, tooltipPlacement, tooltipDelay.',
  },
  {
    name: 'InputLengthStyleProps',
    type: 'object',
    description: 'Input length styling properties for visual customization.',
  },
];

const InputGroupQomponent: React.FC = () => (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Type Definitions</h3>
      <div className="flex flex-col gap-6">
        {typeDefinitions.map((type) => (
          <ComponentSubPropsDisplay
            key={type.name}
            title=""
            typeName={type.name}
            typeDescription={type.description}
            subProps={type.properties}
          />
        ))}
      </div>
    </div>
    <ComponentSubPropsDisplay
      title="Inheritance"
      typeName="Multiple Inheritance"
      typeDescription="InputGroup extends multiple interfaces: TextFieldProps, TooltipComponentProps, and InputLengthStyleProps, which means it inherits all properties from these components in addition to its own props."
      subProps={inheritedProps.map((prop) => ({
        name: prop.name,
        type: prop.type,
        required: false,
        description: prop.description,
      }))}
    />
    <ComponentPropsDisplay title="InputGroup Props" props={inputGroupProps} />
  </div>
);

export default InputGroupQomponent;
