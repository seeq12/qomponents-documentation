/**
 * SeeqActionDropdownQomponent Component
 *
 * A documentation component that provides detailed specifications for the SeeqActionDropdown
 * Qomponent. This component documents action dropdown functionality, including menu
 * configurations, action items, trigger behaviors, and styling options for
 * implementing dropdown action menus specific to Seeq applications.
 */

import React from 'react';
import { ComponentPropsDisplay, ComponentSubPropsDisplay } from './components';
import { typeDefinitions, seeqactiondropdownProps, inheritedProps } from '../generated/SeeqActionDropdownProps';

const SeeqActionDropdownQomponent: React.FC = () => (
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
      typeDescription="SeeqActionDropdown extends TooltipComponentProps, which means it inherits all tooltip-related properties in addition to its own props."
      subProps={inheritedProps.map((prop) => ({
        name: prop.name,
        type: prop.type,
        required: false,
        description: prop.description,
      }))}
    />
    <ComponentPropsDisplay title="SeeqActionDropdown Props" props={seeqactiondropdownProps} />
  </div>
);

export default SeeqActionDropdownQomponent;
