import React from 'react';
import {SkeletonFieldControl} from '../SkeletonFieldControl';
import {BaseFieldControlProps, fieldControlClassNames} from '../index';
import {SliderFieldControlEdit} from './SliderFieldControlEdit';
import {SliderFieldControlView} from './SliderFieldControlView';
import {SliderProps} from '@material-ui/core';

export type SliderFieldControlProps = Omit<SliderProps, 'onChange'> &
  BaseFieldControlProps & {
    endAdornment?: JSX.Element | string;
    onChange?: (value?: number | number[]) => void;
    format?: string;
  };

export const SliderFieldControl = (props: SliderFieldControlProps) => {
  const {isEdit = true, loading, className, ...other} = props;

  const cls = fieldControlClassNames('slider-field-control', props);

  return loading ? (
    <SkeletonFieldControl className={cls} />
  ) : isEdit ? (
    <SliderFieldControlEdit className={cls} {...other} />
  ) : (
    <SliderFieldControlView className={cls} {...other} />
  );
};
