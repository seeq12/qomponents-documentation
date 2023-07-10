import { TextField } from '@seeqdev/qomponents';
function TextFieldQomponent() {
  return (
    <div className="flex flex-row border-solid border-gray-300 border p-6 rounded-md w-96">
      <div className="flex flex-col text-left">
        <div className="mb-6">
          <span className="text-lg font-semibold ">TextField</span>
        </div>
        <TextField placeholder="this is a textfield" extraClassNames="w-80" />
      </div>
    </div>
  );
}
export default TextFieldQomponent;
