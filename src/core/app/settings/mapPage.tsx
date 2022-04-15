import React from 'react';
import {ROUTER_CONST} from './routerConst';
import {mapUrlToComponent_home} from "../../../ui/home/mapUrlToComponent_home";
import {mapUrlToComponent_components} from "../../../ui/components/mapUrlToComponent_components";
import {mapUrlToComponent_product} from '../../../ui/product/mapUrlToComponent_product';
import {LifeCycle} from "../lifeCycle";

export const mapPage = (segment: string, path: string): JSX.Element | null => {
  switch (segment) {
    case ROUTER_CONST.HOME.name:
      return <LifeCycle>{mapUrlToComponent_home(path)}</LifeCycle>;
    case ROUTER_CONST.COMPONENTS.name:
      return <LifeCycle>{mapUrlToComponent_components(path)}</LifeCycle>;
    case ROUTER_CONST.PRODUCTS.name:
      return <LifeCycle>{mapUrlToComponent_product(path)}</LifeCycle>;
    default:
      return null;
  }
};
