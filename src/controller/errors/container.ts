import {Container} from 'inversify';
import {ErrorsModule} from './modules';
import {ERRORS_MODULE} from './ids';

export const errorsContainer = new Container();

errorsContainer.bind(ERRORS_MODULE).to(ErrorsModule);
