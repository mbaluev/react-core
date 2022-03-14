import MainContainer from '../containers/mainContainer';
import {AppConfig, IAppConfig} from '../appConfig';
import {mapPage} from '../settings/mapPage';
import {ROUTER_CONST} from '../settings/routerConst';
import {routes} from '../settings/routes';

export const Config: IAppConfig = new AppConfig(
  () => MainContainer(mapPage),
  ROUTER_CONST,
  routes
);
