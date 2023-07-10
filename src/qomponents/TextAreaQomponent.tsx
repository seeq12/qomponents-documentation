import { TextArea } from '@seeqdev/qomponents/dist';

function TextAreaQomponent() {
  return (
    <div className="flex flex-row border-solid border-gray-300 border p-6 rounded-md w-96">
      <div className="flex flex-col text-left">
        <div className="mb-6">
          <span className="text-lg font-semibold ">TextArea</span>
        </div>
        <TextArea placeholder="this is a text area" extraClassNames="w-80" />
      </div>
    </div>
  );
}
export default TextAreaQomponent;
