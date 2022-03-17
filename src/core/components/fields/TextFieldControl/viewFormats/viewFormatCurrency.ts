import numeral from 'numeral';
import {getCurrencySign} from '../../index';

export const viewFormatCurrency =
  (codeLat?: string) => (value?: string | number | undefined) => {
    return `${numeral(value).format('0,0')} ${getCurrencySign(codeLat)}`.trim();
  };
