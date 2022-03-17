import {IMenuAPIClient} from './interface';
import {IApiModule} from '../../../infrastructure/modules/base/interface';
import {IMenuItemDTO} from '../../../model/menu';
import {MENU_CONFIG} from '../../../model/menu/mock';

export class MenuApiClient implements IMenuAPIClient {
  constructor(protected apiModule: IApiModule) {
    this.apiModule = apiModule;
  }

  load = async (): Promise<IMenuItemDTO[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MENU_CONFIG);
      }, 1000);
    });
  };
}
