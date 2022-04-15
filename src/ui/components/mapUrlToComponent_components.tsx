import React from 'react';
import {ROUTER_CONST} from '../../core/app/settings/routerConst';
import {Components} from './components';

export const mapUrlToComponent_components = (urlPath: string): JSX.Element => {
  return mapUrlToComponents.get(urlPath);
};

const mapUrlToComponents = new Map().set(
  ROUTER_CONST.COMPONENTS.fullName,
  <Components />
);
