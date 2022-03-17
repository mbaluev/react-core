import {Container} from 'inversify';
import {createDIContainer} from './createDIContainer';
import {errorsContainer} from '../../../controller/errors';
import {infrastructureContainer} from '../../../controller/infrastructure';
import {integrationContainer} from '../../../controller/integration';
import {serviceContainer} from '../../../controller/business';
import {VIEW_MODEL, viewModelContainer} from '../../../controller/viewModel';
import {createRouter, Route, Router} from 'router5';
import {initRouter} from '../router/initRouter';
import {IMenuViewModel} from '../../../controller/viewModel/modules/menu/interface';
import moment from 'moment';
import numeral from 'numeral';

moment.locale('en');
numeral.locale('en');

export class Bootstrap {
  private readonly diContainer: Container;
  private router: Router;

  constructor() {
    this.router = createRouter();
    this.diContainer = createDIContainer(
      errorsContainer,
      infrastructureContainer,
      integrationContainer,
      serviceContainer,
      viewModelContainer
    );
  }

  initRouter = (routes: Route[], routerConst: any) => {
    this.router = initRouter(routes);
    this.router.setDependencies({container: this.diContainer});
    this.router.setDependencies({routerConst});
  };

  getDiContainer(): Container {
    return this.diContainer;
  }

  getRouter(): Router {
    return this.router;
  }

  async start() {
    const menuViewModel = this.diContainer.get<IMenuViewModel>(VIEW_MODEL.Menu);
    await menuViewModel.load();
  }
}
