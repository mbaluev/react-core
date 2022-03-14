import React from 'react';
import {ButtonControls} from './ButtonControls';
import {TextFieldControls} from './TextFieldControls';
import './index.less';

export const Fields = () => {
  return (
    <div className="fields">
      <ButtonControls />
      <TextFieldControls />
    </div>
  );
};
