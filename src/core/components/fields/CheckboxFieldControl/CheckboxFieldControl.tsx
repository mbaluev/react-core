import React from 'react';
import {CheckboxFieldControlView} from './CheckboxFieldControlView';
import {CheckboxFieldControlEdit} from './CheckboxFieldControlEdit';
import {SkeletonFieldControl} from '../SkeletonFieldControl';
import {BaseFieldControlProps, fieldControlClassNames} from '../index';
import {CheckboxProps} from '@material-ui/core';

export type CheckboxFieldControlProps = CheckboxProps &
  BaseFieldControlProps & {
    label?: string;
    value?: boolean;
  };

export const CheckboxFieldControl = (props: CheckboxFieldControlProps) => {
  const {isEdit = true, loading, className, ...other} = props;

  const cls = fieldControlClassNames('checkbox-field-control', props);

  return loading ? (
    <SkeletonFieldControl className={cls} />
  ) : isEdit ? (
    <CheckboxFieldControlEdit className={cls} {...other} />
  ) : (
    <CheckboxFieldControlView className={cls} {...other} />
  );
};
