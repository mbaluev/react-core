import React from 'react';
import {classNames} from '../../../utils/classNames';
import {CheckboxFieldControlProps} from './CheckboxFieldControl';

const getDisplayValue = (value: boolean) => {
  return value ? 'Yes' : 'No';
};

export const CheckboxFieldControlView = (props: CheckboxFieldControlProps) => {
  const {className, value} = props;

  const cls = classNames(className, {
    'field-control_no-data': typeof value === 'undefined',
  });

  return typeof value === 'boolean' ? (
    <div className={cls}>{getDisplayValue(value)}</div>
  ) : (
    <div className={cls}>empty</div>
  );
};
