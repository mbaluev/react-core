import React from 'react';
import {observer} from 'mobx-react';
import {classNames} from '../../../utils/classNames/classNames';
import {Skeleton} from '../../skeleton';
import './index.less';

export const BreadCrumbsSkeleton = observer(() => {
  const cls = classNames('bread-crumbs', 'bread-crumbs__skeleton');
  return (
    <div className={cls}>
      <div className="bread-crumb">
        <Skeleton width={50} />
      </div>
      <div className="bread-crumb">
        <Skeleton width={200} />
      </div>
    </div>
  );
});
