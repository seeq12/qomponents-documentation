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
import { alertProps, inheritedProps } from '../generated/AlertProps';

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
