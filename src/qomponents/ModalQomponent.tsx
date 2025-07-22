/**
 * ModalQomponent Component
 *
 * A documentation component that provides comprehensive information about the Modal
 * Qomponent. This component documents modal dialog functionality, including sizing
 * options, backdrop behaviors, header/footer configurations, animation effects,
 * and accessibility features for implementing modal overlays and dialogs.
 */

import React from 'react';
import { ComponentPropsDisplay, ComponentSubPropsDisplay } from './components';
import { modalProps } from '../generated/ModalProps';

const typeDefinitions = [
  {
    name: 'ModalSize',
    definition: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'",
    description: 'Size variants for the modal dialog',
  },
  {
    name: 'TitleIconPosition',
    definition: "'left' | 'right'",
    description: 'Position of the title icon relative to the title text',
  },
  {
    name: 'ButtonVariant',
    definition: 'string',
    description: 'Button style variant (see Button component documentation)',
  },
  {
    name: 'FormControlElement',
    definition: 'HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement',
    description: 'HTML form control elements for title editing',
  },
];

// Convert type definitions to the format expected by ComponentSubPropsDisplay
const typeDefinitionsForDisplay = typeDefinitions.map((type) => ({
  name: type.name,
  type: type.definition,
  required: false,
  description: type.description,
}));

const ModalQomponent: React.FC = () => {
  return (
    <div className="space-y-6">
      <ComponentSubPropsDisplay
        title="Type Definitions"
        typeName="Modal Types"
        typeDescription="Type definitions used by the Modal component"
        subProps={typeDefinitionsForDisplay}
        typeLabel="type"
      />

      <ComponentPropsDisplay title="Modal Props" props={modalProps} />
    </div>
  );
};

export default ModalQomponent;
