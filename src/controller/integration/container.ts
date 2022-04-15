import {Container} from 'inversify';
import {MenuApiClient} from './modules';
import {API_CLIENT} from './ids';
import {IMenuAPIClient} from './modules/menu/interface';

export const integrationContainer = new Container();

integrationContainer.bind<IMenuAPIClient>(API_CLIENT.Menu).to(MenuApiClient);
