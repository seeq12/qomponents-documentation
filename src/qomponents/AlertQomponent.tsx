/**
 * AlertQomponent Component
 *
 * A documentation component that provides comprehensive information about the Alert
 * Qomponent. This component displays all available props, inheritance details,
 * variants, and configuration options for implementing alert notifications and
 * messaging components within applications. It includes both component-specific
 * properties and inherited tooltip functionality.
 */

import React from 'react';
import { ComponentPropsDisplay, ComponentSubPropsDisplay } from './components';

const alertProps = [
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'The content to be displayed inside the alert.',
  },
  { name: 'dismissible', type: 'boolean', required: false, description: 'Indicates if the alert can be dismissed.' },
  {
    name: 'onClose',
    type: '() => void',
    required: false,
    description: 'Callback function to be called when the alert is closed.',
  },
  { name: 'show', type: 'boolean', required: false, description: 'Indicates if the alert should be shown.' },
  {
    name: 'variant',
    type: "'danger' | 'theme' | 'warning' | 'gray'",
    required: true,
    description: 'The variant of the alert.',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: 'The test ID for the alert, used for testing purposes.',
  },
  { name: 'id', type: 'string', required: false, description: 'The unique identifier for the alert.' },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: 'Additional CSS class names to be applied to the alert.',
  },
];

const inheritedProps = [
  { name: 'tooltip', type: 'string', required: false, description: 'Tooltip text to display on hover.' },
  { name: 'tooltipDelay', type: 'number', required: false, description: 'Delay before showing the tooltip.' },
  {
    name: 'tooltipPlacement',
    type: "'top' | 'bottom' | 'left' | 'right'",
    required: false,
    description: 'Placement of the tooltip.',
  },
  { name: 'tooltipTestId', type: 'string', required: false, description: 'Test ID for the tooltip.' },
];

const AlertQomponent: React.FC = () => (
  <div className="space-y-6">
    <ComponentSubPropsDisplay
      title="Inheritance"
      typeName="TooltipComponentProps"
      typeDescription="Alert extends TooltipComponentProps, which means it inherits all tooltip-related properties in addition to its own props."
      subProps={inheritedProps}
      typeLabel="inherited"
    />

    <ComponentPropsDisplay title="Alert Props" props={alertProps} />
  </div>
);

export default AlertQomponent;
