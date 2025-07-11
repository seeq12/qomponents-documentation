import React from 'react';

/**
 * Preview Component
 *
 * A reusable component that embeds CodeSandbox previews in an iframe.
 * This component is designed to display interactive code examples and demos
 * directly within the documentation, allowing users to see live examples
 * of Qomponents in action without leaving the page.
 *
 * @example
 * ```tsx
 * // Basic usage with CodeSandbox embed key
 * <Preview embedKey="abc123" />
 *
 * // With custom title for accessibility
 * <Preview
 *   embedKey="abc123"
 *   title="Button Component Demo"
 * />
 * ```
 */

interface PreviewProps {
  /**
   * The CodeSandbox embed key/ID for the project to display.
   * @example "abc123def456"
   */
  embedKey: string;

  /**
   * Custom title for the iframe, used for accessibility and screen readers.
   * Provides context about what the preview contains.
   * @default "CodeSandbox Preview"
   */
  title?: string;
}

/**
 * Preview component that renders a CodeSandbox embed iframe.
 *
 * This component creates a responsive iframe that displays CodeSandbox projects
 * in preview mode with optimized settings for documentation purposes.
 */
const Preview: React.FC<PreviewProps> = ({ embedKey, title = 'CodeSandbox Preview' }) => {
  return (
    <iframe
      src={`https://codesandbox.io/embed/${embedKey}?view=preview&theme=light&hidenavigation=1&hidedevtools=1&fontsize=12&module=%2Fsrc%2FApp.tsx`}
      className="w-[600px] h-[400px] rounded-2xl border border-gray-200 overflow-hidden"
      id="codesandbox-iframe"
      title={title}
    />
  );
};

export default Preview;
