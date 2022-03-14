import {Container} from 'inversify';
import {MiddlewareFactory, Route, Router} from 'router5/dist/types/router';

export type RouterDependencies = Record<string, Container>;

const findSegment = (toStateName: string, routes: Route[]): Route | null => {
  return toStateName
    .split('.')
    .reduce<Route | null>((curSegment, curRouteName: string) => {
      if (curSegment && curSegment.children) {
        return (
          curSegment.children.find((seg: Route) => seg.name === curRouteName) ||
          null
        );
      }
      return routes.find((seg: any) => seg.name === curRouteName) || null;
    }, null);
};

export const onEnterMiddlewareFactory =
  (
    routes: Route<RouterDependencies>[]
  ): MiddlewareFactory<RouterDependencies> =>
  (router: Router<RouterDependencies>) =>
  async (toState): Promise<boolean> => {
    const segment = findSegment(toState.name, routes);

    if (segment && (segment as any).onEnter) {
      await (segment as any).onEnter(toState.params, router);
    }

    return true;
  };
