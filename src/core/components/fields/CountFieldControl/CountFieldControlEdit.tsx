import React, {useState} from 'react';
import {FormControl, FormHelperText, IconButton} from '@material-ui/core';
import {useUpdateEffect} from '../../../hooks/useUpdateEffect';
import {CountFieldControlProps} from './CountFieldControl';
import {classNames} from '../../../utils/classNames/classNames';
import {Count} from './Count';
import {getCountDisplayViewValue} from './CountFieldControlView';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

export const CountFieldControlEdit = (props: CountFieldControlProps) => {
  const {
    value,
    onChange,
    className,
    error,
    helperText,
    format,
    endAdornment,
    ...other
  } = props;

  const [state, setState] = useState<number>(value);

  useUpdateEffect(() => {
    if (onChange) {
      onChange(state);
    }
  }, [state]);

  useUpdateEffect(() => {
    setState(value);
  }, [value]);

  const handleChange = (event: any, newValue: number | number[]) => {
    if (!Array.isArray(newValue)) {
      setState(newValue);
    }
  };
  const decrease = () => {
    setState(state === props.min ? state : state - 1);
  };
  const increase = () => {
    setState(state === props.max ? state : state + 1);
  };

  const cls = classNames(className, {'field-control_no-data': !Boolean(state)});

  return (
    <FormControl className={cls}>
      <div className="count-field-control__controls">
        <IconButton
          className="count-field-control__minus"
          size="small"
          onClick={decrease}
          disabled={props.disabled}
        >
          <RemoveIcon fontSize="inherit" />
        </IconButton>
        <div className="count-field-control__label">
          {getCountDisplayViewValue(state, format, endAdornment)}
        </div>
        <IconButton
          className="count-field-control__plus"
          size="small"
          onClick={increase}
          disabled={props.disabled}
        >
          <AddIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className="count-field-control__slider">
        <Count
          value={state}
          onChange={handleChange}
          valueLabelDisplay="off"
          {...other}
        />
      </div>
      {error && helperText && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};
