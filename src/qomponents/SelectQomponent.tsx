/**
 * SelectQomponent Component
 *
 * A documentation component that provides comprehensive information about the Select
 * Qomponent. This component documents select dropdown functionality, including
 * option configurations, multi-select capabilities, search features, styling
 * variants, and accessibility options for implementing dropdown selection controls.
 */

import React from 'react';
import { ComponentPropsDisplay, ComponentSubPropsDisplay } from './components';
import { typeDefinitions, selectProps } from '../generated/SelectProps';

const SelectQomponent: React.FC = () => {
  return (
    <div className="space-y-6">
      <ComponentSubPropsDisplay
        title="Type Definitions"
        typeName="Select Types"
        typeDescription="Type definitions used by the Select component"
        subProps={Object.values(typeDefinitions).map((type) => ({
          name: type.name,
          type: type.properties.map((prop) => `${prop.name}: ${prop.type}${prop.required ? '' : '?'}`).join(', '),
          required: false,
          description: type.description,
        }))}
        typeLabel="type"
      />

      <ComponentPropsDisplay title="Select Props" props={selectProps} />
    </div>
  );
};

export default SelectQomponent;
