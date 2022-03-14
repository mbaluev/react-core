import React, {FC} from 'react';
import {observer} from 'mobx-react';
import {Layout} from '../../layout';
import './index.less';

export const ErrorPage: FC = observer((props) => {
  const {children} = props;
  return (
    <Layout>
      <div className="error-page">{children}</div>
    </Layout>
  );
});
