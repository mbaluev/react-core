import React from 'react';
import {ROUTER_CONST} from '../../core/app/settings/routerConst';
import {ProductList} from './productList';
import {ProductDetails} from './productDetails';

export const mapUrlToComponent_product = (urlPath: string): JSX.Element => {
  return mapUrlToComponents.get(urlPath);
};

const mapUrlToComponents = new Map()
  .set(ROUTER_CONST.PRODUCTS.fullName, <ProductList />)
  .set(ROUTER_CONST.PRODUCTS.DETAILS.fullName, <ProductDetails />);
