import {IDictionaryDTO} from '../../../../controller/model/dictionary';
import {IToggleButtonItem} from './ToggleButtonGroupFieldControl';

export const getToggleItemsFromDictionary = (
  data?: IDictionaryDTO
): IToggleButtonItem[] => {
  const items: IToggleButtonItem[] = [];
  if (data) {
    Object.keys(data).forEach((key) => {
      items.push({
        label: data[key],
        value: key,
        disabled: false,
      });
    });
  }
  return items;
};
