import { QTip, Select } from '@seeqdev/qomponents';
import React from 'react';

const qtipProps = [
  {
    name: 'data-qtip-text',
    type: 'string',
    required: true,
    description: 'The tooltip text to display. Can also be a string containing valid HTML.',
  },
  {
    name: 'data-qtip-placement',
    type: "'top' | 'bottom' | 'right' | 'left'",
    required: false,
    description: 'Specifies the position of the tooltip relative to the element.',
  },
  {
    name: 'data-qtip-is-html',
    type: 'boolean',
    required: false,
    description: 'If true, the tooltip text will be rendered as HTML.',
  },
  {
    name: 'data-qtip-delay',
    type: 'number',
    required: false,
    description:
      "Number of milliseconds to wait before showing the tooltip on hover. Defaults to the library's default delay if not provided.",
  },
  {
    name: 'data-qtip-testid',
    type: 'string',
    required: false,
    description: 'Sets the data-testid attribute on the tooltip, useful for testing.',
  },
];

const qtipDescription = (
  <div className="mb-8 rounded border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
    <strong>QTip</strong>
    <br />
    QTip is a Singleton Tooltip component that guarantees high-performance and reduces component wrappers!
    <br />
    <br />
    QTip is used by all qomponents that support the display of tooltips.
    <br />
    If you want to add a Tooltip to your application you can do so by adding the following html data-attributes:
    <ul className="my-2 list-disc pl-6">
      <li>
        <code>data-qtip-text</code>: the tooltip text to display; this can also be a string containing valid HTML
      </li>
      <li>
        <code>data-qtip-placement</code>: one of <b>TooltipPosition</b> (<code>top</code>, <code>bottom</code>,{' '}
        <code>right</code>, or <code>left</code>)
      </li>
      <li>
        <code>data-qtip-is-html</code>: set this to true if you provided a text that contains HTML
      </li>
      <li>
        <code>data-qtip-delay</code>: this can be used to delay the showing of the tooltip. This should be a number
        representing the # of milliseconds you want to delay the tooltip for. If no delay is provided the{' '}
        <b>DEFAULT_TOOL_TIP_DELAY</b> is applied!
      </li>
      <li>
        <code>data-qtip-testid</code>: use this attribute to provide a value for a <code>data-testid</code> of your
        tooltip; this is useful for tests
      </li>
    </ul>
    In order for QTip to be able to display Tooltips you must add the QTip component to your top-most component (often
    that's App or Application) - simply add:
    <pre className="my-2 rounded bg-blue-100 p-2 text-xs">&lt;QTip /&gt;</pre>
    and enjoy beautiful &amp; performant tooltips!
  </div>
);

const QTipQomponent: React.FC = () => {
  return (
    <div>
      {qtipDescription}
      <div className="mt-8 flex flex-col gap-4">
        {qtipProps.map((prop) => (
          <div key={prop.name} className="rounded border border-gray-200 bg-white p-4">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <span className="font-mono font-semibold text-blue-700 text-base">{prop.name}</span>
              <span className="font-mono rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700">{prop.type}</span>
              {prop.required && <span className="ml-2 text-xs font-semibold text-red-600">required</span>}
            </div>
            <div className="text-gray-700 text-sm">{prop.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QTipQomponent;
