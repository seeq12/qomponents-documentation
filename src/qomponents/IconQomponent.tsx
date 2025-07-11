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

const iconProps = [
  {
    name: 'icon',
    type: 'string',
    required: true,
    description: 'Icon class to be used (i.e. fc-zoom)',
  },
  {
    name: 'iconPrefix',
    type: 'string',
    required: false,
    description:
      'Normally we want for Icon to prefix FontAwesome icons with the fa-sharp fa-regular prefix however there are a select few icons that are not pulled from that set. For those we need to pass specific prefixes instead.',
  },
  {
    name: 'type',
    type: 'IconType',
    required: false,
    description: 'Icon color option (text, white, theme, color, inherit; default is "theme")',
  },
  {
    name: 'color',
    type: 'string',
    required: false,
    description: 'Used to add a custom color to the icon (required if type="color")',
  },
  {
    name: 'onClick',
    type: '(e?: React.MouseEvent<HTMLElement, MouseEvent>) => any',
    required: false,
    description: 'Function to call when clicking the icon (takes no parameters)',
  },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: 'Extra class names to be placed on the Icon component',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: 'Id that can be placed on the Icon component',
  },
  {
    name: 'large',
    type: 'boolean',
    required: false,
    description: "True to add the 'fa-lg' class to the icon",
  },
  {
    name: 'small',
    type: 'boolean',
    required: false,
    description: "True to add the 'fa-sm' class to the icon",
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: 'Id that will be used in the data-testid attribute on the icon',
  },
  {
    name: 'customId',
    type: 'string',
    required: false,
    description:
      'Id that will be used in the data-customid attribute on the icon. Can be used to identify the icon as the click event target in an event handler',
  },
  {
    name: 'number',
    type: 'number',
    required: false,
    description: 'Number value for the icon',
  },
];

const inheritedProps = [
  {
    name: 'tooltip',
    type: 'string',
    description: 'Tooltip text to display on hover',
  },
  {
    name: 'tooltipDelay',
    type: 'number',
    description: 'Delay before showing the tooltip',
  },
  {
    name: 'tooltipPlacement',
    type: "'top' | 'bottom' | 'left' | 'right'",
    description: 'Placement of the tooltip',
  },
  {
    name: 'tooltipTestId',
    type: 'string',
    description: 'Test ID for the tooltip',
  },
];

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
