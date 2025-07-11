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

const accordionProps = [
  {
    name: 'value',
    type: 'string',
    required: true,
    description: 'Currently selected/expanded accordion item value',
  },
  {
    name: 'accordionItems',
    type: 'AccordionItem[]',
    required: true,
    description: 'Array of accordion items to render',
  },
  {
    name: 'onItemSelect',
    type: '(key: string) => void',
    required: true,
    description: 'Callback when an accordion item is selected',
  },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: 'Additional CSS classes to apply to the accordion container',
  },
  {
    name: 'defaultValue',
    type: 'string',
    required: false,
    description: 'Default item to expand when accordion is uncontrolled',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Whether the entire accordion is disabled',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: 'Test ID for the accordion container',
  },
];

const accordionItemProps = [
  {
    name: 'value',
    type: 'string',
    required: true,
    description: 'Unique identifier for the accordion item',
  },
  {
    name: 'trigger',
    type: 'React.ReactNode',
    required: true,
    description: 'Content to display in the clickable trigger/header',
  },
  {
    name: 'content',
    type: 'React.ReactNode',
    required: true,
    description: 'Content to display when the item is expanded',
  },
  {
    name: 'itemTestId',
    type: 'string',
    required: false,
    description: 'Test ID for this specific accordion item',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: 'HTML ID attribute for the accordion item',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Whether this specific item is disabled',
  },
  {
    name: 'contentClassNames',
    type: 'string',
    required: false,
    description: "Additional CSS classes for the item's content area",
  },
];

const AccordionQomponent: React.FC = () => {
  return (
    <div className="space-y-2">
      <ComponentSubPropsDisplay
        title="AccordionItem Type"
        typeName="AccordionItem"
        typeDescription="Individual accordion item configuration"
        subProps={accordionItemProps}
      />

      <ComponentPropsDisplay title="Accordion Props" props={accordionProps} />
    </div>
  );
};

export default AccordionQomponent;
