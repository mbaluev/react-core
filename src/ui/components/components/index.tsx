import React from 'react';
import {ButtonControls} from './sections/ButtonControls';
import {TextFieldControls} from './sections/TextFieldControls';
import {PasswordFieldControls} from './sections/PasswordFieldControls';
import {SelectFieldControls} from './sections/SelectFieldControls';
import {MultiSelectFieldControls} from './sections/MultiSelectFieldControls';
import {DateFieldControls} from './sections/DateFieldControls';
import {CheckboxFieldControls} from './sections/CheckboxFieldControls';
import {SwitchFieldControls} from './sections/SwitchFieldControls';
import {RadioGroupFieldControls} from './sections/RadioGroupFieldControls';
import {ModalControls} from './sections/ModalControls';
import {SliderFieldControls} from './sections/SliderFieldControls';
import {AccordionControls} from './sections/AccordionControls';
import {ToggleButtonControls} from './sections/ToggleButtonControls';
import {CountFieldControls} from './sections/CountFieldControls';
import {PageLayout} from '../../../core/components/pageLayout';
import './index.less';

export const Components = () => {
  return (
    <PageLayout title="Field Controls">
      <div className="components">
        <ButtonControls />
        <TextFieldControls />
        <PasswordFieldControls />
        <SelectFieldControls />
        <MultiSelectFieldControls />
        <DateFieldControls />
        <SliderFieldControls />
        <CountFieldControls />
        <CheckboxFieldControls />
        <SwitchFieldControls />
        <RadioGroupFieldControls />
        <ModalControls />
        <AccordionControls />
        <ToggleButtonControls />
      </div>
    </PageLayout>
  );
};
