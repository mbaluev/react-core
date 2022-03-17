import React, {useState} from 'react';
import {useUpdateEffect} from '../../../hooks/useUpdateEffect';
import {FormControl, FormControlLabel, FormHelperText} from '@material-ui/core';
import {classNames} from '../../../utils/classNames';
import {SwitchFieldControlProps} from './SwitchFieldControl';
import {Switch} from './Switch';

export const SwitchFieldControlEdit = (props: SwitchFieldControlProps) => {
  const {
    className,
    value = false,
    onChange,
    label,
    error,
    helperText,
    labelPlacement,
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
          <Switch
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
        labelPlacement={labelPlacement}
      />
      {helperText && (
        <FormHelperText error={!!error}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};
