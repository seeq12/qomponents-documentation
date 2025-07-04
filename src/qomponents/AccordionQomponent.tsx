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

const AccordionQomponent = () => {
  return (
    <div className="space-y-6">
      {/* AccordionItem Type Definition */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AccordionItem Type</h3>
        <div className="rounded border border-blue-200 bg-blue-50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono font-semibold text-blue-800 text-base">AccordionItem</span>
            <span className="text-xs text-blue-600">interface</span>
          </div>
          <div className="text-blue-700 text-sm mb-3">Individual accordion item configuration</div>
          <div className="flex flex-col gap-2">
            {accordionItemProps.map((prop) => (
              <div key={prop.name} className="bg-white p-3 rounded">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-mono font-semibold text-blue-700 text-sm">{prop.name}</span>
                  <span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-700">{prop.type}</span>
                  {prop.required && <span className="text-xs text-red-600 font-semibold ml-2">required</span>}
                </div>
                <div className="text-gray-700 text-xs">{prop.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accordion Props */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Accordion Props</h3>
        <div className="flex flex-col gap-4">
          {accordionProps.map((prop) => (
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
};

export default AccordionQomponent;
