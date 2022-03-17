import {IDictionaryDTO} from '../../../../controller/model/dictionary';
import {ISelectItem} from './SelectFieldControl';

export const SelectItemsFromDictionary = (
  dictionary?: IDictionaryDTO
): ISelectItem[] => {
  const items: ISelectItem[] = [];
  if (dictionary) {
    Object.keys(dictionary).forEach((key) => {
      items.push({
        label: dictionary[key],
        value: key,
      });
    });
  }
  return items;
};
