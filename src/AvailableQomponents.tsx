import ButtonQomponent from './qomponents/ButtonQomponent';
import TextFieldQomponent from './qomponents/TextFieldQomponent';
import CheckboxQomponent from './qomponents/CheckboxQomponent';
import TextAreaQomponent from './qomponents/TextAreaQomponent';
import TooltipQomponent from './qomponents/TooltipQomponent';
import SelectQomponent from './qomponents/SelectQomponent';
import IconQomponent from './qomponents/IconQomponent';

function AvailableQomponents() {
  return (
    <div className={'flex-row'}>
      <div className="container my-12 mx-auto md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4 gap-6">
          <ButtonQomponent />
          <TextFieldQomponent />
          <SelectQomponent />
          <CheckboxQomponent />
          <TextAreaQomponent />
          <TooltipQomponent />
          <IconQomponent />
        </div>
      </div>
    </div>
  );
}

export default AvailableQomponents;
