import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {IApiModule} from './interface';
import {Params} from 'router5/dist/types/base';
import {IErrorsModule} from '../../../errors/modules/base/interface';
import {HttpMethod} from './const';

export class ApiModule implements IApiModule {
  private readonly api: AxiosInstance;
  protected errorsContainer: IErrorsModule;

  constructor(url: string, errorsContainer: IErrorsModule, params?: Params) {
    this.errorsContainer = errorsContainer;
    this.api = axios.create({
      baseURL: url,
      params: params,
    });
  }

  async fetch(config: AxiosRequestConfig<any>) {
    try {
      const response = await this.api(config);
      return response.data;
    } catch (error: any) {
      const err = this.errorsContainer.add(error);
      return new Promise((_, reject) => reject(err));
    }
  }

  async get(url: string, data?: Params) {
    return await this.fetch({
      method: HttpMethod.GET,
      url: url,
      data: data,
    });
  }
  async post(url: string, data?: Params) {
    return await this.fetch({
      method: HttpMethod.POST,
      url: url,
      data: data,
    });
  }
  async put(url: string, data?: Params) {
    return await this.fetch({
      method: HttpMethod.PUT,
      url: url,
      data: data,
    });
  }
  async delete(url: string, data?: Params) {
    return await this.fetch({
      method: HttpMethod.DELETE,
      url: url,
      data: data,
    });
  }
  async patch(url: string, data?: Params) {
    return await this.fetch({
      method: HttpMethod.PATCH,
      url: url,
      data: data,
    });
  }
}
