import React from 'react';
import {DIContainerProvider} from '../providers/diContainerProvider';
import {Container} from 'inversify';
import {Router} from 'router5';
import {RouterProvider} from 'react-router5';

export const render = (
  container: Container,
  router: Router,
  App: () => JSX.Element
) => {
  return (
    <RouterProvider router={router}>
      <DIContainerProvider container={container}>
        <App />
      </DIContainerProvider>
    </RouterProvider>
  );
};
