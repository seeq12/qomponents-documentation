/**
 * SeeqActionDropdownQomponent Component
 *
 * A documentation component that provides detailed specifications for the SeeqActionDropdown
 * Qomponent. This component documents action dropdown functionality, including menu
 * configurations, action items, trigger behaviors, and styling options for
 * implementing dropdown action menus specific to Seeq applications.
 */

import React from 'react';
import { ComponentPropsDisplay, ComponentSubPropsDisplay } from './components';

const typeDefinitions = [
  {
    name: 'SeeqActionDropdownItems',
    description: 'Properties for each dropdown item with display text, actions, and optional styling.',
    properties: [
      {
        name: 'id',
        type: 'string',
        required: false,
        description: 'Optional unique identifier for the dropdown item',
      },
      {
        name: 'icon',
        type: 'string',
        required: false,
        description: "Icon class to be used with the workbench items (e.g., 'fc-zoom')",
      },
      {
        name: 'iconExtraClassNames',
        type: 'string',
        required: false,
        description: 'Additional CSS classes for the icon',
      },
      {
        name: 'display',
        type: 'string',
        required: true,
        description: 'Label text for the workbench items',
      },
      {
        name: 'action',
        type: '(e?: Event) => void',
        required: true,
        description: 'Function called when the workbench item is clicked',
      },
      {
        name: 'enabled',
        type: 'boolean',
        required: false,
        description: 'Whether the item is enabled (opposite of disabled)',
      },
      {
        name: 'divider',
        type: 'boolean',
        required: false,
        description: 'Displays a divider line under present workbench item',
      },
      { name: 'testId', type: 'string', required: false, description: 'Test ID for the workbench item' },
      { name: 'text', type: 'string', required: false, description: 'Subtext displayed below workbench item headline' },
    ],
  },
];

const seeqActionDropdownProps = [
  {
    name: 'seeqActionDropdownItems',
    type: 'SeeqActionDropdownItems[]',
    required: true,
    description: 'Items for the dropdown content.',
  },
  { name: 'trigger', type: 'React.ReactNode', required: true, description: 'Element to be used as the trigger.' },
  { name: 'id', type: 'string', required: false, description: 'ID of the trigger.' },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: 'Extra class names for the dropdown container.',
  },
  { name: 'containerTestId', type: 'string', required: false, description: 'Test id for the container element.' },
  { name: 'disabled', type: 'boolean', required: false, description: 'Is the button disabled.' },
  {
    name: 'onClick',
    type: '(e: MouseEvent) => void',
    required: false,
    description: 'Function called when the trigger is clicked on.',
  },
  {
    name: 'align',
    type: "'start' | 'center' | 'end'",
    required: false,
    description: 'Alignment of the content of the popover.',
  },
  { name: 'alignOffset', type: 'number', required: false, description: 'Number offset from the aligned position.' },
  {
    name: 'placement',
    type: "'top' | 'bottom' | 'left' | 'right'",
    required: false,
    description: 'Placement of the popover.',
  },
  {
    name: 'placementOffset',
    type: 'number',
    required: false,
    description: 'Number offset from the placement position.',
  },
  { name: 'hasArrow', type: 'boolean', required: false, description: 'Set to display arrow or not.' },
  { name: 'isOpen', type: 'boolean', required: false, description: 'Is popover open.' },
  {
    name: 'onOpenChange',
    type: '(isOpen: boolean) => void',
    required: false,
    description: 'Function called to open and close popover.',
  },
  {
    name: 'setFocusOnTriggerOnClose',
    type: 'boolean',
    required: false,
    description: 'Sets focus on the trigger button after the dropdown is closed.',
  },
  {
    name: 'isCloseOnContentClick',
    type: 'boolean',
    required: false,
    description: 'Should popover close when the content is clicked?',
  },
  {
    name: 'keepFocusInsideDropdown',
    type: 'boolean',
    required: false,
    description: 'Focus should be kept within dropdown.',
  },
  {
    name: 'variant',
    type: "'create-workbench' | 'view-workbench' | 'insert-seeq-content'",
    required: true,
    description: 'Dropdown variant.',
  },
];

const inheritedProps = [
  { name: 'tooltip', type: 'string', description: 'Tooltip text to display on hover.' },
  { name: 'tooltipDelay', type: 'number', description: 'Delay before showing the tooltip.' },
  { name: 'tooltipPlacement', type: "'top' | 'bottom' | 'left' | 'right'", description: 'Placement of the tooltip.' },
  { name: 'tooltipTestId', type: 'string', description: 'Test ID for the tooltip.' },
];

const SeeqActionDropdownQomponent: React.FC = () => (
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
      typeDescription="SeeqActionDropdown extends TooltipComponentProps, which means it inherits all tooltip-related properties in addition to its own props."
      subProps={inheritedProps.map((prop) => ({
        name: prop.name,
        type: prop.type,
        required: false,
        description: prop.description,
      }))}
    />
    <ComponentPropsDisplay title="SeeqActionDropdown Props" props={seeqActionDropdownProps} />
  </div>
);

export default SeeqActionDropdownQomponent;
