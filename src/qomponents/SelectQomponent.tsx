import React from 'react';
import { Checkbox, Select, Tooltip } from '@seeqdev/qomponents/dist';

const options = [
  {
    label: 'Option A',
    value: 'theme',
    color: 'red',
  },
  {
    label: 'Option B',
    value: 'theme-light',
  },
  {
    label: 'Option C',
    value: 'warning',
  },
];

const optionsCustom = [
  {
    label: 'Option A - red',
    color: 'red',
    value: 'theme',
  },
  {
    label: 'Option B - blue',
    value: 'theme-light',
    color: 'blue',
  },
  {
    label: 'Option C - pink',
    value: 'warning',
    color: 'pink',
  },
];

function SelectQomponent() {
  const [isMulti, setIsMulti] = React.useState(false);
  const [isClearable, setIsClearable] = React.useState(false);
  const [isCustom, setIsCustom] = React.useState(false);

  const getOptionLabel = (option: { label: string; color: string }) => {
    return <div style={{ color: option.color }}>{option.label}</div>;
  };
  return (
    <div className="flex flex-row border-solid border-gray-300 border p-6 rounded-md w-96">
      <div className="flex flex-col text-left">
        <div className="mb-6">
          <span className="text-lg font-semibold ">Select</span>
        </div>
        <Select
          options={isCustom ? optionsCustom : options}
          isClearable={isClearable}
          isMulti={isMulti}
          getOptionLabel={isCustom ? getOptionLabel : undefined}
          onChange={() => {}}
          extraClassNames="w-80"
        />
        <div className="flex flex-row mt-2">
          <Checkbox checked={isMulti} label="multi" onChange={() => setIsMulti(!isMulti)} extraClassNames="mr-4" />
          <Checkbox
            checked={isClearable}
            label="clearable"
            onChange={() => setIsClearable(!isClearable)}
            extraClassNames="mr-4"
          />
          <Tooltip
            text={
              <div className="w-80">
                Use the{' '}
                <ul>
                  <li>
                    <b>getOptionLabel</b>
                  </li>{' '}
                  and
                  <li>
                    {' '}
                    <b>getSelectedValueLabel</b>
                  </li>
                </ul>{' '}
                properties to provide custom render functions
                <br />
                <br /> This gives full control over the display of the options,
                <br /> as well as the selected value
              </div>
            }>
            <Checkbox checked={isCustom} label="custom getOptionLabel " onChange={() => setIsCustom(!isCustom)} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default SelectQomponent;
