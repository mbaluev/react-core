import React, {useState} from 'react';
import {TextField} from '@material-ui/core';
import {TextFieldProps} from '@material-ui/core/TextField/TextField';
import {useUpdateEffect} from '../../../../hooks/useUpdateEffect';
import {classNames} from '../../../../utils/classNames';

export type TextFieldControlProps = TextFieldProps & {
  value?: string | number;
  regex?: RegExp;
};

export const isTextFieldControlHasData = (value?: string | number) => {
  return value || value === 0;
};

export const TextFieldControl = (props: TextFieldControlProps) => {
  const {className, variant, value, onChange, regex, multiline, ...other} =
    props;

  const [state, setState] = useState<string | number | undefined>(value || '');

  const cls = classNames(
    'text-field-control',
    'field-control',
    'field-control_is-edit',
    className,
    {
      'text-field-control_multiline': Boolean(multiline),
      'field-control_no-data': !isTextFieldControlHasData(state),
    }
  );

  useUpdateEffect(() => {
    setState(value);
  }, [value]);

  return (
    <TextField
      className={cls}
      variant="outlined"
      value={state}
      multiline={multiline}
      onChange={(e) => {
        if (regex) {
          if (regex.test(e.target.value)) {
            setState(e.target.value);
            if (onChange) onChange(e);
          }
        } else {
          setState(e.target.value);
          if (onChange) onChange(e);
        }
      }}
      {...other}
    />
  );
};
