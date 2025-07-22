/**
 * ProgressBarQomponent Component
 *
 * A documentation component that provides detailed specifications for the ProgressBar
 * Qomponent. This component documents progress indication functionality, including
 * value representations, styling variants, animation options, and labeling
 * configurations for implementing progress indicators and loading states.
 */

import React from 'react';
import { ComponentPropsDisplay, ComponentSubPropsDisplay } from './components';
import { typeDefinitions, progressbarProps } from '../generated/ProgressBarProps';

// Keep the manual inherited props for now since they're not in the generated file
const inheritedProps = [
  {
    name: 'tooltip',
    type: 'string',
    required: false,
    description: 'Text to display in a tooltip when hovering over the progress indicator.',
  },
  {
    name: 'isHtmlTooltip',
    type: 'boolean',
    required: false,
    description: 'If true, the tooltip text will be rendered as HTML for rich formatting.',
  },
  {
    name: 'tooltipTestId',
    type: 'string',
    required: false,
    description: 'A test id for the tooltip itself, useful for automated testing.',
  },
  {
    name: 'tooltipOptions',
    type: 'Omit<TooltipProps, "text">',
    required: false,
    description: 'Additional options for customizing the tooltip, except for the text itself.',
  },
];

const ProgressBarQomponent: React.FC = () => (
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
      typeDescription="ProgressIndicatorProps extends TooltipComponentProps, which means it inherits all tooltip-related properties in addition to its own props."
      subProps={inheritedProps.map((prop) => ({
        name: prop.name,
        type: prop.type,
        required: false,
        description: prop.description,
      }))}
    />

    <ComponentPropsDisplay title="ProgressBar Props" props={progressbarProps} />
  </div>
);

export default ProgressBarQomponent;
