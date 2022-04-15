import React, {useEffect, useState} from 'react';
import {
  isToggleButtonGroupFieldControlHasData,
  ToggleButtonGroupFieldControlProps,
} from './ToggleButtonGroupFieldControl';
import {classNames} from '../../../utils/classNames/classNames';
import {FormControl, FormHelperText} from '@material-ui/core';
import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab';

export const ToggleButtonGroupFieldControlEdit = (
  props: ToggleButtonGroupFieldControlProps
) => {
  const {
    className,
    value,
    onChange,
    error,
    helperText,
    items,
    disabled,
    ...other
  } = props;

  const [state, setState] = useState<string | null>();

  const cls = classNames(className, {
    'field-control_no-data': !isToggleButtonGroupFieldControlHasData(state),
  });

  useEffect(() => {
    setState(value);
  }, [value]);

  return (
    <FormControl className={cls}>
      <ToggleButtonGroup
        value={state}
        onChange={(e: React.MouseEvent<HTMLElement>, value: string | null) => {
          setState(value);
          if (onChange) {
            onChange(e, value);
          }
        }}
        {...other}
      >
        {items?.map((item, index) => {
          return (
            <ToggleButton
              key={index}
              value={item.value}
              disabled={item.disabled || disabled}
            >
              {item.label}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
      {helperText && (
        <FormHelperText error={!!error}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};
