import React from 'react';

/**
 * CodeSnippet Component
 *
 * A reusable component that displays formatted code snippets with syntax highlighting
 * and a convenient copy-to-clipboard functionality. This component is designed to
 * showcase code examples in documentation, making it easy for users to view and
 * copy code snippets for their own use.
 *
 * @example
 * ```tsx
 * // Basic usage with TypeScript/JSX code
 * <CodeSnippet code="const greeting = 'Hello, World!';" />
 *
 * // With specific language for syntax highlighting
 * <CodeSnippet
 *   code="console.log('Hello, World!');"
 *   language="javascript"
 * />
 *
 * // Multi-line code example
 * <CodeSnippet
 *   code={`
 *     function greet(name: string): string {
 *       return \`Hello, \${name}!\`;
 *     }
 *   `}
 *   language="typescript"
 * />
 * ```
 */

interface CodeSnippetProps {
  /**
   * The code content to display in the snippet.
   * Can be single-line or multi-line code strings.
   * @example "const message = 'Hello, World!';"
   */
  code: string;

  /**
   * The programming language for syntax highlighting.
   * Used to apply appropriate CSS classes for syntax highlighting libraries.
   * @default "tsx"
   * @example "javascript" | "typescript" | "css" | "html"
   */
  language?: string;
}

/**
 * CodeSnippet component that renders formatted code with copy functionality.
 *
 * This component creates a styled code block with syntax highlighting support
 * and includes a copy button for easy code copying. The component handles
 * clipboard operations and provides visual feedback through hover states.
 */
const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language = 'tsx' }) => {
  return (
    <div className="relative text-xs">
      <pre className="bg-gray-100 border border-gray-300 rounded-lg p-4 overflow-x-auto">
        <code className={`language-${language} text-sm`}>{code}</code>
      </pre>
      <button
        className="absolute top-2 right-2 bg-white border border-gray-300 rounded px-2 py-1 text-xs hover:bg-gray-50"
        onClick={() => navigator.clipboard.writeText(code)}>
        Copy
      </button>
    </div>
  );
};

export default CodeSnippet;
