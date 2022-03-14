import {Bootstrap} from '../bootstrap';
import {IAppConfig} from '../appConfig';
import {Config} from './config';

export const init = async (): Promise<{
  bootstrap: Bootstrap;
  config: IAppConfig;
}> => {
  const bootstrap = new Bootstrap();
  await bootstrap.getDiContainer();
  await bootstrap.start();

  const routes = Config.getRoutes();
  const routerConst = Config.getRouterConst();

  bootstrap.initRouter(routes, routerConst);
  return {bootstrap: bootstrap, config: Config};
};
