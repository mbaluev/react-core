import React from 'react';
import {EditFormatNumber} from '../editFormats';
import {InputAdornment} from '@material-ui/core';
import {CURRENCIES_KNOWN} from '../../../../../controller/model/currency/mock';

export const getCurrencySign = (codeLat: string = 'USD') => {
  return CURRENCIES_KNOWN[codeLat] ? CURRENCIES_KNOWN[codeLat] : codeLat;
};

export const inputPropsCurrency = (
  codeLat?: string,
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
) => {
  return {
    inputComponent: EditFormatNumber as any,
    endAdornment: (
      <InputAdornment position="end" onClick={onClick}>
        {getCurrencySign(codeLat)}
      </InputAdornment>
    ),
  };
};
