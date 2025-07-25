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
import { typeDefinitions, buttongroupProps, inheritedProps } from '../generated/ButtonGroupProps';

const ButtonGroupQomponent: React.FC = () => (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Type Definitions</h3>
      <div className="flex flex-col gap-6">
        {Object.entries(typeDefinitions).map(([typeName, typeData]) => (
          <ComponentSubPropsDisplay
            key={typeName}
            title=""
            typeName={typeName}
            typeDescription={typeData.description}
            subProps={typeData.properties}
          />
        ))}
      </div>
    </div>

    <ComponentSubPropsDisplay
      title="Inheritance"
      typeName="TooltipComponentProps"
      typeDescription="ButtonGroup extends TooltipComponentProps, which means it inherits all tooltip-related properties in addition to its own props."
      subProps={inheritedProps}
      typeLabel="inherited"
    />

    <ComponentPropsDisplay title="ButtonGroup Props" props={buttongroupProps} />
  </div>
);

export default ButtonGroupQomponent;
