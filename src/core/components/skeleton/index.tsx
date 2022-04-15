import React from 'react';
import {classNames} from '../../utils/classNames/classNames';
import {SkeletonProps} from '@material-ui/lab';
import {Skeleton as SkeletonMui} from '@material-ui/lab';
import './index.less';

export const Skeleton = (props: SkeletonProps) => {
  const {className, ...other} = props;
  const cls = classNames('skeleton', className);
  return <SkeletonMui className={cls} {...other} />;
};
