import {Container} from 'inversify';
import {SERVICE} from './ids';
import {MenuService} from './modules';
import {IMenuService} from './modules/menu/interface';

export const serviceContainer = new Container();

serviceContainer.bind<IMenuService>(SERVICE.Menu).to(MenuService);
