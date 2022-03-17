import {IMenuItemDTO} from '../../../model/menu';

export interface IMenuService {
  load: () => Promise<IMenuItemDTO[]>;
}
