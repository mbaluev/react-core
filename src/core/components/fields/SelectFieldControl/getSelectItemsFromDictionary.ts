import {IDictionaryDTO} from '../../../../controller/model/dictionary';
import {ISelectItem} from './SelectFieldControl';

export const getSelectItemsFromDictionary = (
  dictionary?: IDictionaryDTO
): ISelectItem[] => {
  const items: ISelectItem[] = [];
  if (dictionary) {
    Object.keys(dictionary).forEach((key) => {
      items.push({
        label: dictionary[key],
        value: key,
        disabled: false,
      });
    });
  }
  return items;
};
