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
import {PageLayout} from '../../core/components/pageLayout';
import './index.less';

export const Fields = () => {
  return (
    <PageLayout title="Field Controls">
      <div className="fields">
        <ModalControls />
        <ButtonControls />
        <TextFieldControls />
        <PasswordFieldControls />
        <SelectFieldControls />
        <MultiSelectFieldControls />
        <DateFieldControls />
        <CheckboxFieldControls />
        <SwitchFieldControls />
        <RadioGroupFieldControls />
      </div>
    </PageLayout>
  );
};
