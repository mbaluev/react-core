import {IMenuItemDTO} from './index';
import {ROUTER_CONST} from '../../../core/app/settings/routerConst';

export const MENU_CONFIG: IMenuItemDTO[] = [
  {
    label: 'Home',
    path: ROUTER_CONST.HOME.fullName,
    position: 'left',
  },
  {
    label: 'Catalog',
    path: ROUTER_CONST.PRODUCTS.fullName,
    position: 'left',
  },
  {
    label: 'Components',
    path: ROUTER_CONST.COMPONENTS.fullName,
    position: 'left',
  },
];
