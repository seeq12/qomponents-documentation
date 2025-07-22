/**
 * ButtonWithDropdownQomponent Component
 *
 * A documentation component that provides comprehensive information about the ButtonWithDropdown
 * Qomponent. This component documents button dropdown functionality, including dropdown
 * configurations, menu items, positioning options, and interactive behaviors for
 * implementing button components with attached dropdown menus.
 */

import React from 'react';
import { ComponentPropsDisplay, ComponentSubPropsDisplay } from './components';
import { typeDefinitions, buttonwithdropdownProps, inheritedProps } from '../generated/ButtonWithDropdownProps';

const ButtonWithDropdownQomponent: React.FC = () => (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Type Definitions</h3>
      <div className="flex flex-col gap-6">
        {Object.values(typeDefinitions).map((type) => (
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
      typeDescription="ButtonWithDropdown extends TooltipComponentProps, which means it inherits all tooltip-related properties in addition to its own props."
      subProps={inheritedProps.map((prop) => ({
        name: prop.name,
        type: prop.type,
        required: false,
        description: prop.description,
      }))}
    />
    <ComponentPropsDisplay title="ButtonWithDropdown Props" props={buttonwithdropdownProps} />
  </div>
);

export default ButtonWithDropdownQomponent;
