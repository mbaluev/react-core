import {VIEW_MODEL} from '../../../controller/viewModel';
import {useContainer} from '../useContainer';
import {IFilterViewModel} from '../../../controller/viewModel/modules/filter/interfaces';

export const useFilters = () => {
  const container = useContainer();
  return container.get<IFilterViewModel>(VIEW_MODEL.Filter);
};
