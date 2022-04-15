import React, {FC} from 'react';
import {observer} from 'mobx-react';
import {classNames} from '../../utils/classNames/classNames';
import './index.less';

interface IProps {
  className?: string;
}

export const Filter: FC<IProps> = observer((props) => {
  const {className, children} = props;
  const cls = classNames('filter', className);
  return <div className={cls}>{children}</div>;
});
