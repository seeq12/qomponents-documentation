import React from 'react';
import { Tabs } from '@seeqdev/qomponents';

const tabsList = [
  {
    id: 'tabA',
    label: 'Tab A',
    content: (
      <div className="p-2 text-base w-full">
        This is the content for Tab A. It can be anything you want it to be. It can be text, images, or even a video!
      </div>
    ),
    icon: 'fc-data-file',
  },
  {
    id: 'tabB',
    label: 'Tab B',
    content: (
      <div className="p-2 text-base w-full">
        This is the content for Tab B. It can also be anything you want it to be. It can be text, images, or even a
        video!
      </div>
    ),
    icon: 'fc-prediction',
  },
  {
    id: 'tabC',
    label: 'Tab C',
    content: (
      <div className="p-2 text-base w-full">
        This is the content for Tab C. It can also be anything you want it to be. It can be text, images, or even a
        video!
      </div>
    ),
    icon: 'fc-gears-2',
  },
];

function TabsQomponent() {
  const [active, setActive] = React.useState('tabA');

  return (
    <div className="flex flex-row border-solid border-gray-300 border p-6 rounded-md w-96">
      <div className="flex flex-col text-left w-full">
        <div className="mb-6">
          <span className="text-lg font-semibold">Tabs</span>
        </div>
        <Tabs stretchTabs={true} activeTab={active} onTabSelect={setActive} defaultActiveTab="data" tabs={tabsList} />
      </div>
    </div>
  );
}

export default TabsQomponent;
