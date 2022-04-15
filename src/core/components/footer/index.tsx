import React from 'react';
import {observer} from 'mobx-react';
import moment from 'moment';
import './index.less';

export const Footer = observer(() => {
  return (
    <div className="footer">
      <div className="footer__container">
        Online Shop&nbsp;&nbsp;•&nbsp;&nbsp;{moment().year()}
      </div>
    </div>
  );
});
