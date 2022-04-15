import createRouter, {Route, Router} from 'router5';
import browserPlugin from 'router5-plugin-browser';
import {onEnterMiddlewareFactory} from './onEnter';
import {lifeCyclePlugin} from './lifeCyclePlugin';

export const initRouter = (routes: Route[]): Router => {
  const router = createRouter(routes, {
    allowNotFound: true,
    queryParamsMode: 'loose',
    autoCleanUp: false,
  });

  router.useMiddleware(onEnterMiddlewareFactory(routes));

  router.usePlugin(
    browserPlugin({
      useHash: true,
    }),
    lifeCyclePlugin
  );

  return router;
};
