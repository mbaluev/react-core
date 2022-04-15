import React, {FC, useEffect} from 'react';
import {VIEW_MODEL} from '../../../controller/viewModel';
import {useViewModel} from '../../hooks/useViewModel';
import {IAppViewModel} from '../../../controller/viewModel/modules/app/interface';

export const LifeCycle: FC = ({children}) => {
  const appViewModel = useViewModel<IAppViewModel>(VIEW_MODEL.App);

  useEffect(() => {
    appViewModel.mountPage();
    return () => appViewModel.unmountPage();
  });

  return <React.Fragment>{children}</React.Fragment>;
};
