/**
 * AccordionQomponent Component
 *
 * A documentation component that provides comprehensive information about the Accordion
 * Qomponent. This component details all available properties for creating collapsible
 * content sections, including value management, styling options, accessibility features,
 * and interactive behaviors for building expandable/collapsible UI elements.
 */

import React from 'react';
import { ComponentPropsDisplay, ComponentSubPropsDisplay } from './components';
import { typeDefinitions, accordionProps } from '../generated/AccordionProps';

const AccordionQomponent: React.FC = () => {
  return (
    <div className="space-y-2">
      {Object.entries(typeDefinitions).map(([typeName, typeData]) => (
        <ComponentSubPropsDisplay
          key={typeName}
          title={`${typeName} Type`}
          typeName={typeName}
          typeDescription={typeData.description}
          subProps={typeData.properties}
        />
      ))}

      <ComponentPropsDisplay title="Accordion Props" props={accordionProps} />
    </div>
  );
};

export default AccordionQomponent;
