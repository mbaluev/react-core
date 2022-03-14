import {useContainer} from '../useContainer';

export const useViewModel = <T>(symbol: symbol): T => {
  const container = useContainer();
  if (!container) {
    throw Error('Container is not defined');
  }
  if (!container.isBound(symbol)) {
    throw Error('View model does not bound in container');
  }
  return container.get<T>(symbol);
};
