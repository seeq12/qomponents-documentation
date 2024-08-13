import React from 'react';
import { Select, ToolbarButton } from '@seeqdev/qomponents';

const variants = [
  { label: 'With popover', value: 'has-popover' },
  { label: 'Without popover', value: 'no-popover' },
];

function ToolbarButtonQomponent() {
  const [currentType, setCurrentType] = React.useState(variants[0].value);
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    if (currentType === 'no-popover') {
      setIsActive(!isActive);
    }
  };

  return (
    <div className="flex flex-row border-solid border-gray-300 border p-6 rounded-md w-96">
      <div className="flex flex-col text-left items-start w-full">
        <div className="mb-6">
          <span className="text-lg font-semibold">Toolbar button</span>
        </div>
        <ToolbarButton
          icon="fc-y-axis"
          label="Click me"
          tooltipText="This is a toolbar button."
          tooltipOptions={{ position: 'top', delay: 0 }}
          hasArrow
          isActive={isActive}
          onClick={handleClick}
          popoverContent={
            currentType === 'has-popover' && (
              <div className="p-2 text-base w-96">
                This is the content for the toolbar button. It can be anything you want it to be. It can be text,
                images, or even a video!
              </div>
            )
          }
        />
        <Select
          onChange={(value) => setCurrentType(value.value)}
          options={variants}
          small={true}
          extraClassNames="w-full mt-4"
        />
      </div>
    </div>
  );
}

export default ToolbarButtonQomponent;
