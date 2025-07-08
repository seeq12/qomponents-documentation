import React from 'react';

const typeDefinitions = [
  {
    name: 'ProgressIndicatorProps',
    definition: `{
  extraClasses?: string;
  testId?: string;
  value: number;
  color?: string;
  label?: string;
  labelClasses?: string;
  // TooltipComponentProps inherited
}`,
    description: 'Properties for each progress indicator.',
  },
];

const progressBarProps = [
  { name: 'values', type: 'ProgressIndicatorProps[]', required: true, description: 'The indicator values.' },
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

const ProgressBarQomponent = () => (
  <div className="space-y-6">
    {/* Type Definitions */}
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Type Definitions</h3>
      <div className="flex flex-col gap-3">
        {typeDefinitions.map((type) => (
          <div key={type.name} className="rounded border border-blue-200 bg-blue-50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono font-semibold text-blue-800 text-base">{type.name}</span>
              <span className="text-xs text-blue-600">type</span>
            </div>
            <div className="font-mono text-sm text-blue-700 mb-2 bg-white p-2 rounded">{type.definition}</div>
            <div className="text-blue-700 text-sm">{type.description}</div>
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
