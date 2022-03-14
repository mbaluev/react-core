import {IMenuAPIClient} from '../../../integration/modules/menu/interface';
import {IMenuService} from './interface';

export class MenuService implements IMenuService {
  constructor(protected apiClient: IMenuAPIClient) {
    this.apiClient = apiClient;
  }

  load = () => {
    return this.apiClient.load();
  };
}
