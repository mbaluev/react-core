import React, {useState, MouseEvent} from 'react';
import {useUpdateEffect} from '../../../hooks/useUpdateEffect';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import {IconButton, InputAdornment, TextField} from '@material-ui/core';
import {PasswordFieldControlProps} from './PasswordFieldControl';
import {classNames} from '../../../utils/classNames';
import {isTextFieldControlHasData} from '../TextFieldControl';

export const PasswordFieldControlEdit = (props: PasswordFieldControlProps) => {
  const {
    className,
    type,
    variant,
    value,
    onChange,
    InputProps,
    disabled,
    ...other
  } = props;

  const [state, setState] = useState<string | undefined>(value || '');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  useUpdateEffect(() => {
    setState(value);
  }, [value]);

  const cls = classNames(className, {
    'field-control_no-data': !isTextFieldControlHasData(state),
  });

  return (
    <TextField
      className={cls}
      disabled={disabled}
      type={showPassword && !disabled ? 'text' : 'password'}
      variant="outlined"
      value={state}
      onChange={(e) => {
        setState(e.target.value);
        if (onChange) {
          onChange(e);
        }
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? (
                <Visibility className="color-light-blue" />
              ) : (
                <VisibilityOff className="color-actions-no-active" />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...other}
    />
  );
};
