// TypeScript type definitions for Tabs props
interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

const tabsProps: PropDefinition[] = [
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply to the tabs container. Use this to customize the overall appearance and layout of the tab component. ',
  },
  {
    name: 'defaultActiveTab',
    type: 'string',
    required: false,
    description: ' ID of the tab that should be active when the component first loads. Only used for uncontrolled tabs where the component manages its own active state. Should match the `id` of one of the tabs in the `tabs` array. ',
  },
  {
    name: 'activeTab',
    type: 'string',
    required: false,
    description: ' ID of the currently active tab for controlled component behavior. When provided, the component becomes controlled and you must handle tab changes via the `onTabSelect` callback to update this value. ',
  },
  {
    name: 'transition',
    type: 'boolean',
    required: false,
    description: ' When true, enables smooth transitions when switching between tabs. Provides visual animation effects during tab content changes. ',
  },
  {
    name: 'onTabSelect',
    type: '(tabId: string) => void',
    required: false,
    description: ' Callback function triggered when a user selects a different tab. Receives the ID of the newly selected tab. Use this to handle tab changes and update the `activeTab` prop in controlled mode. ',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: ' HTML ID attribute for the tabs container element. Should be unique across the page for proper HTML semantics and accessibility. ',
  },
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: ' Test ID attribute for the tabs container used in automated testing. Applied to the main tabs component for test targeting and interaction. ',
  },
  {
    name: 'stretchTabs',
    type: 'boolean',
    required: false,
    description: ' When true, makes the tab headers stretch to fill the full width of the container. Each tab header will take equal width. When false, tabs size based on their content. ',
  },
  {
    name: 'tabs',
    type: '{ label: string; id: string; content: React.JSX.Element; icon?: string; testId?: string; tabExtraClassNames?: string; disabled?: boolean; tabContentExtraClassNames?: string; }[]',
    required: true,
    description: ' Array of tab configurations that define the available tabs and their content. Each tab represents a separate page or section within the tabbed interface. ',
  },
];

export { tabsProps };