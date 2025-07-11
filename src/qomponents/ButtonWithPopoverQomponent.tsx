/**
 * ButtonWithPopoverQomponent Component
 *
 * A documentation component that provides detailed specifications for the ButtonWithPopover
 * Qomponent. This component documents button popover functionality, including popover
 * content configurations, positioning, trigger behaviors, and styling options for
 * implementing buttons with attached popover content displays.
 */

import React from 'react';
import { ComponentPropsDisplay, ComponentSubPropsDisplay } from './components';

const buttonWithPopoverProps = [
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'Items for the popover content',
  },
  {
    name: 'trigger',
    type: 'React.ReactNode',
    required: false,
    description: "Icon class to be used with the toolbar (i.e. 'fc-zoom')",
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: 'Unique identifier for the component',
  },
  {
    name: 'containerTestId',
    type: 'string',
    required: false,
    description: 'Id that will be used in the data-testid attribute on the container element',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Whether the button with popover is disabled',
  },
  {
    name: 'onClick',
    type: '(isOpen: boolean) => void',
    required: false,
    description: 'Function called when the toolbar is clicked on, i.e. for tracking (does not open the popover)',
  },
  {
    name: 'align',
    type: "'start' | 'center' | 'end'",
    required: false,
    description: 'Alignment of the content of the popover',
  },
  {
    name: 'alignOffset',
    type: 'number',
    required: false,
    description: 'Number offset from the aligned position',
  },
  {
    name: 'placement',
    type: "'top' | 'bottom' | 'left' | 'right'",
    required: false,
    description: 'The placement of the popover',
  },
  {
    name: 'placementOffset',
    type: 'number',
    required: false,
    description: 'Number offset from the placement position',
  },
  {
    name: 'isOpen',
    type: 'boolean',
    required: false,
    description: 'Is popover open',
  },
  {
    name: 'onOpenChange',
    type: '(isOpen: boolean) => void',
    required: false,
    description: 'Function called to open and close popover',
  },
  {
    name: 'hasArrow',
    type: 'boolean',
    required: false,
    description: 'Set to display arrow or not',
  },
  {
    name: 'isHoverEnabled',
    type: 'boolean',
    required: false,
    description: 'Displays the popover when we hover over trigger',
  },
  {
    name: 'hoverOpenDelay',
    type: 'number',
    required: false,
    description: 'Delay before popover is displayed when isHoverEnabled is true',
  },
  {
    name: 'extraTriggerClassNames',
    type: 'string',
    required: false,
    description: 'Extra trigger container classnames',
  },
  {
    name: 'extraPopoverClassNames',
    type: 'string',
    required: false,
    description: 'Extra popover container classnames',
  },
  {
    name: 'isCloseOnContentClick',
    type: 'boolean',
    required: false,
    description: 'Should popover close when the content is clicked?',
  },
  {
    name: 'onInteractOutside',
    type: '() => void',
    required: false,
    description: 'Calls the function if click or focus happens outside popover content',
  },
  {
    name: 'onPointerDownOutside',
    type: '() => void',
    required: false,
    description: 'Calls the function if pointer down happens outside popover content',
  },
  {
    name: 'isTriggerAsChild',
    type: 'boolean',
    required: false,
    description: 'Merge trigger button with trigger element',
  },
  {
    name: 'shouldTriggerFullWidth',
    type: 'boolean',
    required: false,
    description: 'Should trigger button take full width',
  },
  {
    name: 'isPortal',
    type: 'boolean',
    required: false,
    description: 'Is popover rendered in a portal',
  },
];

const inheritedProps = [
  {
    name: 'tooltip',
    type: 'string',
    description: 'Tooltip text to display on hover',
  },
  {
    name: 'tooltipDelay',
    type: 'number',
    description: 'Delay before showing the tooltip',
  },
  {
    name: 'tooltipPlacement',
    type: "'top' | 'bottom' | 'left' | 'right'",
    description: 'Placement of the tooltip',
  },
  {
    name: 'tooltipTestId',
    type: 'string',
    description: 'Test ID for the tooltip',
  },
];

const ButtonWithPopoverQomponent: React.FC = () => {
  return (
    <div className="space-y-6">
      <ComponentSubPropsDisplay
        title="Inheritance"
        typeName="TooltipComponentProps"
        typeDescription="ButtonWithPopover extends TooltipComponentProps, which means it inherits all tooltip-related properties in addition to its own props."
        subProps={inheritedProps.map((prop) => ({
          name: prop.name,
          type: prop.type,
          required: false,
          description: prop.description,
        }))}
      />
      <ComponentPropsDisplay title="ButtonWithPopover Props" props={buttonWithPopoverProps} />
    </div>
  );
};

export default ButtonWithPopoverQomponent;
