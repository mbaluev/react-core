import {Container} from 'inversify';
import {ERRORS_MODULE} from '../errors';
import {ApiModule} from './modules';
import {INFRASTRUCTURE_MODULE} from './ids';
import {IErrorsModule} from '../errors/modules/base/interface';

export const infrastructureContainer = new Container();

infrastructureContainer
  .bind(INFRASTRUCTURE_MODULE.Core)
  .toDynamicValue(({container}) => {
    const errorsContainer = container.get<IErrorsModule>(ERRORS_MODULE);
    const apiBase = process.env.REACT_APP_CORE_URL || 'unknown/';
    return new ApiModule(apiBase, errorsContainer);
  });
