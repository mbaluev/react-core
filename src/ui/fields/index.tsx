import React from 'react';
import {ButtonControls} from './ButtonControls';
import {TextFieldControls} from './TextFieldControls';
import {PasswordFieldControls} from './PasswordFieldControls';
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
