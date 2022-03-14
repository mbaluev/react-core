import {BaseViewModel} from '../base';
import {action, makeObservable, observable} from 'mobx';
import {IMenuViewModel} from './interface';
import {IMenuService} from '../../../business/modules/menu/interface';
import {IMenuItem} from '../../../model/menu';

export class MenuViewModel extends BaseViewModel implements IMenuViewModel {
  data: IMenuItem[] = [];

  constructor(protected service: IMenuService) {
    super();
    makeObservable(this, {
      data: observable,
      setData: action,
      setActive: action,
      load: action,
    });
    this.service = service;
  }

  setData = (data: IMenuItem[]) => {
    this.data = data;
  };

  load = async () => {
    this.setLoading(true);
    try {
      const data = await this.service.load();
      this.setData(data);
    } finally {
      this.setLoading(false);
    }
  };

  setActive = (name: string) => {
    const data = this.data?.map((item) => {
      item.isActive = item.path?.includes(name);
      return item;
    });
    this.setData(data);
  };
}
