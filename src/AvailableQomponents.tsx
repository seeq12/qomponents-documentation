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
import AlertQomponent from './qomponents/AlertQomponent';
import ButtonGroupQomponent from './qomponents/ButtonGroupQomponent';
import CarouselQomponent from './qomponents/CarouselQomponent';
import CollapseQomponent from './qomponents/CollapseQomponent';
import InputGroupQomponent from './qomponents/InputGroupQomponent';
import ProgressBarQomponent from './qomponents/ProgressBarQomponent';
import SeeqActionDropdownQomponent from './qomponents/SeeqActionDropdownQomponent';
import SliderQomponent from './qomponents/SliderQomponent';
interface SectionProps {
  /**  A unique identifier for the section. */
  id: string;
  /** The display label for the section. */
  label: string;
  /**  A React element to render as the section's content. mostly the type definitions */
  component: React.ReactElement;
  /** (Optional) A key used for embedding external resources or content. */
  embedKey?: string;
}

const sections: SectionProps[] = [
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
  { id: 'icon-qomponent', label: 'Icon', component: <IconQomponent />, embedKey: '8sqy8m' },
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
  { id: 'alert-qomponent', label: 'Alert', component: <AlertQomponent />, embedKey: 'gvx88v' },
  { id: 'button-group-qomponent', label: 'Button Group', component: <ButtonGroupQomponent />, embedKey: 'f28s83' },
  { id: 'carousel-qomponent', label: 'Carousel', component: <CarouselQomponent />, embedKey: 'tyyl4s' },
  { id: 'collapse-qomponent', label: 'Collapse', component: <CollapseQomponent />, embedKey: 'kq5x4h' },
  { id: 'input-group-qomponent', label: 'Input Group', component: <InputGroupQomponent />, embedKey: '8nlnsc' },
  { id: 'progress-bar-qomponent', label: 'Progress Bar', component: <ProgressBarQomponent />, embedKey: '3nct48' },
  {
    id: 'seeq-action-dropdown-qomponent',
    label: 'Seeq Action Dropdown',
    component: <SeeqActionDropdownQomponent />,
    embedKey: 'l6w23j',
  },
  { id: 'slider-qomponent', label: 'Slider', component: <SliderQomponent />, embedKey: '8hhwr8' },
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
