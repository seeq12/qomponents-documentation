import React from 'react';
import { Button, Select } from '@seeqdev/qomponents';

const variants = [
  {
    label: 'theme',
    value: 'theme',
  },
  {
    label: 'outline',
    value: 'outline',
  },
  {
    label: 'theme-light',
    value: 'theme-light',
  },
  {
    label: 'warning',
    value: 'warning',
  },
  {
    label: 'danger',
    value: 'danger',
  },
  {
    label: 'no-border',
    value: 'no-border',
  },
];
function ButtonQomponent() {
  const [currentVariant, setCurrentVariant] = React.useState(variants[0].value);

  return (
    <div className="flex flex-row border-solid border-gray-300 border p-6 rounded-md w-96">
      <div className="flex flex-col text-left">
        <div className="mb-6">
          <span className="text-lg font-semibold">Button</span>
        </div>
        <Button variant={currentVariant as any} label={`Variant="${currentVariant}"`} extraClassNames="w-80 mb-2" />
        <div className="flex flex-col">
          <Select
            onChange={(value) => setCurrentVariant(value.value)}
            options={variants}
            small={true}
            extraClassNames="w-32"
          />
        </div>
      </div>
    </div>
  );
}

export default ButtonQomponent;
