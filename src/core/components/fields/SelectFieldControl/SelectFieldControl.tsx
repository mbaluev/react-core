import React from 'react';
import {SelectProps} from '@material-ui/core/Select/Select';
import {SelectInputProps} from '@material-ui/core/Select/SelectInput';
import {SelectFieldControlView} from './SelectFieldControlView';
import {SelectFieldControlEdit} from './SelectFieldControlEdit';
import {SkeletonFieldControl} from '../SkeletonFieldControl';
import {BaseFieldControlProps, fieldControlClassNames} from '../index';

export interface ISelectItem {
  value?: number | string;
  label: string;
  disabled?: boolean;
}

export type SelectFieldControlProps = SelectProps &
  BaseFieldControlProps & {
    items?: ISelectItem[];
    onChange?: SelectInputProps['onChange'];
  };

export const findSelectItem = (items?: ISelectItem[], value?: any) => {
  return items?.find((item) => {
    return String(item.value) === String(value);
  });
};

export const SelectFieldControl = (props: SelectFieldControlProps) => {
  const {isEdit = true, loading, className, ...other} = props;

  const cls = fieldControlClassNames('select-field-control', props);

  return loading ? (
    <SkeletonFieldControl className={cls} />
  ) : isEdit ? (
    <SelectFieldControlEdit className={cls} {...other} />
  ) : (
    <SelectFieldControlView className={cls} {...other} />
  );
};
