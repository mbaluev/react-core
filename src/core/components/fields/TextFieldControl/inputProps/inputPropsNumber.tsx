import {EditFormatNumber} from '../editFormats';
import {InputAdornment} from '@material-ui/core';
import React from 'react';

export const inputPropsNumber = (adornment?: string) => {
  return {
    inputComponent: EditFormatNumber as any,
    endAdornment: adornment && (
      <InputAdornment position="end">{adornment}</InputAdornment>
    ),
  };
};
