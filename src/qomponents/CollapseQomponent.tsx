/**
 * CollapseQomponent Component
 *
 * A documentation component that provides comprehensive information about the Collapse
 * Qomponent. This component documents collapsible content functionality, including
 * expand/collapse states, transition animations, trigger configurations, and
 * styling options for implementing collapsible content sections.
 */

import React from 'react';
import { ComponentPropsDisplay } from './components';

const collapseProps = [
  {
    name: 'isVisible',
    type: 'boolean',
    required: true,
    description: 'Indicates if the collapse is visible.',
  },
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'The children of the collapse.',
  },
];

const CollapseQomponent: React.FC = () => <ComponentPropsDisplay title="Collapse Props" props={collapseProps} />;

export default CollapseQomponent;
