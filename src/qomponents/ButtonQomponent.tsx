/**
 * ButtonQomponent Component
 *
 * A comprehensive documentation component that displays Button component specifications,
 * props, variants, and usage information. This component provides detailed documentation
 * for the Button Qomponent including all available properties, styling variants,
 * and behavioral configurations for developers to understand and implement buttons
 * effectively in their applications.
 */

import React from 'react';
import { ComponentPropsDisplay, ComponentSubPropsDisplay } from './components';
import { buttonProps, typeDefinitions } from '../generated/ButtonProps';

const ButtonQomponent: React.FC = () => {
  return (
    <div className="text-left">
      <ComponentPropsDisplay title="Button Props" props={buttonProps} />

      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Type Definitions</h2>
        <div className="flex flex-col gap-6">
          {Object.values(typeDefinitions).map((typeDef) => (
            <ComponentSubPropsDisplay
              key={typeDef.name}
              title={typeDef.name}
              typeName={typeDef.name}
              typeDescription={typeDef.description}
              subProps={typeDef.properties}
              typeLabel="type"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonQomponent;
