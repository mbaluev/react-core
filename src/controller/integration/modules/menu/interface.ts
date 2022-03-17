import {IMenuItemDTO} from '../../../model/menu';

export interface IMenuAPIClient {
  load: () => Promise<IMenuItemDTO[]>;
}
