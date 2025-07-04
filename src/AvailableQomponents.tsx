import ButtonQomponent from './qomponents/ButtonQomponent';
import TextFieldQomponent from './qomponents/TextFieldQomponent';
import CheckboxQomponent from './qomponents/CheckboxQomponent';
import TextAreaQomponent from './qomponents/TextAreaQomponent';
import QtipQomponent from './qomponents/QtipQomponent';
import SelectQomponent from './qomponents/SelectQomponent';
import IconQomponent from './qomponents/IconQomponent';
import AccordionQomponent from './qomponents/AccordionQomponent';
import ModalQomponent from './qomponents/ModalQomponent';
import ButtonWithDropdownQomponent from './qomponents/ButtonWithDropdownQomponent';
import ButtonWithPopoverQomponent from './qomponents/ButtonWithPopoverQomponent';
import ToolbarButtonQomponent from './qomponents/ToolbarButtonQomponent';
import TabsQomponent from './qomponents/TabsQomponent';
import GettingStartedQomponent from './qomponents/GettingStartedQomponent';
import Qomponents from './layouts/QomponentsLayout';

const sections: {
  id: string;
  label: string;
  component?: React.ReactElement;
  embedKey?: string;
}[] = [
  { id: 'getting-started', label: 'Getting Started', component: <GettingStartedQomponent /> },
  {
    id: 'button-qomponent',
    label: 'Button',
    component: <ButtonQomponent />,
    embedKey: '7ykgxh',
  },
  { id: 'text-field-qomponent', label: 'Text Field', component: <TextFieldQomponent />, embedKey: 'x3cqgj' },
  {
    id: 'checkbox-qomponent',
    label: 'Checkbox',
    component: <CheckboxQomponent />,
    embedKey: 'kxhn8p',
  },
  { id: 'text-area-qomponent', label: 'Text Area', component: <TextAreaQomponent />, embedKey: '8xkzlj' },
  { id: 'qtip-qomponent', label: 'QTip', component: <QtipQomponent />, embedKey: 'znmp29' },
  { id: 'select-qomponent', label: 'Select', component: <SelectQomponent />, embedKey: '8pmngy' },
  // { id: 'icon-qomponent', label: 'Icon', component: <IconQomponent />, code: iconSnippet },
  { id: 'accordion-qomponent', label: 'Accordion', component: <AccordionQomponent />, embedKey: 'cdmgrg' },
  { id: 'modal-qomponent', label: 'Modal', component: <ModalQomponent />, embedKey: '7tdpvl' },
  {
    id: 'button-with-dropdown-qomponent',
    label: 'Button with Dropdown',
    component: <ButtonWithDropdownQomponent />,
    embedKey: 'g62phm',
  },
  {
    id: 'button-with-popover-qomponent',
    label: 'Button with Popover',
    component: <ButtonWithPopoverQomponent />,
    embedKey: '3k7f6l',
  },
  {
    id: 'toolbar-button-qomponent',
    label: 'Toolbar Button',
    component: <ToolbarButtonQomponent />,
    embedKey: 'h8x3wh',
  },
  { id: 'tabs-qomponent', label: 'Tabs', embedKey: 'xsgfm4', component: <TabsQomponent /> },
];

function AvailableQomponents() {
  return (
    <div className={'flex-row'}>
      <div className="container my-12 mx-auto md:px-12">
        <Qomponents sections={sections} />
      </div>
    </div>
  );
}

export default AvailableQomponents;
