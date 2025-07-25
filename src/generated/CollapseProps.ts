// TypeScript type definitions for Collapse props
interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

const collapseProps: PropDefinition[] = [
  {
    name: 'isVisible',
    type: 'boolean',
    required: true,
    description: ' Controls whether the collapse content is visible and expanded. When true, the content smoothly expands to full height. When false, the content smoothly collapses to zero height. Use this to control the collapse state from parent components. ',
  },
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    description: ' Content to display inside the collapsible area. Can be any React elements that you want to show/hide with animation. The content will be measured and animated when expanding or collapsing. ',
  },
];

export { collapseProps };