import React from 'react';
import {SwitchFieldControlView} from './SwitchFieldControlView';
import {SwitchFieldControlEdit} from './SwitchFieldControlEdit';
import {SkeletonFieldControl} from '../SkeletonFieldControl';
import {BaseFieldControlProps, fieldControlClassNames} from '../index';
import {SwitchProps} from '@material-ui/core';

export type SwitchFieldControlProps = SwitchProps &
  BaseFieldControlProps & {
    label?: string;
    value?: boolean;
    labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
  };

export const SwitchFieldControl = (props: SwitchFieldControlProps) => {
  const {isEdit = true, loading, className, ...other} = props;

  const cls = fieldControlClassNames('switch-field-control', props);

  return loading ? (
    <SkeletonFieldControl className={cls} />
  ) : isEdit ? (
    <SwitchFieldControlEdit className={cls} {...other} />
  ) : (
    <SwitchFieldControlView className={cls} {...other} />
  );
};
