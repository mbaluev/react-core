import React from 'react';
import {ROUTER_CONST} from '../../core/app/settings/routerConst';
import {QuoteList} from './quoteList';
import {QuoteDetails} from './quoteDetails';

export const mapUrlToComponent_quote = (urlPath: string): JSX.Element => {
  return mapUrlToComponents.get(urlPath);
};

const mapUrlToComponents = new Map()
  .set(ROUTER_CONST.QUOTES.fullName, <QuoteList />)
  .set(ROUTER_CONST.QUOTES.DETAILS.fullName, <QuoteDetails />);
