import React from 'react';
import {RadioGroupFieldControlView} from './RadioGroupFieldControlView';
import {RadioGroupFieldControlEdit} from './RadioGroupFieldControlEdit';
import {SkeletonFieldControl} from '../SkeletonFieldControl';
import {BaseFieldControlProps, fieldControlClassNames} from '../index';
import {RadioGroupProps} from '@material-ui/core';

export interface IRadioItem {
  value: string;
  label: string;
}

export type RadioGroupFieldControlProps = RadioGroupProps &
  BaseFieldControlProps & {
    items: IRadioItem[];
    value?: string;
    disabled?: boolean;
    layout?: 'vertical' | 'horizontal';
  };

export const RadioGroupFieldControl = (props: RadioGroupFieldControlProps) => {
  const {isEdit = true, loading, className, ...other} = props;

  const cls = fieldControlClassNames('radio-group-field-control', props);

  return loading ? (
    <SkeletonFieldControl className={cls} />
  ) : isEdit ? (
    <RadioGroupFieldControlEdit className={cls} {...other} />
  ) : (
    <RadioGroupFieldControlView className={cls} {...other} />
  );
};
