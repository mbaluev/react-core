import React from 'react';
import {ROUTER_CONST} from '../../core/app/settings/routerConst';
import {Home} from './home';

export const mapUrlToComponent_home = (urlPath: string): JSX.Element => {
  return mapUrlToComponents.get(urlPath);
};

const mapUrlToComponents = new Map().set(ROUTER_CONST.HOME.fullName, <Home />);
