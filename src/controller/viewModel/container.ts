import {Container} from 'inversify';
import {SERVICE} from '../business';
import {VIEW_MODEL} from './ids';
import {MenuViewModel} from './modules';
import {IMenuService} from '../business/modules/menu/interface';

export const viewModelContainer = new Container();

viewModelContainer
  .bind(VIEW_MODEL.Menu)
  .toDynamicValue(({container}) => {
    const service = container.get<IMenuService>(SERVICE.Menu);
    return new MenuViewModel(service);
  })
  .inSingletonScope();
