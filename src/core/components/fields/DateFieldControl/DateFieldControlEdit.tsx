import React, {useEffect, useState} from 'react';
import {classNames} from '../../../utils/classNames/classNames';
import {format, parse} from 'date-fns';
import locale from 'date-fns/locale/en-US';
import {DateFieldControlProps} from './DateFieldControl';
import {ParsableDate} from '@material-ui/pickers/constants/prop-types';
import EventIcon from '@material-ui/icons/Event';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

class LocalizedUtils extends DateFnsUtils {
  getCalendarHeaderText(date: Date) {
    return format(date, 'LLLL yyyy', {locale: this.locale});
  }
  getDatePickerHeaderText(date: Date) {
    return format(date, 'EEEEEE, dd MMMM', {locale: this.locale});
  }
}

export const DateFieldControlEdit = (props: DateFieldControlProps) => {
  const {
    autoOk,
    variant,
    inputVariant,
    format = 'yyyy-dd-MM',
    InputAdornmentProps,
    value,
    onChange,
    orientation,
    PopoverProps,
    className,
    minDateMessage,
    maxDateMessage,
    invalidDateMessage,
    keyboardIcon,
    shouldValidate = false,
    ...other
  } = props;

  const [state, setState] = useState<ParsableDate>();

  const cls = classNames(className, {
    'field-control_no-data': !state,
  });

  useEffect(() => {
    const dateValue = value
      ? typeof value === 'string'
        ? parse(value, format, new Date())
        : value
      : null;
    setState(dateValue);
  }, [value, format]);

  return (
    <MuiPickersUtilsProvider utils={LocalizedUtils} locale={locale}>
      <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        format={format}
        InputAdornmentProps={{position: 'end'}}
        value={state}
        onChange={(value) => {
          setState(value);
          if (onChange) {
            onChange(value, props.name);
          }
        }}
        orientation="landscape"
        PopoverProps={{
          anchorOrigin: {vertical: 'bottom', horizontal: 0},
          transformOrigin: {vertical: -8, horizontal: 0},
          className: 'date-field-control__popover',
        }}
        className={cls}
        minDateMessage={
          shouldValidate
            ? minDateMessage || 'Date cannot be less then 01.01.1900'
            : null
        }
        maxDateMessage={
          shouldValidate
            ? maxDateMessage || 'Date cannot be greater then 01.01.2100'
            : null
        }
        invalidDateMessage={
          shouldValidate ? invalidDateMessage || 'Invalid date' : null
        }
        keyboardIcon={<EventIcon />}
        {...other}
      />
    </MuiPickersUtilsProvider>
  );
};
