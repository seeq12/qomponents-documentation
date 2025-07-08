const collapseProps = [
  { name: 'isVisible', type: 'boolean', required: true, description: 'Indicates if the collapse is visible.' },
  { name: 'children', type: 'React.ReactNode', required: true, description: 'The children of the collapse.' },
];

const CollapseQomponent = () => (
  <div className="text-left">
    <div className="mt-8 flex flex-col gap-4">
      {collapseProps.map((prop) => (
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
);

export default CollapseQomponent;
