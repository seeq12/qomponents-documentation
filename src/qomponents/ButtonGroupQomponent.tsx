/**
 * ButtonGroupQomponent Component
 *
 * A documentation component that provides detailed specifications for the ButtonGroup
 * Qomponent. This component documents grouped button functionality, including type
 * definitions for appended buttons, split button configurations, and various
 * grouping options for creating cohesive button collections with consistent
 * styling and behavior.
 */

import React from 'react';
import { ComponentPropsDisplay, ComponentSubPropsDisplay } from './components';

const typeDefinitions = [
  {
    name: 'AppendedButtonProps',
    description: 'Properties for an appended button in the group.',
    properties: [
      { name: 'variant', type: "'button'", required: true, description: 'Identifies this as a button variant' },
      {
        name: 'buttonProps',
        type: "Omit<ButtonProps, 'onClick'> & { value: string; isActive?: boolean }",
        required: true,
        description: 'Button properties with value and optional active state',
      },
    ],
  },
  {
    name: 'ElementProps',
    description: 'Properties for an appended element in the group.',
    properties: [
      { name: 'variant', type: "'element'", required: true, description: 'Identifies this as an element variant' },
      { name: 'element', type: 'React.ReactNode', required: true, description: 'React element to render' },
      {
        name: 'extraClassNames',
        type: 'string',
        required: false,
        description: 'Additional CSS class names for the element',
      },
    ],
  },
  {
    name: 'Props',
    description: 'Union type for appended items - can be either a button or element.',
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
];

const buttonGroupProps = [
  { name: 'buttons', type: 'Props[]', required: true, description: 'Array of buttons/elements to form a group.' },
  { name: 'id', type: 'string', required: false, description: 'Unique identifier for the button group.' },
  { name: 'extraClassNames', type: 'string', required: false, description: 'Additional CSS class names.' },
  {
    name: 'onChange',
    type: '(value: string) => void',
    required: false,
    description: 'Callback when the selected value changes.',
  },
  { name: 'testId', type: 'string', required: false, description: 'Test ID for the button group.' },
];

const inheritedProps = [
  { name: 'tooltip', type: 'string', description: 'Tooltip text to display on hover.' },
  { name: 'tooltipDelay', type: 'number', description: 'Delay before showing the tooltip.' },
  { name: 'tooltipPlacement', type: "'top' | 'bottom' | 'left' | 'right'", description: 'Placement of the tooltip.' },
  { name: 'tooltipTestId', type: 'string', description: 'Test ID for the tooltip.' },
];

const ButtonGroupQomponent: React.FC = () => (
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
      typeName="TooltipComponentProps"
      typeDescription="ButtonGroup extends TooltipComponentProps, which means it inherits all tooltip-related properties in addition to its own props."
      subProps={inheritedProps.map((prop) => ({
        name: prop.name,
        type: prop.type,
        required: false,
        description: prop.description,
      }))}
    />

    <ComponentPropsDisplay title="ButtonGroup Props" props={buttonGroupProps} />
  </div>
);

export default ButtonGroupQomponent;
