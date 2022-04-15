import React from 'react';
import moment from 'moment';
import {isValid} from 'date-fns';
import {classNames} from '../../../utils/classNames/classNames';
import {DateFieldControlProps} from './DateFieldControl';

export const DateFieldControlView = (props: DateFieldControlProps) => {
  const {className, value, format = 'YYYY-DD-MM'} = props;

  const displayValue = value
    ? typeof value === 'string' || isValid(value)
      ? moment(value, [format, moment.ISO_8601]).format(format)
      : 'Invalid Date'
    : '';

  const cls = classNames(className, {
    'field-control_no-data': !value || displayValue === 'Invalid Date',
  });

  return value ? (
    <div className={cls}>{displayValue}</div>
  ) : (
    <div className={cls}>empty</div>
  );
};
