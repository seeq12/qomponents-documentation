/**
 * ToolbarButtonQomponent Component
 *
 * A documentation component that provides detailed specifications for the ToolbarButton
 * Qomponent. This component documents toolbar button functionality, including
 * styling variants, icon configurations, sizing options, and behavioral
 * properties for implementing buttons specifically designed for toolbar interfaces.
 */

import React from 'react';
import { ComponentPropsDisplay } from './components';
import { toolbarbuttonProps } from '../generated/ToolbarButtonProps';

const ToolbarButtonQomponentDocs: React.FC = () => {
  return <ComponentPropsDisplay title="ToolbarButton Props" props={toolbarbuttonProps} />;
};

export default ToolbarButtonQomponentDocs;
