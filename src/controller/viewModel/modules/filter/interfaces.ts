import {Params} from 'router5/dist/types/base';

export interface IFilterViewModel {
  subscribeOnFilters: (
    callback: (filters: Record<string, string>) => void
  ) => void;
  unsubscribeOnFiltersAll: () => void;

  filters: Params;
  getFilter: (key: string) => any;
  setFilter: (key: string, value: any, routeName?: string) => void;
  setFilterObject: (object: Record<string, string>, routeName?: string) => void;
  setFilters: (filters: Params, routeName?: string) => void;
  setFiltersToSessionStorage: (routeName?: string) => void;
  parseFilters: (filters: Record<string, any>) => Record<string, any>;

  isPanel?: boolean;
  isPanelOpen?: boolean;
  setIsPanel: (value?: boolean) => void;
  setIsPanelOpen: (value?: boolean) => void;
}
