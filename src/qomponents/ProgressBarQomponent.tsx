import React from 'react';

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
  {
    name: 'ProgressBarProps',
    description: 'The ProgressBar component displays a visual representation of a progress value.',
    properties: [
      { name: 'values', type: 'ProgressIndicatorProps[]', required: true, description: 'The indicator values' },
      { name: 'max', type: 'number', required: false, description: 'The maximum value of the progress bar' },
      {
        name: 'containerExtraClasses',
        type: 'string',
        required: false,
        description: 'Additional classes to apply to the progress bar container',
      },
      { name: 'testId', type: 'string', required: false, description: 'The test id for the progress bar' },
      {
        name: 'zeroValueLabel',
        type: 'string',
        required: false,
        description: 'The label to display when the progress bar has a value of zero',
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

const ProgressBarQomponent = () => (
  <div className="space-y-6">
    {/* Type Definitions */}
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Type Definitions</h3>
      <div className="flex flex-col gap-6">
        {typeDefinitions.map((type) => (
          <div key={type.name} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono font-semibold text-blue-800 text-base">{type.name}</span>
              <span className="text-xs text-blue-600">interface</span>
            </div>
            <div className="text-blue-700 text-sm mb-3">{type.description}</div>
            <div className="flex flex-col gap-2">
              {type.properties.map((prop) => (
                <div key={prop.name} className="bg-white p-2 rounded">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-mono font-semibold text-blue-700 text-sm">{prop.name}</span>
                    <span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-700">{prop.type}</span>
                    {prop.required && <span className="text-xs text-red-600 font-semibold">required</span>}
                  </div>
                  <div className="text-blue-700 text-xs">{prop.description}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Inheritance */}
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-blue-800 mb-2">Inheritance</h3>
      <p className="text-blue-700 text-sm mb-3">
        ProgressIndicatorProps extends <span className="font-mono bg-white px-1 rounded">TooltipComponentProps</span>,
        which means it inherits all tooltip-related properties in addition to its own props.
      </p>
      <div className="flex flex-col gap-2">
        {inheritedProps.map((prop) => (
          <div key={prop.name} className="bg-white p-2 rounded">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="font-mono font-semibold text-blue-700 text-sm">{prop.name}</span>
              <span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-700">{prop.type}</span>
              <span className="text-xs text-blue-600">inherited</span>
            </div>
            <div className="text-blue-700 text-xs">{prop.description}</div>
          </div>
        ))}
      </div>
    </div>
    {/* ProgressBar Props */}
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">ProgressBar Props</h3>
      <div className="flex flex-col gap-4">
        {progressBarProps.map((prop) => (
          <div key={prop.name} className="rounded border border-gray-200 bg-white p-4">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="font-mono font-semibold text-blue-700 text-base">{prop.name}</span>
              <span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-700">{prop.type}</span>
              {prop.required && <span className="text-xs text-red-600 font-semibold ml-2">required</span>}
            </div>
            <div className="text-gray-700 text-sm">{prop.description}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProgressBarQomponent;
