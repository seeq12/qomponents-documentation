import { Select } from '@seeqdev/qomponents/dist';

const options = [
  {
    label: 'Option A',
    value: 'theme',
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

function SelectQomponent() {
  return (
    <div className="flex flex-row border-solid border-gray-300 border p-6 rounded-md w-96">
      <div className="flex flex-col text-left">
        <div className="mb-6">
          <span className="text-lg font-semibold ">Select</span>
        </div>
        <Select options={options} onChange={() => {}} extraClassNames="w-80" />
      </div>
    </div>
  );
}

export default SelectQomponent;
