import React from 'react';
import {useRoute} from 'react-router5';
import {observer} from 'mobx-react-lite';
import {constants} from 'router5';
import useRouteSegment from '../../../hooks/useRouteSegment';
import {Page404} from '../../../components/error/errorPage/404';
import {Layout} from '../../../components/layout';

const MainContainer = (
  mapPage: (segment: string, route: string) => JSX.Element | null
) => {
  const {route} = useRoute();
  const segment = useRouteSegment();
  if (segment === constants.UNKNOWN_ROUTE) {
    return <Page404 />;
  }
  const page = mapPage(segment, route.name);
  return <MainContainerApp page={page} />;
};

const MainContainerApp = observer(({page}: {page: JSX.Element | null}) => {
  return <Layout>{page}</Layout>;
});

export default MainContainer;
