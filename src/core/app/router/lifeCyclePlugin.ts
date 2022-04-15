import {State} from 'router5';
import {DefaultDependencies, Plugin, Router} from 'router5/dist/types/router';
import {RouterDependencies} from './onEnter';
import {VIEW_MODEL} from '../../../controller/viewModel';
import {IAppViewModel} from '../../../controller/viewModel/modules/app/interface';

export const lifeCyclePlugin = (
  router?: Router<RouterDependencies>,
  dependencies?: DefaultDependencies
): Plugin => ({
  onStart: () => {},
  onStop: () => {},
  onTransitionStart: async (toState?: State, fromState?: State) => {
    const container = router?.getDependencies().container;
    const lifeCycle = container?.get<IAppViewModel>(VIEW_MODEL.App);
    lifeCycle?.startRouting(toState, fromState);
  },
  onTransitionSuccess: (toState?: State, fromState?: State): void => {
    const container = router?.getDependencies().container;
    const lifeCycle = container?.get<IAppViewModel>(VIEW_MODEL.App);
    lifeCycle?.endRouting(toState, fromState);
  },
  onTransitionCancel: (toState?: State, fromState?: State) => {},
  onTransitionError: (toState?: State, fromState?: State, err?: any) => {},
  teardown: () => {},
});
