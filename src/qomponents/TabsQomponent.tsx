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
import { tabsProps } from '../generated/TabsProps';

const tabItemProps = [
  {
    name: 'label',
    type: 'string',
    required: true,
    description: 'The label for the tab item',
  },
  {
    name: 'id',
    type: 'string',
    required: true,
    description: 'Unique identifier for the tab item',
  },
  {
    name: 'content',
    type: 'React.JSX.Element',
    required: true,
    description: 'The content for the tab item',
  },
  {
    name: 'icon',
    type: 'string',
    required: false,
    description: 'Icon to be displayed with the tab label',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: 'Test ID for the tab item for testing purposes',
  },
  {
    name: 'tabExtraClassNames',
    type: 'string',
    required: false,
    description: 'Additional class names to be added to the tab item',
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
