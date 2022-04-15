import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {IApiModule} from './interface';
import {Params} from 'router5/dist/types/base';
import {IErrorsModule} from '../../../errors/modules/base/interface';
import {HttpMethod, REACT_APP_CORE_URL} from './const';
import {inject, injectable} from 'inversify';
import {ERRORS_MODULE} from '../../../errors';

@injectable()
export class ApiModule implements IApiModule {
  @inject(ERRORS_MODULE) private errorsContainer!: IErrorsModule;

  private readonly api: AxiosInstance;
  protected prefixUrl: string = REACT_APP_CORE_URL;

  constructor() {
    this.api = axios.create({
      baseURL: this.prefixUrl,
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
