import { ButtonGroup } from '@seeqdev/qomponents';
import { ReactNode, useState } from 'react';
import Preview from './Preview';

interface QomponentWrapperProps {
  embedKey?: string;
  component?: ReactNode;
  label: string;
}

const QomponentWrapper = ({ embedKey, component, label }: QomponentWrapperProps) => {
  const [view, setView] = useState<'preview' | 'editor'>('preview');

  return (
    <div className="rounded-xl h-full w-full grid grid-rows-[auto_auto_40px]">
      <div className="w-full overflow-auto bg-gray-50 border-gray-100 rounded-2xl p-4">
        <h2 className="text-xl font-semibold mt-2 mb-4">{label}</h2>
        {component}
        {embedKey ? (
          <div className="w-full h-130 tw-overflow-hidden mt-4">
            <Preview embedKey={embedKey} view={view} />
          </div>
        ) : null}
        {embedKey ? (
          <div className="flex items-center">
            <ButtonGroup
              onChange={(value) => setView(value as 'preview' | 'editor')}
              extraClassNames="justify-end"
              buttons={[
                {
                  variant: 'button',
                  buttonProps: {
                    onClick: () => setView('preview'),
                    isActive: view === 'preview',
                    value: 'preview',
                    label: 'Preview',
                  },
                },
                {
                  variant: 'button',
                  buttonProps: {
                    label: 'Editor',
                    onClick: () => setView('editor'),
                    isActive: view === 'editor',
                    value: 'editor',
                    icon: 'fc-code',
                  },
                },
              ]}
            />
          </div>
        ) : undefined}
      </div>
    </div>
  );
};

export default QomponentWrapper;
