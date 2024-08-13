import React from 'react';
import { Button, ButtonWithPopover, Select } from '@seeqdev/qomponents';

const variants = [
  { label: 'Open with click', value: 'click' },
  { label: 'Open with hover', value: 'hover' },
];

function ButtonWithPopoverQomponent() {
  const [open, setOpen] = React.useState(false);
  const [currentType, setCurrentType] = React.useState(variants[0].value);

  return (
    <div className="flex flex-row border-solid border-gray-300 border p-6 rounded-md w-96">
      <div className="flex flex-col text-left items-start w-full">
        <div className="mb-6">
          <span className="text-lg font-semibold">Button with popover</span>
        </div>
        <ButtonWithPopover
          onOpenChange={(isOpen) => setOpen(isOpen)}
          isOpen={open}
          trigger={
            <Button
              onClick={() => {
                setOpen(true);
              }}
              variant="theme"
              label="Open popover"
              icon="fc-user"
              iconPosition="left"
              extraClassNames="w-full"
            />
          }
          tooltip="This is a small popover."
          tooltipDelay={0}
          tooltipPlacement="top"
          placement="top"
          extraTriggerClassNames="!w-full"
          isTriggerAsChild
          hasArrow
          isHoverEnabled={currentType === 'hover'}
          align="center"
          alignOffset={0}>
          <div className="p-2 text-base w-96">
            This is the content for the popover. It can be anything you want it to be. It can be text, images, or even a
            video!
          </div>
        </ButtonWithPopover>
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

export default ButtonWithPopoverQomponent;
