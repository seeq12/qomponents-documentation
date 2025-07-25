/**
 * ButtonWithPopoverQomponent Component
 *
 * A documentation component that provides detailed specifications for the ButtonWithPopover
 * Qomponent. This component documents button popover functionality, including popover
 * content configurations, positioning, trigger behaviors, and styling options for
 * implementing buttons with attached popover content displays.
 */

import React from 'react';
import { ComponentPropsDisplay, ComponentSubPropsDisplay } from './components';
import { buttonwithpopoverProps, inheritedProps } from '../generated/ButtonWithPopoverProps';

const ButtonWithPopoverQomponent: React.FC = () => {
  return (
    <div className="space-y-6">
      <ComponentSubPropsDisplay
        title="Inheritance"
        typeName="TooltipComponentProps"
        typeDescription="ButtonWithPopover extends TooltipComponentProps, which means it inherits all tooltip-related properties in addition to its own props."
        subProps={inheritedProps.map((prop) => ({
          name: prop.name,
          type: prop.type,
          required: false,
          description: prop.description,
        }))}
      />
      <ComponentPropsDisplay title="ButtonWithPopover Props" props={buttonwithpopoverProps} />
    </div>
  );
};

export default ButtonWithPopoverQomponent;
