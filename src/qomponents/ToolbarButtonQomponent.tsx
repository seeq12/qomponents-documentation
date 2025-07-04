import React from 'react';

const toolbarButtonProps = [
  {
    name: 'icon',
    type: 'string',
    required: true,
    description:
      "The main icon class for the toolbar button (e.g., 'fc-zoom'). This icon will be displayed on the button.",
  },
  {
    name: 'secondIcon',
    type: 'string',
    required: false,
    description: 'An optional second icon class to display next to the main icon, allowing for composite icons.',
  },
  {
    name: 'forceSmallIcon',
    type: 'boolean',
    required: false,
    description: 'If true, forces the icon to render at a smaller size regardless of context.',
  },
  {
    name: 'label',
    type: 'string',
    required: false,
    description: 'Text label for the toolbar button. This label is shown when there is enough space in the toolbar.',
  },
  {
    name: 'popoverContent',
    type: 'React.ReactNode',
    required: false,
    description:
      'Content to display in a popover when the button is clicked. Can be any valid React node (text, images, etc.).',
  },
  {
    name: 'isSmall',
    type: 'boolean',
    required: false,
    description: 'If true, renders the button as an icon-only button without a label.',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: 'A unique identifier for the toolbar button, useful for testing or targeting.',
  },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: 'Additional CSS class names to apply to the toolbar button container for custom styling.',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: 'A string used for the data-testid attribute, helpful for selecting the button in tests.',
  },
  {
    name: 'tooltipText',
    type: 'string',
    required: false,
    description: "Text to show in a tooltip when hovering over the button's icon.",
  },
  {
    name: 'isHtmlTooltip',
    type: 'boolean',
    required: false,
    description: 'If true, the tooltip text will be rendered as HTML, allowing for rich formatting.',
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
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'If true, disables the button so it cannot be interacted with.',
  },
  {
    name: 'onClick',
    type: '(e: MouseEvent) => void',
    required: false,
    description: 'Callback function that is called when the button is clicked. Does not open the popover.',
  },
  {
    name: 'isActive',
    type: 'boolean',
    required: false,
    description: 'If true, gives the button a "pressed" or active appearance.',
  },
  {
    name: 'onHide',
    type: '() => void',
    required: false,
    description: 'Callback function called when the popover is hidden.',
  },
  {
    name: 'hasArrow',
    type: 'boolean',
    required: false,
    description: 'If true, displays a small arrow indicator on the button.',
  },
  {
    name: 'isPrimaryAnSvg',
    type: 'boolean',
    required: false,
    description: 'If true, treats the icon string as an SVG instead of a font icon.',
  },
  {
    name: 'primaryIconExtraClassNames',
    type: 'string',
    required: false,
    description: 'Additional CSS class names to apply specifically to the primary icon.',
  },
  {
    name: 'iconHeight',
    type: 'number',
    required: false,
    description: 'Sets a custom height (in pixels) for the icon.',
  },
  {
    name: 'iconWidth',
    type: 'number',
    required: false,
    description: 'Sets a custom width (in pixels) for the icon.',
  },
  {
    name: 'primaryIconViewbox',
    type: 'string',
    required: false,
    description: 'Sets the SVG viewBox attribute for the primary icon, useful for custom SVGs.',
  },
];

const ToolbarButtonQomponentDocs: React.FC = () => {
  return (
    <div className="w-full mt-8">
      <div className="flex flex-col gap-4">
        {toolbarButtonProps.map((prop) => (
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
};

export default ToolbarButtonQomponentDocs;
