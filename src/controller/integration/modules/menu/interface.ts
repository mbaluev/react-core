import {IMenuItem} from '../../../model/menu';

export interface IMenuAPIClient {
  load: () => Promise<IMenuItem[]>;
}
