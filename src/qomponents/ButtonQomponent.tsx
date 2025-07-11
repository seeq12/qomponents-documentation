/**
 * ButtonQomponent Component
 *
 * A comprehensive documentation component that displays Button component specifications,
 * props, variants, and usage information. This component provides detailed documentation
 * for the Button Qomponent including all available properties, styling variants,
 * and behavioral configurations for developers to understand and implement buttons
 * effectively in their applications.
 */

import React from 'react';
import { ComponentPropsDisplay } from './components';

const buttonProps = [
  {
    name: 'onClick',
    type: '(e: React.MouseEvent) => void',
    required: false,
    description: 'Callback function called when the button is clicked. Receives the click event as a parameter.',
  },
  {
    name: 'label',
    type: 'string | JSX.Element | React.ReactNode',
    required: false,
    description: 'The content displayed inside the button. Can be a string, JSX element, or any React node.',
  },
  {
    name: 'variant',
    type: '"outline" | "theme" | "theme-light" | "warning" | "danger" | "no-border"',
    required: false,
    description: 'Visual style of the button. Choose from several predefined variants for different appearances.',
  },
  {
    name: 'type',
    type: '"button" | "reset" | "submit" | "link"',
    required: false,
    description: 'The native button type attribute. Controls button behavior in forms. Default is "button".',
  },
  {
    name: 'size',
    type: '"sm" | "lg"',
    required: false,
    description: 'Sets the size of the button. "sm" for small, "lg" for large, or leave unset for default size.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'If true, disables the button so it cannot be interacted with.',
  },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: 'Additional CSS class names to apply to the button for custom styling.',
  },
  {
    name: 'icon',
    type: 'string',
    required: false,
    description: 'Icon class to display before or after the button text (e.g., "fc-zoom").',
  },
  {
    name: 'iconStyle',
    type: 'IconType',
    required: false,
    description: 'Controls the color style of the icon. Options: "text", "white", "theme", or "color".',
  },
  {
    name: 'iconColor',
    type: 'string',
    required: false,
    description: 'Custom color for the icon. Required if iconStyle is set to "color".',
  },
  {
    name: 'iconPosition',
    type: '"left" | "right"',
    required: false,
    description: 'Position of the icon relative to the button text. Default is "left".',
  },
  {
    name: 'iconPrefix',
    type: 'string',
    required: false,
    description: 'Custom prefix for the icon class, used for icons outside the default set.',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: 'A unique identifier for the button element.',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: 'A string for the data-testid attribute, useful for selecting the button in tests.',
  },
  {
    name: 'stopPropagation',
    type: 'boolean',
    required: false,
    description: 'If false, click events will not call stopPropagation. Default is true.',
  },
  {
    name: 'tooltip',
    type: 'string',
    required: false,
    description: 'Text to display in a tooltip when hovering over the button.',
  },
  {
    name: 'isHtmlTooltip',
    type: 'boolean',
    required: false,
    description: 'If true, the tooltip text will be rendered as HTML for rich formatting.',
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
    name: 'preventBlur',
    type: 'boolean',
    required: false,
    description: 'If true, prevents the blur event from occurring on mouse down.',
  },
];

const ButtonQomponent: React.FC = () => {
  return (
    <div className="text-left">
      <ComponentPropsDisplay title="Button Props" props={buttonProps} />
    </div>
  );
};

export default ButtonQomponent;
