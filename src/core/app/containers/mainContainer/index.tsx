import React from 'react';
import {useRoute} from 'react-router5';
import {observer} from 'mobx-react-lite';
import {constants} from 'router5';
import useRouteSegment from '../../../hooks/useRouteSegment';
import {Layout} from '../../../components/layout';
import useRouterConst from '../../../hooks/useRouterConst';
import {Layout404} from '../../../components/error/errorPage/404';

const MainContainer = (
  mapPage: (segment: string, route: string) => JSX.Element | null
) => {
  const {route} = useRoute();
  const segment = useRouteSegment();
  const ROUTER_CONST = useRouterConst();

  if (
    segment === constants.UNKNOWN_ROUTE ||
    (segment === ROUTER_CONST.COMPONENTS.fullName &&
      process.env.NODE_ENV !== 'development')
  ) {
    return <Layout404 />;
  }

  const page = mapPage(segment, route.name);

  return <MainContainerApp page={page} />;
};

const MainContainerApp = observer(({page}: {page: JSX.Element | null}) => {
  return <Layout>{page}</Layout>;
});

export default MainContainer;
