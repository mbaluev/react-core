import React from 'react';
import {PasswordFieldControlProps} from './PasswordFieldControl';
import {classNames} from '../../../utils/classNames';
import {isTextFieldControlHasData} from '../TextFieldControl';

export const PasswordFieldControlView = (props: PasswordFieldControlProps) => {
  const {className, value} = props;

  const cls = classNames(className, {
    'field-control_no-data': !isTextFieldControlHasData(value),
  });

  return value ? (
    <div className={cls}>{value.replace(/./g, '*')}</div>
  ) : (
    <div className={cls}>empty</div>
  );
};
