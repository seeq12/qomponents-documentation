import React from 'react';

const typeDefinitions = [
  {
    name: 'AppendedButtonProps',
    definition: `{
  variant: 'button';
  buttonProps: ButtonProps;
}`,
    description: 'Properties for an appended button.',
  },
  {
    name: 'ElementProps',
    definition: `{
  variant: 'element';
  element: React.ReactNode;
}`,
    description: 'Properties for an appended element.',
  },
  {
    name: 'AppendedProps',
    definition: 'AppendedButtonProps | ElementProps | undefined',
    description: 'Union type for appended items.',
  },
];

const inputGroupProps = [
  {
    name: 'append',
    type: 'AppendedProps[]',
    required: true,
    description: 'Append elements - Array of elements to be appended to the input group.',
  },
  {
    name: 'field',
    type: 'React.ReactNode',
    required: false,
    description: 'The field to be rendered in the input group.',
  },
  // TextFieldProps and TooltipComponentProps are inherited
];

const inheritedProps = [
  { name: 'TextFieldProps', type: 'object', description: 'All props from TextField component.' },
  { name: 'TooltipComponentProps', type: 'object', description: 'All tooltip-related props.' },
];

const InputGroupQomponent = () => (
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
    {/* Inheritance Notice */}
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-blue-800 mb-2">Inheritance</h3>
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
    {/* InputGroup Props */}
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">InputGroup Props</h3>
      <div className="flex flex-col gap-4">
        {inputGroupProps.map((prop) => (
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

export default InputGroupQomponent;
