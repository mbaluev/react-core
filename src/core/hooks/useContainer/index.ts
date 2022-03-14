import React from 'react';
import {Container} from 'inversify';
import {DIContainerContext} from '../../app/providers/diContainerProvider';

export const useContainer = (): Container => {
  const container = React.useContext(DIContainerContext);
  return container as Container;
};
