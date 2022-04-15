import {Container} from 'inversify';
import {ApiModule} from './modules';
import {INFRASTRUCTURE_MODULE} from './ids';
import {IApiModule} from './modules/base/interface';

export const infrastructureContainer = new Container();

infrastructureContainer
  .bind<IApiModule>(INFRASTRUCTURE_MODULE.Core)
  .to(ApiModule);
