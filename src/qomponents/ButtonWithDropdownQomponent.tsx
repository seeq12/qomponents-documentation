import React from 'react';
import { ButtonWithDropdown, Icon } from '@seeqdev/qomponents';

function ButtonWithDropdownQomponent() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-row border-solid border-gray-300 border p-6 rounded-md w-96">
      <div className="flex flex-col text-left items-start w-full">
        <div className="mb-6">
          <span className="text-lg font-semibold">Button with dropdown</span>
        </div>
        <ButtonWithDropdown
          onOpenChange={(isOpen) => setOpen(isOpen)}
          isOpen={open}
          triggerIcon={<Icon type="theme" icon="fc-circle_info" extraClassNames="mb-2" />}
          tooltip="This is a small dropdown."
          tooltipDelay={0}
          tooltipPlacement="top"
          extraClassNames="w-full"
          placementOffset={2}
          align="center"
          alignOffset={0}
          dropdownItems={[
            { label: 'Option A', icon: 'fc-data-file', onClick: () => setOpen(false) },
            { label: 'Option B', icon: 'fc-prediction', onClick: () => setOpen(false) },
            {
              label: 'Option C',
              icon: 'fc-gears-2',
              onClick: () => setOpen(false),
              subMenuItems: [
                { label: 'Option E', iconClass: 'fc-lightbulb', onClick: () => setOpen(false) },
                { label: 'Option F', iconClass: 'fc-condition-define', onClick: () => setOpen(false) },
              ],
            },
            { label: 'Option D', icon: 'fc-viz-overlay', onClick: () => setOpen(false) },
          ]}
        />
      </div>
    </div>
  );
}

export default ButtonWithDropdownQomponent;
