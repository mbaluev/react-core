import React, {FC} from 'react';
import {Container} from 'inversify';

interface IDIContainerProviderProps {
  container: Container;
}

export const DIContainerContext = React.createContext<Container | null>(null);

export const DIContainerProvider: FC<IDIContainerProviderProps> = ({
  container,
  children,
}) => (
  <DIContainerContext.Provider value={container}>
    {children}
  </DIContainerContext.Provider>
);
