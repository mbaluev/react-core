import React, {useState} from 'react';
import {useUpdateEffect} from '../../../hooks/useUpdateEffect';
import {CheckboxFieldControlProps} from './CheckboxFieldControl';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from '@material-ui/core';
import {classNames} from '../../../utils/classNames/classNames';

export const CheckboxFieldControlEdit = (props: CheckboxFieldControlProps) => {
  const {
    className,
    value = false,
    onChange,
    label,
    error,
    helperText,
    ...other
  } = props;

  const [state, setState] = useState<boolean>(value as boolean);

  const cls = classNames(className, {
    'field-control_no-data': typeof state === 'undefined',
  });

  useUpdateEffect(() => {
    setState(value);
  }, [value]);

  return (
    <FormControl className={cls}>
      <FormControlLabel
        control={
          <Checkbox
            checked={state}
            onChange={(e, checked) => {
              setState(e.target.checked as boolean);
              if (onChange) {
                onChange(e, checked);
              }
            }}
            {...other}
          />
        }
        label={label}
      />
      {helperText && (
        <FormHelperText error={!!error}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};
