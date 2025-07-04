import React from 'react';
import { Icon, Select } from '@seeqdev/qomponents';

const variants = [
  {
    label: 'theme',
    value: 'theme' as const,
  },
  {
    label: 'text',
    value: 'text' as const,
  },
  {
    label: 'white',
    value: 'white' as const,
  },
  {
    label: 'dark-gray',
    value: 'dark-gray' as const,
  },
  {
    label: 'darkish-gray',
    value: 'darkish-gray' as const,
  },
  {
    label: 'gray',
    value: 'gray' as const,
  },
  {
    label: 'success',
    value: 'success' as const,
  },
  {
    label: 'info',
    value: 'info' as const,
  },
  {
    label: 'warning',
    value: 'warning' as const,
  },
  {
    label: 'danger',
    value: 'danger' as const,
  },
];

const IconQomponent: React.FC = () => {
  const [currentType, setCurrentType] = React.useState(variants[0].value);

  return (
    <div className="w-96">
      <Icon type={currentType} icon="fc-circle_info" extraClassNames="w-80 mb-2" />
      <Select
        onChange={(value) => setCurrentType(value.value)}
        options={variants}
        small={true}
        extraClassNames="w-32 mt-4"
      />
    </div>
  );
};

export default IconQomponent;
