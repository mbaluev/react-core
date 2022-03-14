import React from 'react';
import {observer} from 'mobx-react';
import {PageLayout} from '../../core/components/pageLayout';

export const Home = observer(() => {
  return <PageLayout title="home">home</PageLayout>;
});
