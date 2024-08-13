import React from 'react';
import { Accordion, Icon } from '@seeqdev/qomponents';

const Trigger = ({ label, isActive }: { label: string; isActive: boolean }) => (
  <div className="flex justify-start items-center border-b px-2 py-1 ">
    <Icon
      icon={`fc-arrow-dropdown ${isActive ? '-rotate-90' : ''}`}
      extraClassNames=" mr-[0.5rem] text-[10px]"
      type="theme"
    />
    {label}
  </div>
);

function AccordionQomponent() {
  const [active, setActive] = React.useState('');

  const accordionItems = [
    {
      value: 'optionA',
      id: 'optionA',
      itemTestId: 'optionA',
      trigger: <Trigger label="Option A" isActive={active === 'optionA'} />,
      content: (
        <div className="p-2 text-base">
          This is the content for option A. It can be anything you want it to be. It can be text, images, or even a
          video!
        </div>
      ),
    },
    {
      value: 'optionB',
      id: 'optionB',
      trigger: <Trigger label="Option B" isActive={active === 'optionB'} />,
      itemTestId: 'optionB',
      content: (
        <div className="p-2 text-base">
          This is the content for option B. It can also be anything you want it to be. It can be text, images, or even a
          video!
        </div>
      ),
    },
    {
      value: 'optionC',
      id: 'optionC',
      trigger: <Trigger label="Option C" isActive={active === 'optionC'} />,
      itemTestId: 'optionC',
      content: (
        <div className="p-2 text-base">
          This is the content for option C. It can also be anything you want it to be. It can be text, images, or even a
          video!
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-row border-solid border-gray-300 border p-6 rounded-md w-96">
      <div className="flex flex-col text-left w-full">
        <div className="mb-6">
          <span className="text-lg font-semibold">Accordion</span>
        </div>
        <Accordion accordionItems={accordionItems} value={active} onItemSelect={(value) => setActive(value)} />
      </div>
    </div>
  );
}

export default AccordionQomponent;
