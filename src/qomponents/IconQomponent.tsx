/**
 * IconQomponent Component
 *
 * A documentation component that provides detailed specifications for the Icon
 * Qomponent. This component documents all available icon properties, types,
 * color options, styling configurations, and interactive behaviors. It covers
 * FontAwesome integration, custom icon support, and various visual styling
 * options available for icon implementation.
 */

import React from 'react';
import { ComponentPropsDisplay, ComponentSubPropsDisplay } from './components';
import { iconProps, inheritedProps } from '../generated/IconProps';

const typeDefinitions = [
  {
    name: 'IconType',
    definition:
      "'theme' | 'white' | 'dark-gray' | 'darkish-gray' | 'gray' | 'color' | 'info' | 'text' | 'warning' | 'inherit' | 'danger' | 'theme-light' | 'success'",
    description: 'Available color variants for the icon',
  },
];

const IconQomponent: React.FC = () => {
  return (
    <div className="space-y-6">
      <ComponentSubPropsDisplay
        title="Type Definitions"
        typeName="IconType"
        typeDescription="Available color variants for the icon"
        subProps={typeDefinitions.map((type) => ({
          name: type.name,
          type: type.definition,
          required: false,
          description: type.description,
        }))}
        typeLabel="type"
      />

      <ComponentSubPropsDisplay
        title="Inheritance"
        typeName="TooltipComponentProps"
        typeDescription="Icon extends TooltipComponentProps, which means it inherits all tooltip-related properties in addition to its own props."
        subProps={inheritedProps.map((prop) => ({
          name: prop.name,
          type: prop.type,
          required: false,
          description: prop.description,
        }))}
      />

      <ComponentPropsDisplay title="Icon Props" props={iconProps} />
    </div>
  );
};

export default IconQomponent;
