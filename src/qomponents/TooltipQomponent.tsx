import { Tooltip } from '@seeqdev/qomponents';

function TooltipQomponent() {
  return (
    <div className="flex flex-row border-solid border-gray-300 border p-6 rounded-md w-96">
      <div className="flex flex-col text-left">
        <div className="mb-6">
          <span className="text-lg font-semibold ">Tooltip</span>
        </div>
        <Tooltip text={"I'm a little tooltip short and stout ..."}>hover me</Tooltip>
      </div>
    </div>
  );
}

export default TooltipQomponent;
