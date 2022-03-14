import React, {FC} from 'react';
import {observer} from 'mobx-react';
import {classNames} from '../../utils/classNames';
import './index.less';

interface IProps {
  className?: string;
  title?: string;
}

export const PageLayout: FC<IProps> = observer((props) => {
  const {className, title, children} = props;
  const cls = classNames('page-layout', className);
  return (
    <div className={cls}>
      {title && <div className="page-layout__title">{title}</div>}
      <div className="page-layout__container">{children}</div>
    </div>
  );
});
