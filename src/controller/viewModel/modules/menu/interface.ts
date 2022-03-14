import {IBaseViewModel} from '../base/interface';
import {IMenuItem} from '../../../model/menu';

export interface IMenuViewModel extends IBaseViewModel {
  data: IMenuItem[];
  load: () => Promise<void>;
  setActive: (name: string) => void;
}
