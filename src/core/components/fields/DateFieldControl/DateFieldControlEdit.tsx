import React, {useEffect, useState} from 'react';
import {classNames} from '../../../utils/classNames';
import {format, parse} from 'date-fns';
import locale from 'date-fns/locale/en-US';
import {DateFieldControlProps} from './DateFieldControl';
import {ParsableDate} from '@material-ui/pickers/constants/prop-types';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
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
    format,
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
        ? parse(value, 'dd.MM.yyyy', new Date())
        : value
      : null;
    setState(dateValue);
  }, [value]);

  return (
    <MuiPickersUtilsProvider utils={LocalizedUtils} locale={locale}>
      <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        format={format || 'dd.MM.yyyy'}
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
            ? minDateMessage || "Date can't be less then 01.01.1900"
            : null
        }
        maxDateMessage={
          shouldValidate
            ? maxDateMessage || "Date can't be grater then 01.01.2100"
            : null
        }
        invalidDateMessage={
          shouldValidate ? invalidDateMessage || 'Invalid date' : null
        }
        keyboardIcon={<CalendarTodayIcon />}
        {...other}
      />
    </MuiPickersUtilsProvider>
  );
};
