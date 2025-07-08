import { ReactNode } from 'react';
import Preview from './Preview';

interface QomponentWrapperProps {
  embedKey?: string;
  component?: ReactNode;
  label: string;
}

const QomponentWrapper = ({ embedKey, component, label }: QomponentWrapperProps) => {
  return (
    <div className="rounded-xl h-full w-full grid grid-rows-[auto_auto_40px]">
      <div className="w-full overflow-auto bg-gray-50 border-gray-100 rounded-2xl p-4 text-sm">
        <h2 className="text-xl font-semibold mt-2">{label}</h2>
        {component}
        {embedKey ? (
          <div className="w-full h-130 tw-overflow-hidden mt-4">
            <Preview embedKey={embedKey} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default QomponentWrapper;
