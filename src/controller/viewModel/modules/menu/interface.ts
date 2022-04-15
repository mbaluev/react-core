import {IBaseViewModel} from '../base/interface';
import {IMenuItemDTO} from '../../../model/menu';

export interface IMenuViewModel extends IBaseViewModel {
  data: IMenuItemDTO[];

  load: () => Promise<void>;
  setActive: (name?: string) => void;
}
