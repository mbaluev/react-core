import {action, makeObservable, observable} from 'mobx';
import {injectable} from 'inversify';
import {IBaseViewModel} from './interface';

@injectable()
export class BaseViewModel implements IBaseViewModel {
  isLoading = false;
  isEdit = false;
  isOpen = false;

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      isEdit: observable,
      isOpen: observable,
      setLoading: action,
      setEdit: action,
      setOpen: action,
    });
  }

  setLoading = (isLoading: boolean) => {
    this.isLoading = isLoading;
  };
  setEdit = (isEdit: boolean) => {
    this.isEdit = isEdit;
  };
  setOpen = (isOpen: boolean) => {
    this.isOpen = isOpen;
  };
}
