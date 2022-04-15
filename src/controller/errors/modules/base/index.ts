import {action, makeObservable, observable} from 'mobx';
import {guid} from '../../../../core/utils/guid/guid';
import {IErrorsModule} from './interface';
import {injectable} from 'inversify';

@injectable()
export class ErrorsModule implements IErrorsModule {
  errors: any[] = [];

  constructor() {
    makeObservable(this, {
      errors: observable,
      setErrors: action,
      add: action,
      remove: action,
      removeAfter: action,
    });
  }

  setErrors = (errors: any[]) => {
    this.errors = errors;
  };

  add = (error: any) => {
    let message;
    if (error.response) {
      message = error.response.statusText;
      if (error.response.data) {
        if (error.response.data.error) {
          message = error.response.data.error;
          if (error.response.data.error.message)
            message = error.response.data.error.message;
        }
      }
    } else {
      message = error.message;
    }
    if (!message) message = error;
    const newError = {
      guid: guid(),
      error: error,
      message: message,
    };
    const errors = [...this.errors, newError];
    this.setErrors(errors);
    this.removeAfter(newError.guid, 15);
    return newError;
  };

  remove = (guid: string) => {
    const errors = this.errors.filter((err) => err.guid !== guid);
    this.setErrors(errors);
  };

  removeAfter = (guid: string, s: number) => {
    setTimeout(() => this.remove(guid), 1000 * s);
  };
}
