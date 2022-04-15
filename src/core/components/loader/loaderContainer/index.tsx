import React from 'react';
import {observer} from 'mobx-react';
import {useViewModel} from '../../../hooks/useViewModel';
import {VIEW_MODEL} from '../../../../controller/viewModel';
import {Loader} from '../index';

export const LoaderContainer = observer(() => {
  const {isLoading: loadingApp} = useViewModel(VIEW_MODEL.App);
  const loading = loadingApp;
  return <Loader loading={loading} backdrop={true} />;
});
