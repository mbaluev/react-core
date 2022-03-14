import React from 'react';
import {ROUTER_CONST} from './routerConst';
import {Home} from '../../../ui/home';
import {mapUrlToComponent_product} from '../../../ui/product/mapUrlToComponent_product';
import {mapUrlToComponent_quote} from '../../../ui/quotes/mapUrlToComponent_quote';
import {Fields} from '../../../ui/fields';

export const mapPage = (segment: string, path: string): JSX.Element | null => {
  switch (segment) {
    case ROUTER_CONST.HOME.name:
      return <Home />;
    case ROUTER_CONST.FIELDS.name:
      return <Fields />;
    case ROUTER_CONST.PRODUCTS.name:
      return mapUrlToComponent_product(path);
    case ROUTER_CONST.QUOTES.name:
      return mapUrlToComponent_quote(path);
    default:
      return null;
  }
};