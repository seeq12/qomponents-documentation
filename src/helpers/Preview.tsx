import React from 'react';

interface PreviewProps {
  embedKey: string;
  title?: string;
}

const Preview: React.FC<PreviewProps> = ({ embedKey, title = 'CodeSandbox Preview' }) => {
  return (
    <iframe
      src={`https://codesandbox.io/embed/${embedKey}?view=preview&theme=light&hidenavigation=1&hidedevtools=1&fontsize=12&module=%2Fsrc%2FApp.tsx`}
      style={{
        width: '100%',
        height: '500px',
        border: '1px solid #eee',
        borderRadius: '16px',
        overflow: 'hidden',
      }}
      id="codesandbox-iframe"
      title={title}
    />
  );
};

export default Preview;
