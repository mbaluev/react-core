import {IBaseViewModel} from '../base/interface';
import {State} from 'router5';

export interface IAppViewModel extends IBaseViewModel {
  startRouting: (toState?: State, fromState?: State) => void;
  startMiddleware: (toState?: State, fromState?: State) => void;
  endMiddleware: (toState?: State, fromState?: State) => void;
  endRouting: (toState?: State, fromState?: State) => void;
  mountPage: () => void;
  unmountPage: () => void;
}
