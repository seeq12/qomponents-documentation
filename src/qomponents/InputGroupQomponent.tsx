/**
 * InputGroupQomponent Component
 *
 * A documentation component that provides detailed specifications for the InputGroup
 * Qomponent. This component documents input group functionality, including input
 * combinations, addon configurations, button attachments, and styling options
 * for creating grouped form input elements with enhanced functionality.
 */

import React from 'react';
import { ComponentPropsDisplay, ComponentSubPropsDisplay } from './components';
import { typeDefinitions, inputgroupProps, inheritedProps } from '../generated/InputGroupProps';

const InputGroupQomponent: React.FC = () => (
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
      typeName="Multiple Inheritance"
      typeDescription="InputGroup extends multiple interfaces: TextFieldProps, TooltipComponentProps, and InputLengthStyleProps, which means it inherits all properties from these components in addition to its own props."
      subProps={inheritedProps.map((prop) => ({
        name: prop.name,
        type: prop.type,
        required: prop.required,
        description: prop.description,
      }))}
    />
    <ComponentPropsDisplay title="InputGroup Props" props={inputgroupProps} />
  </div>
);

export default InputGroupQomponent;
