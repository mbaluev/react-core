import {Container} from 'inversify';
import {API_CLIENT} from '../integration';
import {SERVICE} from './ids';
import {MenuService} from './modules';
import {IMenuAPIClient} from '../integration/modules/menu/interface';

export const serviceContainer = new Container();

serviceContainer.bind(SERVICE.Menu).toDynamicValue(({container}) => {
  const apiClient = container.get<IMenuAPIClient>(API_CLIENT.Menu);
  return new MenuService(apiClient);
});
