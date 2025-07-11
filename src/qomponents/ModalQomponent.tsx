/**
 * ModalQomponent Component
 *
 * A documentation component that provides comprehensive information about the Modal
 * Qomponent. This component documents modal dialog functionality, including sizing
 * options, backdrop behaviors, header/footer configurations, animation effects,
 * and accessibility features for implementing modal overlays and dialogs.
 */

import React from 'react';
import { ComponentPropsDisplay, ComponentSubPropsDisplay } from './components';

const modalProps = [
  {
    name: 'title',
    type: 'string',
    required: true,
    description: 'Main title text displayed in the modal header',
  },
  {
    name: 'children',
    type: 'React.ReactElement',
    required: true,
    description: 'Main content of the modal body',
  },
  {
    name: 'open',
    type: 'boolean',
    required: true,
    description: 'Whether the modal is visible/open',
  },
  {
    name: 'titleSuffixLabel',
    type: 'string',
    required: false,
    description: 'Additional text to append after the title',
  },
  {
    name: 'subtitle',
    type: 'string',
    required: false,
    description: 'Secondary text displayed below the title',
  },
  {
    name: 'titleIcon',
    type: 'string | React.ReactElement',
    required: false,
    description: 'Icon to display next to the title (icon class name or React element)',
  },
  {
    name: 'titleIconPosition',
    type: 'TitleIconPosition',
    required: false,
    description: 'Position of the title icon relative to the title text',
  },
  {
    name: 'modalFooter',
    type: 'React.ReactElement',
    required: false,
    description: 'Custom footer content (overrides default buttons)',
  },
  {
    name: 'onClose',
    type: '() => any',
    required: false,
    description: 'Function to call when clicking the close button (takes no parameters)',
  },
  {
    name: 'customButton',
    type: 'boolean',
    required: false,
    description: 'Whether to show a custom button in the footer',
  },
  {
    name: 'customButtonLabel',
    type: 'string',
    required: false,
    description: 'Text label for the custom button',
  },
  {
    name: 'onClickCustomButton',
    type: '() => any',
    required: false,
    description: 'Callback when the custom button is clicked',
  },
  {
    name: 'submitButtonLabel',
    type: 'string',
    required: false,
    description: 'Text label for the submit button (defaults to "OK")',
  },
  {
    name: 'cancelButtonLabel',
    type: 'string',
    required: false,
    description: 'Text label for the cancel button (defaults to "Cancel")',
  },
  {
    name: 'disableSubmitButton',
    type: 'boolean',
    required: false,
    description: 'Whether the submit button should be disabled',
  },
  {
    name: 'stopPropagationSubmitButton',
    type: 'boolean',
    required: false,
    description: 'Whether to stop event propagation on submit button click',
  },
  {
    name: 'onSubmit',
    type: '(event: React.MouseEvent) => any',
    required: false,
    description: 'Callback when the submit button is clicked',
  },
  {
    name: 'isTitleEditable',
    type: 'boolean',
    required: false,
    description: 'Whether the title can be edited inline',
  },
  {
    name: 'onTitleChanged',
    type: 'React.ChangeEventHandler<FormControlElement>',
    required: false,
    description: 'Callback when the editable title changes',
  },
  {
    name: 'inputExtraClassNames',
    type: 'string',
    required: false,
    description: 'Additional CSS classes for the title input field',
  },
  {
    name: 'hideCloseIcon',
    type: 'boolean',
    required: false,
    description: 'Whether to hide the X close icon in the header',
  },
  {
    name: 'size',
    type: 'ModalSize',
    required: false,
    description: 'Size variant of the modal',
  },
  {
    name: 'hideFooterButtons',
    type: 'boolean',
    required: false,
    description: 'Whether to hide all default footer buttons',
  },
  {
    name: 'hideSubmitButton',
    type: 'boolean',
    required: false,
    description: 'Whether to hide only the submit button',
  },
  {
    name: 'hideCancelButton',
    type: 'boolean',
    required: false,
    description: 'Whether to hide only the cancel button',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: 'Test ID for the modal container',
  },
  {
    name: 'dialogClassName',
    type: 'string',
    required: false,
    description: 'Additional CSS classes for the modal dialog',
  },
  {
    name: 'titlePlaceholder',
    type: 'string',
    required: false,
    description: 'Placeholder text for editable title input',
  },
  {
    name: 'titleRequired',
    type: 'boolean',
    required: false,
    description: 'Whether the title is required when editable',
  },
  {
    name: 'titleError',
    type: 'string',
    required: false,
    description: 'Error message to display for invalid title',
  },
  {
    name: 'submitButtonTooltip',
    type: 'string',
    required: false,
    description: 'Tooltip text for the submit button',
  },
  {
    name: 'cancelButtonTooltip',
    type: 'string',
    required: false,
    description: 'Tooltip text for the cancel button',
  },
  {
    name: 'disableCustomButton',
    type: 'boolean',
    required: false,
    description: 'Whether the custom button should be disabled',
  },
  {
    name: 'customHeader',
    type: 'React.ReactElement',
    required: false,
    description: 'Custom header content (overrides default header)',
  },
  {
    name: 'middleFooterSection',
    type: 'React.ReactElement',
    required: false,
    description: 'Content to display in the middle of the footer',
  },
  {
    name: 'customButtonVariant',
    type: 'ButtonVariant',
    required: false,
    description: 'Style variant for the custom button',
  },
  {
    name: 'keepFocusInsideModal',
    type: 'boolean',
    required: false,
    description:
      'Set false if you have elements outside modal content with which you need to interact (example: tooltip with inputs)',
  },
  {
    name: 'submitButtonVariant',
    type: 'ButtonVariant',
    required: false,
    description: 'Sets the variant of the submit button',
  },
  {
    name: 'onPointerDownOutside',
    type: '(e: Event) => void',
    required: false,
    description: 'Event handler for when the user clicks outside the modal',
  },
  {
    name: 'onInteractOutside',
    type: '(e: Event) => void',
    required: false,
    description: 'Event handler for when the user interacts outside the modal',
  },
];

const typeDefinitions = [
  {
    name: 'ModalSize',
    definition: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'",
    description: 'Size variants for the modal dialog',
  },
  {
    name: 'TitleIconPosition',
    definition: "'left' | 'right'",
    description: 'Position of the title icon relative to the title text',
  },
  {
    name: 'ButtonVariant',
    definition: 'string',
    description: 'Button style variant (see Button component documentation)',
  },
  {
    name: 'FormControlElement',
    definition: 'HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement',
    description: 'HTML form control elements for title editing',
  },
];

// Convert type definitions to the format expected by ComponentSubPropsDisplay
const typeDefinitionsForDisplay = typeDefinitions.map((type) => ({
  name: type.name,
  type: type.definition,
  required: false,
  description: type.description,
}));

const ModalQomponent: React.FC = () => {
  return (
    <div className="space-y-6">
      <ComponentSubPropsDisplay
        title="Type Definitions"
        typeName="Modal Types"
        typeDescription="Type definitions used by the Modal component"
        subProps={typeDefinitionsForDisplay}
        typeLabel="types"
      />

      <ComponentPropsDisplay title="Modal Props" props={modalProps} />
    </div>
  );
};

export default ModalQomponent;
