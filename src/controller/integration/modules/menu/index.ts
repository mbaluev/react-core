import {IMenuAPIClient} from './interface';
import {IApiModule} from '../../../infrastructure/modules/base/interface';
import {IMenuItemDTO} from '../../../model/menu';
import {MENU_CONFIG} from '../../../model/menu/mock';
import {inject, injectable} from 'inversify';
import {INFRASTRUCTURE_MODULE} from '../../../infrastructure';

@injectable()
export class MenuApiClient implements IMenuAPIClient {
  @inject(INFRASTRUCTURE_MODULE.Core) private apiModule!: IApiModule;

  load = async (): Promise<IMenuItemDTO[]> => {
    return new Promise((resolve) => {
      // setTimeout(() => {
      resolve(MENU_CONFIG);
      // }, 500);
    });
  };
}
