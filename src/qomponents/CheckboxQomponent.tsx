import { Checkbox } from '@seeqdev/qomponents';
function CheckboxQomponent() {
  return (
    <div className="flex flex-row border-solid border-gray-300 border p-6 rounded-md w-96">
      <div className="flex flex-col text-left">
        <div className="mb-6">
          <span className="text-lg font-semibold ">Checkbox</span>
        </div>
        <Checkbox label={'Checkbox'} />
        <Checkbox type="radio" label={'Radio Button'} />
      </div>
    </div>
  );
}

export default CheckboxQomponent;
