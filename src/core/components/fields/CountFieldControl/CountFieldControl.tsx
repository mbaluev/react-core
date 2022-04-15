import React from 'react';
import {SkeletonFieldControl} from '../SkeletonFieldControl';
import {BaseFieldControlProps, fieldControlClassNames} from '../index';
import {CountFieldControlEdit} from './CountFieldControlEdit';
import {CountFieldControlView} from './CountFieldControlView';
import {SliderProps} from '@material-ui/core';

export type CountFieldControlProps = Omit<SliderProps, 'onChange' | 'value'> &
  BaseFieldControlProps & {
    value: number;
    endAdornment?: JSX.Element | string;
    onChange?: (value: number) => void;
    format?: string;
  };

export const CountFieldControl = (props: CountFieldControlProps) => {
  const {isEdit = true, loading, className, ...other} = props;

  const cls = fieldControlClassNames('count-field-control', props);

  return loading ? (
    <SkeletonFieldControl className={cls} />
  ) : isEdit ? (
    <CountFieldControlEdit className={cls} {...other} />
  ) : (
    <CountFieldControlView className={cls} {...other} />
  );
};
