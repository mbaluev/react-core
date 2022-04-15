import {IMenuService} from './interface';
import {inject, injectable} from 'inversify';
import {API_CLIENT} from '../../../integration';
import {IMenuAPIClient} from '../../../integration/modules/menu/interface';

@injectable()
export class MenuService implements IMenuService {
  @inject(API_CLIENT.Menu) private apiClient!: IMenuAPIClient;

  load = () => {
    return this.apiClient.load();
  };
}
