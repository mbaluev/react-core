import {Router} from 'router5';
import {Params} from 'router5/dist/types/base';
import {ROUTER_CONST} from './routerConst';
import {RouterDependencies} from '../router/onEnter';

export const routes = [
  {
    name: ROUTER_CONST.HOME.name,
    path: ROUTER_CONST.HOME.path,
    onEnter: (params: Params, router: Router<RouterDependencies>): void => {
      // const container = router.getDependencies().container;
    },
  },
  {
    name: ROUTER_CONST.FIELDS.name,
    path: ROUTER_CONST.FIELDS.path,
    onEnter: (params: Params, router: Router<RouterDependencies>): void => {
      // const container = router.getDependencies().container;
    },
  },
  {
    name: ROUTER_CONST.PRODUCTS.name,
    path: ROUTER_CONST.PRODUCTS.path,
    onEnter: (params: Params, router: Router<RouterDependencies>): void => {},
    children: [
      {
        name: ROUTER_CONST.PRODUCTS.DETAILS.name,
        path: ROUTER_CONST.PRODUCTS.DETAILS.path,
        onEnter: (
          params: Params,
          router: Router<RouterDependencies>
        ): void => {},
      },
    ],
  },
  {
    name: ROUTER_CONST.QUOTES.name,
    path: ROUTER_CONST.QUOTES.path,
    onEnter: (params: Params, router: Router<RouterDependencies>): void => {},
    children: [
      {
        name: ROUTER_CONST.QUOTES.DETAILS.name,
        path: ROUTER_CONST.QUOTES.DETAILS.path,
        onEnter: (
          params: Params,
          router: Router<RouterDependencies>
        ): void => {},
      },
    ],
  },
];
