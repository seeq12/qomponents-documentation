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

const ModalQomponent = () => {
  return (
    <div className="space-y-6">
      {/* Type Definitions */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Type Definitions</h3>
        <div className="flex flex-col gap-3">
          {typeDefinitions.map((type) => (
            <div key={type.name} className="rounded border border-blue-200 bg-blue-50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono font-semibold text-blue-800 text-base">{type.name}</span>
                <span className="text-xs text-blue-600">type</span>
              </div>
              <div className="font-mono text-sm text-blue-700 mb-2 bg-white p-2 rounded">{type.definition}</div>
              <div className="text-blue-700 text-sm">{type.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Props */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Modal Props</h3>
        <div className="flex flex-col gap-4">
          {modalProps.map((prop) => (
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
    </div>
  );
};

export default ModalQomponent;
