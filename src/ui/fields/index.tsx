import React from 'react';
import {ButtonControls} from './sections/ButtonControls';
import {TextFieldControls} from './sections/TextFieldControls';
import {PasswordFieldControls} from './sections/PasswordFieldControls';
import {PageLayout} from '../../core/components/pageLayout';
import './index.less';

export const Fields = () => {
  return (
    <PageLayout title="Field Controls">
      <div className="fields">
        <ButtonControls />
        <TextFieldControls />
        <PasswordFieldControls />
      </div>
    </PageLayout>
  );
};
