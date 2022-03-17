import {Skeleton} from '@material-ui/lab';
import React from 'react';
import {classNames} from '../../../utils/classNames';
import './index.less';

interface IProps {
  className?: string;
}
export const SkeletonFieldControl = (props: IProps) => {
  const {className} = props;
  const cls = classNames('skeleton-field-control', 'field-control', className);
  return (
    <div className={cls}>
      <Skeleton />
    </div>
  );
};
