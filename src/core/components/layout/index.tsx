import React, {FC} from 'react';
import {observer} from 'mobx-react';
import {LoaderContainer} from '../loader/loaderContainer';
import ErrorList from '../error/errorList';
import {Header} from '../header';
import './index.less';

export const Layout: FC = observer(({children}) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__content">{children}</div>
      <LoaderContainer />
      <ErrorList />
    </div>
  );
});
