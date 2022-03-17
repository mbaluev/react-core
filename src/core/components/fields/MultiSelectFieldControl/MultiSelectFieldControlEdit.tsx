import React, {useState} from 'react';
import {useUpdateEffect} from '../../../hooks/useUpdateEffect';
import {MultiSelectFieldControlProps} from './MultiSelectFieldControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {classNames} from '../../../utils/classNames';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';

export const MultiSelectFieldControlEdit = (
  props: MultiSelectFieldControlProps
) => {
  const {
    className,
    variant,
    value,
    onChange,
    items,
    error,
    helperText,
    label,
    multiple,
    placeholder,
    displayEmpty,
    ...other
  } = props;

  const [state, setState] = useState<unknown[] | undefined>(value || []);

  useUpdateEffect(() => {
    setState(value);
  }, [value]);

  const cls = classNames(className, {
    'field-control_no-data': !state || state.length === 0,
  });

  return (
    <FormControl variant="outlined" className={cls}>
      {label ? <InputLabel id="label">{label}</InputLabel> : null}
      <Select
        value={state}
        label={label}
        labelId="label"
        onChange={(e, child) => {
          setState(e.target.value as unknown[]);
          if (onChange) {
            onChange(e, child);
          }
        }}
        renderValue={(selected) => {
          const sel = selected as unknown[];
          if (sel.length === 0) {
            return placeholder;
          }
          return items
            ?.filter((item) => sel.includes(item.value))
            .map((item) => item.label)
            .join(', ');
        }}
        MenuProps={{
          getContentAnchorEl: null,
          anchorOrigin: {vertical: 'bottom', horizontal: 0},
          transformOrigin: {vertical: -8, horizontal: 0},
          className: 'multi-select-field-control__menu',
        }}
        IconComponent={ExpandMoreIcon}
        error={!!error}
        displayEmpty={Boolean(placeholder)}
        placeholder={placeholder}
        multiple
        {...other}
      >
        {placeholder && (
          <MenuItem value="" disabled={true}>
            {placeholder}
          </MenuItem>
        )}
        {items?.map((item, index) => {
          return (
            <MenuItem key={index} value={item.value ? item.value : ''}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
      {helperText && (
        <FormHelperText error={!!error}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};
