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

const typeDefinitions = [
  {
    name: 'ProgressIndicatorProps',
    description: 'Properties for each progress indicator, extends TooltipComponentProps for tooltip functionality.',
    properties: [
      {
        name: 'extraClasses',
        type: 'string',
        required: false,
        description: 'Additional classes to apply to the progress indicator',
      },
      { name: 'testId', type: 'string', required: false, description: 'The test id for the progress indicator' },
      {
        name: 'value',
        type: 'number',
        required: true,
        description: 'The value of the progress indicator, between 0 and max',
      },
      {
        name: 'color',
        type: 'string',
        required: false,
        description: 'The color of the progress indicator (e.g. #ffffff)',
      },
      { name: 'label', type: 'string', required: false, description: 'The label to display on the progress indicator' },
      {
        name: 'labelClasses',
        type: 'string',
        required: false,
        description: 'Additional classes to apply to the label',
      },
    ],
  },
];

const progressBarProps = [
  {
    name: 'values',
    type: 'ProgressIndicatorProps[]',
    required: true,
    description: 'Array of progress indicator configurations with values, colors, and labels.',
  },
  { name: 'max', type: 'number', required: false, description: 'The maximum value of the progress bar.' },
  {
    name: 'containerExtraClasses',
    type: 'string',
    required: false,
    description: 'Additional classes to apply to the progress bar container.',
  },
  { name: 'testId', type: 'string', required: false, description: 'The test id for the progress bar.' },
  {
    name: 'zeroValueLabel',
    type: 'string',
    required: false,
    description: 'The label to display when the progress bar has a value of zero.',
  },
];

const inheritedProps = [
  {
    name: 'tooltip',
    type: 'string',
    description: 'Text to display in a tooltip when hovering over the progress indicator.',
  },
  { name: 'tooltipDelay', type: 'number', description: 'Delay in milliseconds before showing the tooltip.' },
  {
    name: 'tooltipPlacement',
    type: "'top' | 'bottom' | 'left' | 'right'",
    description: 'Placement of the tooltip relative to the indicator.',
  },
  { name: 'tooltipTestId', type: 'string', description: 'A test id for the tooltip, useful for automated testing.' },
];

const ProgressBarQomponent: React.FC = () => (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Type Definitions</h3>
      <div className="flex flex-col gap-6">
        {typeDefinitions.map((type) => (
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

    <ComponentPropsDisplay title="ProgressBar Props" props={progressBarProps} />
  </div>
);

export default ProgressBarQomponent;
