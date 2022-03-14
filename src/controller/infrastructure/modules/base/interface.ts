import {Params} from 'router5/dist/types/base';

export interface IApiModule {
  get: <T>(url: string, data?: Params) => Promise<T>;
  post: <T>(url: string, data?: Params) => Promise<T>;
  put: <T>(url: string, data?: Params) => Promise<T>;
  delete: <T>(url: string, data?: Params) => Promise<T>;
  patch: <T>(url: string, data?: Params) => Promise<T>;
}
