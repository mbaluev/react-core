import numeral from 'numeral';

export const viewFormatNumber =
  (adornment?: string, format?: string) =>
  (value?: string | number | undefined) => {
    return `${numeral(value).format(format)} ${adornment}`.trim();
  };
