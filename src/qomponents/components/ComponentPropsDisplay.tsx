import React from 'react';

/**
 * ComponentPropsDisplay Component
 *
 * A reusable component for displaying component properties in a consistent format.
 * This component renders a list of props with their types, required status, and
 * descriptions in a structured layout suitable for documentation purposes.
 */

interface PropDefinition {
  /**
   * The name of the property
   */
  name: string;

  /**
   * The TypeScript type of the property
   */
  type: string;

  /**
   * Whether the property is required
   */
  required: boolean;

  /**
   * Description of what the property does
   */
  description: string;
}

interface ComponentPropsDisplayProps {
  /**
   * The title to display above the props list
   */
  title: string;

  /**
   * Array of property definitions to display
   */
  props: PropDefinition[];
}

/**
 * ComponentPropsDisplay component that renders component properties documentation.
 *
 * This component creates a structured display of component props with consistent
 * styling, including property names, types, required indicators, and descriptions.
 */
const ComponentPropsDisplay: React.FC<ComponentPropsDisplayProps> = ({ title, props }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-col gap-4">
        {props.map(({ name, type, required, description }) => (
          <div key={name} className="rounded border border-gray-200 bg-white p-4">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="font-mono font-semibold text-blue-700 text-base">{name}</span>
              <span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-700">{type}</span>
              {required && <span className="text-xs text-red-600 font-semibold ml-2">required</span>}
            </div>
            <div className="text-gray-700 text-sm">{description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentPropsDisplay;
