import {IRadioItem} from './RadioGroupFieldControl';
import {IDictionaryDTO} from '../../../../controller/model/dictionary';

export const RadioItemsFromDictionary = (list: IDictionaryDTO) => {
  const items: IRadioItem[] = [];
  for (const [key, value] of Object.entries(list)) {
    items.push({value: key, label: value});
  }
  return items;
};
