import {BaseViewModel} from '../base';
import {inject, injectable} from 'inversify';
import {IAppViewModel} from './interface';
import {VIEW_MODEL} from '../../ids';
import {IFilterViewModel} from '../filter/interfaces';
import {State} from 'router5';
import {IMenuViewModel} from '../menu/interface';

@injectable()
export class AppViewModel extends BaseViewModel implements IAppViewModel {
  @inject(VIEW_MODEL.Filter) private filter!: IFilterViewModel;
  @inject(VIEW_MODEL.Menu) private menu!: IMenuViewModel;

  private toState?: State;
  private fromState?: State;

  startRouting = (toState?: State, fromState?: State): void => {
    this.setLoading(true);
    this.menu.setActive(toState?.name);
    this.toState = toState;
    this.fromState = fromState;
  };

  startMiddleware = (toState?: State, fromState?: State) => {};

  endMiddleware = (toState?: State, fromState?: State) => {};

  endRouting = (toState?: State, fromState?: State) => {
    this.setLoading(false);
  };

  mountPage = () => {
    if (this.toState) {
      const {setFilters} = this.filter;
      const {id, ...params} = this.toState.params;
      setFilters(params, this.toState.name);
    }
  };

  unmountPage = () => {
    const {unsubscribeOnFiltersAll} = this.filter;
    unsubscribeOnFiltersAll();
  };
}
