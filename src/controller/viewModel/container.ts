import {Container} from 'inversify';
import {VIEW_MODEL} from './ids';
import {MenuViewModel} from './modules';
import {AppViewModel} from './modules/app';
import {IAppViewModel} from './modules/app/interface';
import {IMenuViewModel} from './modules/menu/interface';
import {IFilterViewModel} from './modules/filter/interfaces';
import {FilterViewModel} from './modules/filter';

export const viewModelContainer = new Container({defaultScope: 'Singleton'});

viewModelContainer.bind<IAppViewModel>(VIEW_MODEL.App).to(AppViewModel);

viewModelContainer.bind<IMenuViewModel>(VIEW_MODEL.Menu).to(MenuViewModel);

viewModelContainer
  .bind<IFilterViewModel>(VIEW_MODEL.Filter)
  .to(FilterViewModel);
