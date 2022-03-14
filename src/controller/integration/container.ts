import {Container} from 'inversify';
import {MenuApiClient} from './modules';
import {API_CLIENT} from './ids';
import {INFRASTRUCTURE_MODULE} from '../infrastructure';
import {IApiModule} from '../infrastructure/modules/base/interface';

export const integrationContainer = new Container();

integrationContainer.bind(API_CLIENT.Menu).toDynamicValue(({container}) => {
  const apiModule = container.get<IApiModule>(INFRASTRUCTURE_MODULE.Core);
  return new MenuApiClient(apiModule);
});
