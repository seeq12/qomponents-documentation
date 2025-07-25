import React, { ReactNode } from 'react';
import Preview from './Preview';

/**
 * QomponentWrapper Component
 *
 * A wrapper component that provides a consistent layout structure for displaying
 * Qomponents in the documentation. It combines component previews, live demos,
 * and additional content in a unified card-like interface with proper spacing
 * and styling for documentation purposes.
 */

interface QomponentWrapperProps {
  /**
   * The CodeSandbox embed key/ID for displaying live interactive demos.
   * When provided, renders a Preview component with the embedded CodeSandbox.
   * @example "abc123def456"
   */
  embedKey?: string;

  /**
   * React node to be rendered within the wrapper.
   * Can be used for additional examples, descriptions, or custom content.
   */
  component: ReactNode;

  /**
   * The display label/title for the wrapped component section.
   * This appears as the main heading for the component documentation block.
   */
  label: string;
}

/**
 * QomponentWrapper component that provides a consistent layout for documentation.
 *
 * This component creates a structured layout with a header, content area, and
 * optional embedded CodeSandbox previews. It's designed to maintain visual
 * consistency across all Qomponent documentation sections.
 */
const QomponentWrapper: React.FC<QomponentWrapperProps> = ({ embedKey, component, label }) => {
  return (
    <div className="rounded-xl h-full w-full grid grid-rows-[auto_auto_40px]">
      <div className="w-full overflow-auto bg-gray-50 border-gray-100 rounded-2xl p-4 text-sm">
        <h2 className="text-xl font-semibold mt-2">{label}</h2>
        {embedKey ? (
          <div className="flex flex-col items-center justify-center tw-overflow-x-auto mt-4 mb-6">
            <Preview embedKey={embedKey} />
          </div>
        ) : null}
        {component}
      </div>
    </div>
  );
};

export default QomponentWrapper;
