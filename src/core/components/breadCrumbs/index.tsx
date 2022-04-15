import React, {FC} from 'react';
import {observer} from 'mobx-react';
import {classNames} from '../../utils/classNames/classNames';
import {BreadCrumb, TBreadCrumb} from './breadCrumb';
import './index.less';

interface IProps {
  className?: string;
  breadCrumbs?: TBreadCrumb[];
}

export const BreadCrumbs: FC<IProps> = observer((props) => {
  const {className, breadCrumbs} = props;
  const cls = classNames('bread-crumbs', className);
  return (
    <div className={cls}>
      {breadCrumbs?.map((item, index) => (
        <BreadCrumb key={index} {...item} />
      ))}
    </div>
  );
});
