import React from 'react';

const carouselProps = [
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: 'Optional test ID for the carousel, useful for testing purposes.',
  },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: 'Additional class names to apply to the carousel for custom styling.',
  },
  { name: 'activeIndex', type: 'number', required: false, description: 'The index of the currently active slide.' },
  {
    name: 'onSlide',
    type: '(nextSlide: number, direction: "left" | "right") => void',
    required: false,
    description: 'Callback function that is called when the slide changes.',
  },
  {
    name: 'autoSlide',
    type: 'boolean',
    required: false,
    description: 'Whether the carousel should automatically slide to the next item.',
  },
  {
    name: 'interval',
    type: 'number',
    required: false,
    description: 'The interval (in milliseconds) between automatic slide transitions.',
  },
  { name: 'nextIcon', type: 'string', required: false, description: 'The icon to use for the "next" arrow.' },
  { name: 'prevIcon', type: 'string', required: false, description: 'The icon to use for the "previous" arrow.' },
  {
    name: 'iconExtraClassNames',
    type: 'string',
    required: false,
    description: 'Additional class names to apply to the icons for custom styling.',
  },
  { name: 'showArrows', type: 'boolean', required: false, description: 'Whether to show navigation arrows.' },
  { name: 'showIndicators', type: 'boolean', required: false, description: 'Whether to show slide indicators.' },
  {
    name: 'continuous',
    type: 'boolean',
    required: false,
    description: 'Whether the carousel should loop continuously.',
  },
  {
    name: 'carouselItems',
    type: 'React.ReactNode[]',
    required: true,
    description: 'The items to display in the carousel.',
  },
];

const CarouselQomponent = () => (
  <div className="text-left">
    <div className="mt-8 flex flex-col gap-4">
      {carouselProps.map((prop) => (
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

export default CarouselQomponent;
