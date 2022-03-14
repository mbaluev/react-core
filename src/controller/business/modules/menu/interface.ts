import {IMenuItem} from '../../../model/menu';

export interface IMenuService {
  load: () => Promise<IMenuItem[]>;
}
