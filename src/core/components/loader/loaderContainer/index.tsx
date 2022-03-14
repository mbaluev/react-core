import React from 'react';
import {observer} from 'mobx-react';
import {useViewModel} from '../../../hooks/useViewModel';
import {VIEW_MODEL} from '../../../../controller/viewModel';
import {IMenuViewModel} from '../../../../controller/viewModel/modules/menu/interface';
import {Loader} from '../index';

export const LoaderContainer = observer(() => {
  const {isLoading: loadingMenu} = useViewModel<IMenuViewModel>(
    VIEW_MODEL.Menu
  );
  return <Loader loading={loadingMenu} />;
});
