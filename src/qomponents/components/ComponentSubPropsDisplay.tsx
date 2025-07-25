import React from 'react';

/**
 * ComponentSubPropsDisplay Component
 *
 * A reusable component for displaying sub-component or interface properties
 * in a highlighted format. This component is designed to show type definitions,
 * interfaces, or nested object properties with a distinctive blue styling
 * to differentiate them from main component props.
 */

interface SubPropDefinition {
  /**
   * The name of the sub-property
   */
  name: string;

  /**
   * The TypeScript type of the sub-property
   */
  type: string;

  /**
   * Whether the sub-property is required
   */
  required: boolean;

  /**
   * Description of what the sub-property does
   */
  description: string;
}

interface ComponentSubPropsDisplayProps {
  /**
   * The title to display above the sub-props list
   */
  title: string;

  /**
   * The name of the interface or type being documented
   */
  typeName: string;

  /**
   * Description of the interface or type
   */
  typeDescription: string;

  /**
   * Array of sub-property definitions to display
   */
  subProps: SubPropDefinition[];

  /**
   * Optional label for the type (e.g., "interface", "type")
   * @default "interface"
   */
  typeLabel?: string;
}

/**
 * ComponentSubPropsDisplay component that renders sub-component properties documentation.
 *
 * This component creates a highlighted display for interfaces, types, or nested
 * object properties with a blue color scheme to distinguish them from main props.
 */
const ComponentSubPropsDisplay: React.FC<ComponentSubPropsDisplayProps> = ({
  title,
  typeName,
  typeDescription,
  subProps,
  typeLabel = 'interface',
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="rounded border border-blue-200 bg-blue-50 p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono font-semibold text-blue-800 text-base">{typeName}</span>
          <span className="text-xs text-blue-600">{typeLabel}</span>
        </div>
        <div className="text-blue-700 text-sm mb-3">{typeDescription}</div>
        <div className="flex flex-col gap-2">
          {subProps.map(({ name, type, required, description }) => (
            <div key={name} className="bg-white p-3 rounded">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="font-mono font-semibold text-blue-700 text-sm">{name}</span>
                <span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-700">{type}</span>
                {required && <span className="text-xs text-red-600 font-semibold ml-2">required</span>}
              </div>
              <div className="text-gray-700 text-xs">{description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentSubPropsDisplay;
