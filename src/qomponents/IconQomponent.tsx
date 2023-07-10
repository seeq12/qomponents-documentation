import React from 'react';
import { Icon, Select } from '@seeqdev/qomponents/dist';

const variants = [
  {
    label: 'theme',
    value: 'theme',
  },
  {
    label: 'text',
    value: 'text',
  },
  {
    label: 'white',
    value: 'white',
  },
  {
    label: 'dark-gray',
    value: 'dark-gray',
  },
  {
    label: 'darkish-gray',
    value: 'darkish-gray',
  },
  {
    label: 'gray',
    value: 'gray',
  },
  {
    label: 'success',
    value: 'success',
  },
  {
    label: 'info',
    value: 'info',
  },
  {
    label: 'warning',
    value: 'warning',
  },
  {
    label: 'danger',
    value: 'danger',
  },
];

function IconQomponent() {
  const [currentType, setCurrentType] = React.useState(variants[0].value);

  return (
    <div className="flex flex-row border-solid border-gray-300 border p-6 rounded-md w-96">
      <div className="flex flex-col text-left">
        <div className="mb-6">
          <span className="text-lg font-semibold ">Icon</span>
        </div>
        <Icon type={currentType as any} icon="fc-circle_info" extraClassNames="w-80 mb-2" />
        <Select
          onChange={(value) => setCurrentType(value.value)}
          options={variants}
          small={true}
          extraClassNames="w-32"
        />
      </div>
    </div>
  );
}

export default IconQomponent;
