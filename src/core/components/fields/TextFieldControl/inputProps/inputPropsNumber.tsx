import {EditFormatNumber} from '../editFormats';
import {InputAdornment} from '@material-ui/core';
import React from 'react';

export const inputPropsNumber = (adornment?: string) => {
  return {
    inputProps: {min: 1},
    inputComponent: EditFormatNumber as any,
    endAdornment: adornment && (
      <InputAdornment position="end">{adornment}</InputAdornment>
    ),
  };
};
