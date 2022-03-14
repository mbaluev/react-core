import {IMenuItem} from './index';
import {ROUTER_CONST} from '../../../core/app/settings/routerConst';

export const MENU_CONFIG: IMenuItem[] = [
  {
    id: '1',
    type: 'link',
    label: 'Home',
    path: ROUTER_CONST.HOME.fullName,
  },
  {
    id: '2',
    type: 'link',
    label: 'Quotes',
    path: ROUTER_CONST.QUOTES.fullName,
  },
  {
    id: '3',
    type: 'link',
    label: 'Catalog',
    path: ROUTER_CONST.PRODUCTS.fullName,
  },
  {
    id: '4',
    type: 'link',
    label: 'Fields',
    path: ROUTER_CONST.FIELDS.fullName,
  },
];
