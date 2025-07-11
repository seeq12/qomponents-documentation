/**
 * TabsQomponent Component
 *
 * A documentation component that provides comprehensive information about the Tabs
 * Qomponent. This component documents tab navigation functionality, including
 * tab configurations, content panels, styling variants, orientation options,
 * and accessibility features for implementing tabbed content interfaces.
 */

import React from 'react';
import { ComponentPropsDisplay, ComponentSubPropsDisplay } from './components';

const tabsProps = [
  {
    name: 'tabs',
    type: 'TabItem[]',
    required: true,
    description: 'Array of tabs to be rendered',
  },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: 'Adds a class to the tabs container',
  },
  {
    name: 'defaultActiveTab',
    type: 'string',
    required: false,
    description: 'Sets the default active tab to be selected on first load',
  },
  {
    name: 'activeTab',
    type: 'string',
    required: false,
    description: 'Sets the active tab to be selected',
  },
  {
    name: 'transition',
    type: 'boolean',
    required: false,
    description: 'Enable transition animations',
  },
  {
    name: 'onTabSelect',
    type: '(tabId: string) => void',
    required: false,
    description: 'Function to be called when a tab is selected',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: 'Unique identifier for the tabs container',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: 'Test id for the tabs container',
  },
  {
    name: 'stretchTabs',
    type: 'boolean',
    required: false,
    description: 'If true, the tabs will stretch to fill the width of the container',
  },
];

const tabItemProps = [
  {
    name: 'label',
    type: 'string',
    required: true,
    description: 'Label of the tab',
  },
  {
    name: 'id',
    type: 'string',
    required: true,
    description: 'Unique identifier for the tab',
  },
  {
    name: 'content',
    type: 'React.JSX.Element',
    required: true,
    description: 'Content to be rendered when the tab is selected',
  },
  {
    name: 'icon',
    type: 'string',
    required: false,
    description: 'Icon to be rendered next to the label',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: 'Test id for the tab',
  },
  {
    name: 'tabExtraClassNames',
    type: 'string',
    required: false,
    description: 'Additional class names to be added to the tab',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Whether the tab is disabled',
  },
  {
    name: 'tabContentExtraClassNames',
    type: 'string',
    required: false,
    description: 'Additional class names to be added to the tab content',
  },
];

const TabsQomponent: React.FC = () => {
  return (
    <div className="space-y-6">
      <ComponentSubPropsDisplay
        title="TabItem Type"
        typeName="TabItem"
        typeDescription="Individual tab configuration object"
        subProps={tabItemProps}
      />

      <ComponentPropsDisplay title="Tabs Props" props={tabsProps} />
    </div>
  );
};

export default TabsQomponent;
