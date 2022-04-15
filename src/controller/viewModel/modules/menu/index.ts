import {BaseViewModel} from '../base';
import {action, makeObservable, observable} from 'mobx';
import {inject, injectable} from 'inversify';
import {SERVICE} from '../../../business';
import {IMenuViewModel} from './interface';
import {IMenuService} from '../../../business/modules/menu/interface';
import {IMenuItemDTO} from '../../../model/menu';

@injectable()
export class MenuViewModel extends BaseViewModel implements IMenuViewModel {
  @inject(SERVICE.Menu) private service!: IMenuService;

  data: IMenuItemDTO[] = [];

  constructor() {
    super();
    makeObservable(this, {
      data: observable,

      load: action,
      setData: action,
      setActive: action,
    });
  }

  load = async () => {
    this.setLoading(true);
    try {
      const data = await this.service.load();
      this.setData(data);
    } finally {
      this.setLoading(false);
    }
  };
  setData = (data: IMenuItemDTO[]) => {
    this.data = data;
  };
  setActive = (name?: string) => {
    const data = this.data?.map((item) => {
      item.isActive = name ? item.path?.includes(name) : false;
      return item;
    });
    this.setData(data);
  };
}
