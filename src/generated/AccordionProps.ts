// TypeScript type definitions for Accordion props
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
  AccordionItem: {
    name: 'AccordionItem',
    description: 'Interface for AccordionItem',
    properties: [
      {
        name: 'value',
        type: 'string',
        required: true,
        description: ' Unique identifier for the accordion item. This value is used to determine which item is currently expanded and is passed to the `onItemSelect` callback when the item is clicked. ',
      },
      {
        name: 'trigger',
        type: 'React.ReactNode',
        required: true,
        description: ' The content displayed in the clickable header/trigger area of the accordion item. This is what users click to expand or collapse the item. Can be any React element (text, icons, buttons, etc.). ',
      },
      {
        name: 'content',
        type: 'React.ReactNode',
        required: true,
        description: ' The content displayed when the accordion item is expanded. This is the collapsible content area that shows/hides when the trigger is clicked. Can contain any React elements including forms, lists, text, or other components. ',
      },
      {
        name: 'itemTestId',
        type: 'string',
        required: false,
        description: ' Test ID attribute for this specific accordion item. Used for automated testing to uniquely identify and interact with this item. Applied to the item\'s container element. ',
      },
      {
        name: 'id',
        type: 'string',
        required: false,
        description: ' HTML ID attribute for the accordion item\'s container element. Useful for accessibility, linking, or custom styling via CSS selectors. Should be unique across the entire page. ',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: ' When true, disables this specific accordion item, preventing user interaction. The item will appear visually disabled and clicking on it will have no effect. This overrides the parent accordion\'s disabled state for this individual item. ',
      },
      {
        name: 'contentClassNames',
        type: 'string',
        required: false,
        description: ' Additional CSS classes to apply specifically to this item\'s content area. Use this to customize the styling of the expandable content section. Does not affect the trigger/header styling. ',
      }
    ],
  }
};

const accordionProps: PropDefinition[] = [
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply to the accordion container. Use this to customize the styling of the entire accordion component. ',
  },
  {
    name: 'defaultValue',
    type: 'string',
    required: false,
    description: ' The value of the accordion item that should be expanded by default when the component first renders. Only used when the accordion is in uncontrolled mode (when you don\'t manage the state externally). Should match the `value` of one of the items in `accordionItems`. ',
  },
  {
    name: 'value',
    type: 'string',
    required: true,
    description: ' The value of the currently selected/expanded accordion item. This should match the `value` property of one of the items in `accordionItems`. Use this when you want to control which item is expanded from a parent component. ',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: ' When true, disables the entire accordion component, preventing any user interaction. Individual items can still be disabled independently using their own `disabled` property. ',
  },
  {
    name: 'accordionItems',
    type: 'AccordionItem[]',
    required: true,
    description: ' Array of accordion items to render. Each item represents a collapsible section with a clickable header (trigger) and expandable content area. ',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: ' Test ID attribute for the accordion container element. Used for automated testing and element selection in test suites. ',
  },
  {
    name: 'onItemSelect',
    type: '(key: string) => void',
    required: true,
    description: ' Callback function triggered when a user clicks on an accordion item header. Receives the `value` of the selected item as a parameter. Use this to handle accordion state changes and update the `value` prop accordingly. ',
  },
];

export { typeDefinitions, accordionProps };