import React, {FC} from 'react';
import {observer} from 'mobx-react';
import './index.less';

export const ErrorPage: FC = observer((props) => {
  const {children} = props;
  return <div className="error-page">{children}</div>;
});
