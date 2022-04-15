import {IToggleButtonItem} from './ToggleButtonGroupFieldControl';
import {IDictionaryDTO} from '../../../../controller/model/dictionary';

export const ToggleButtonItemsFromDictionary = (list: IDictionaryDTO) => {
  const items: IToggleButtonItem[] = [];
  for (const [key, value] of Object.entries(list)) {
    items.push({value: key, label: value});
  }
  return items;
};
