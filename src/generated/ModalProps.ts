// TypeScript type definitions for Modal props
interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

interface TypeDefinition {
  name: string;
  description: string;
  properties: PropDefinition[];
}

const typeDefinitions: { [key: string]: TypeDefinition } = {
  ModalSize: {
    name: 'ModalSize',
    description: 'Type alias for ModalSize',
    properties: [
      {
        name: 'ModalSize',
        type: '\'xs\' | \'sm\' | \'md\' | \'lg\' | \'xl\' | \'2xl\' | \'3xl\' | \'4xl\' | \'5xl\' | \'6xl\'',
        required: false,
        description: 'Type definition: \'xs\' | \'sm\' | \'md\' | \'lg\' | \'xl\' | \'2xl\' | \'3xl\' | \'4xl\' | \'5xl\' | \'6xl\'',
      }
    ],
  },
  TitleIconPosition: {
    name: 'TitleIconPosition',
    description: 'Type alias for TitleIconPosition',
    properties: [
      {
        name: 'TitleIconPosition',
        type: '\'left\' | \'right\'',
        required: false,
        description: 'Type definition: \'left\' | \'right\'',
      }
    ],
  }
};

const modalProps: PropDefinition[] = [
  {
    name: 'title',
    type: 'string',
    required: true,
    description: ' Main title text displayed prominently in the modal header. This is the primary heading that identifies the purpose or content of the modal. ',
  },
  {
    name: 'titleSuffixLabel',
    type: 'string',
    required: false,
    description: ' Additional text to append after the main title. Useful for adding context, version numbers, or secondary information to the title. ',
  },
  {
    name: 'subtitle',
    type: 'string',
    required: false,
    description: ' Secondary text displayed below the main title in the header. Use this for additional context, descriptions, or instructions for the modal content. ',
  },
  {
    name: 'titleIcon',
    type: 'string | React.ReactElement',
    required: false,
    description: ' Icon to display next to the title in the header. Can be an icon class name (string) for font icons or a React element for custom icons. Helps provide visual context for the modal\'s purpose. ',
  },
  {
    name: 'titleIconPosition',
    type: 'TitleIconPosition',
    required: false,
    description: ' Position of the title icon relative to the title text: - `left`: Icon appears before the title text - `right`: Icon appears after the title text @default \'left\' ',
  },
  {
    name: 'children',
    type: 'React.ReactElement',
    required: true,
    description: ' Main content of the modal body. This is where you place the primary content, forms, information, or interactive elements. Must be a single React element (wrap multiple elements in a container if needed). ',
  },
  {
    name: 'modalFooter',
    type: 'React.ReactElement',
    required: false,
    description: ' Custom footer content that completely replaces the default button footer. When provided, all default buttons (submit, cancel, custom) are hidden. Use this when you need complete control over the footer layout and actions. ',
  },
  {
    name: 'open',
    type: 'boolean',
    required: true,
    description: ' Controls whether the modal is currently visible and open. When true, the modal is displayed with overlay. When false, the modal is hidden. Use this prop to control modal visibility from parent components. ',
  },
  {
    name: 'onClose',
    type: '() => any',
    required: false,
    description: ' Callback function triggered when the user attempts to close the modal. Called when clicking the X button, cancel button, or clicking outside the modal. Use this to handle modal closure logic and update the `open` state. ',
  },
  {
    name: 'customButton',
    type: 'boolean',
    required: false,
    description: ' When true, displays an additional custom button in the footer alongside default buttons. The custom button appears before the submit and cancel buttons. Configure the button\'s appearance and behavior with related custom button props. ',
  },
  {
    name: 'customButtonLabel',
    type: 'string',
    required: false,
    description: ' Text label for the custom button when `customButton` is true. This text will be displayed on the button to indicate its purpose or action. ',
  },
  {
    name: 'onClickCustomButton',
    type: '() => any',
    required: false,
    description: ' Callback function triggered when the custom button is clicked. Use this to define the action that should occur when users click the custom button. ',
  },
  {
    name: 'submitButtonLabel',
    type: 'string',
    required: false,
    description: ' Text label for the primary submit/confirmation button. This button typically confirms the modal action or submits form data. @default "OK" ',
  },
  {
    name: 'cancelButtonLabel',
    type: 'string',
    required: false,
    description: ' Text label for the cancel/dismiss button. This button typically closes the modal without saving changes or performing actions. @default "Cancel" ',
  },
  {
    name: 'disableSubmitButton',
    type: 'boolean',
    required: false,
    description: ' When true, disables the submit button preventing user interaction. Useful when form validation fails or when an operation is in progress. The button will appear visually disabled and won\'t respond to clicks. ',
  },
  {
    name: 'stopPropagationSubmitButton',
    type: 'boolean',
    required: false,
    description: ' Controls whether the submit button click event should stop propagation. When true, prevents the click event from bubbling up to parent elements. @default true ',
  },
  {
    name: 'onSubmit',
    type: '(event: React.MouseEvent) => any',
    required: false,
    description: ' Callback function triggered when the submit button is clicked. Receives the click event as a parameter for additional event handling. Use this to handle form submission, data processing, or confirmation actions. ',
  },
  {
    name: 'isTitleEditable',
    type: 'boolean',
    required: false,
    description: ' When true, allows the title text to be edited inline by clicking on it. The title becomes an input field that users can modify directly in the modal header. Useful for renaming operations or title customization workflows. ',
  },
  {
    name: 'onTitleChanged',
    type: 'React.ChangeEventHandler<FormControlElement>',
    required: false,
    description: ' Callback function triggered when the editable title text changes. Only relevant when `isTitleEditable` is true. Receives the change event which contains the new title value. Use this to update your title state. ',
  },
  {
    name: 'inputExtraClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply to the title input field. Only used when `isTitleEditable` is true. Use this to customize the appearance of the editable title input beyond default styling. ',
  },
  {
    name: 'hideCloseIcon',
    type: 'boolean',
    required: false,
    description: ' When true, hides the X close icon button in the modal header. Users will only be able to close the modal using footer buttons or by clicking outside. Useful when you want to force users to make an explicit choice via footer buttons. ',
  },
  {
    name: 'size',
    type: 'ModalSize',
    required: false,
    description: ' Size variant that controls the modal\'s width and maximum dimensions: - `xs`: Extra small modal (280px max width) - `sm`: Small modal (384px max width) - `md`: Medium modal (448px max width) - `lg`: Large modal (512px max width) - `xl`: Extra large modal (576px max width) - `2xl` through `6xl`: Progressively larger sizes up to full screen ',
  },
  {
    name: 'hideFooterButtons',
    type: 'boolean',
    required: false,
    description: ' When true, completely hides all default footer buttons (submit, cancel, custom). The modal will only have header and body content. Useful when you provide custom actions within the modal body or use a custom footer. ',
  },
  {
    name: 'hideSubmitButton',
    type: 'boolean',
    required: false,
    description: ' When true, hides only the submit button while keeping other footer buttons visible. Useful for information-only modals that don\'t require a confirmation action. ',
  },
  {
    name: 'hideCancelButton',
    type: 'boolean',
    required: false,
    description: ' When true, hides only the cancel button while keeping other footer buttons visible. Useful for critical operations where cancellation should not be easily accessible. ',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: ' Test ID attribute for the modal container element. Used for automated testing to identify and interact with the modal. Applied to the modal\'s root element for test targeting. ',
  },
  {
    name: 'dialogClassName',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply to the modal dialog container. Use this to customize the modal\'s positioning, sizing, or appearance beyond the built-in size variants and default styling. ',
  },
  {
    name: 'titlePlaceholder',
    type: 'string',
    required: false,
    description: ' Placeholder text displayed in the title input when `isTitleEditable` is true. Shows helpful text when the title field is empty, guiding users on what to enter. ',
  },
  {
    name: 'titleRequired',
    type: 'boolean',
    required: false,
    description: ' When true, makes the title field required when `isTitleEditable` is true. Prevents submission or validation if the title is empty. Usually combined with validation feedback and error handling. ',
  },
  {
    name: 'titleError',
    type: 'string',
    required: false,
    description: ' Error message to display when the editable title has validation issues. Only shown when `isTitleEditable` is true and there\'s a title validation error. Provides user feedback about what needs to be corrected. ',
  },
  {
    name: 'submitButtonTooltip',
    type: 'string',
    required: false,
    description: ' Tooltip text to display when hovering over the submit button. Provides additional context or instructions about what the submit action will do. Helpful for clarifying the button\'s purpose in complex workflows. ',
  },
  {
    name: 'cancelButtonTooltip',
    type: 'string',
    required: false,
    description: ' Tooltip text to display when hovering over the cancel button. Can provide information about what happens when canceling or any data loss warnings. ',
  },
  {
    name: 'disableCustomButton',
    type: 'boolean',
    required: false,
    description: ' When true, disables the custom button preventing user interaction. Only relevant when `customButton` is true. The button will appear visually disabled and won\'t respond to clicks. ',
  },
  {
    name: 'customHeader',
    type: 'React.ReactElement',
    required: false,
    description: ' Custom header content that completely replaces the default modal header. When provided, the default title, subtitle, and close button are not rendered. Use this when you need complete control over the header layout and content. ',
  },
  {
    name: 'middleFooterSection',
    type: 'React.ReactElement',
    required: false,
    description: ' Content to display in the center area of the footer between buttons. Useful for adding status messages, progress indicators, or additional information that should be visible alongside the action buttons. ',
  },
  {
    name: 'customButtonVariant',
    type: 'ButtonVariant',
    required: false,
    description: ' Visual style variant for the custom button when `customButton` is true. Determines the button\'s appearance and color scheme. Uses the same variants as the standard Button component (outline, theme, danger, etc.). ',
  },
  {
    name: 'keepFocusInsideModal',
    type: 'boolean',
    required: false,
    description: ' Controls whether focus should be trapped within the modal when open. When true (default), focus cycles through modal elements only. Set to false if you need to interact with elements outside the modal (like tooltips with inputs). @default true ',
  },
  {
    name: 'submitButtonVariant',
    type: 'ButtonVariant',
    required: false,
    description: ' Visual style variant for the submit button. Determines the button\'s appearance and color scheme. Use \'theme\' for primary actions, \'danger\' for destructive actions, or other variants as appropriate. ',
  },
  {
    name: 'onPointerDownOutside',
    type: '(e: Event) => void',
    required: false,
    description: ' Callback function triggered when the user clicks/taps outside the modal dialog. Receives the pointer event. Use this to customize outside-click behavior, such as preventing closure in certain conditions or showing warnings. ',
  },
  {
    name: 'onInteractOutside',
    type: '(e: Event) => void',
    required: false,
    description: ' Callback function triggered when the user interacts outside the modal. This includes clicks, taps, and other interactions outside the modal area. More general than `onPointerDownOutside` and covers additional interaction types. ',
  },
];

export { typeDefinitions, modalProps };