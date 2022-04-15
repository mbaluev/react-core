import React from 'react';
import {SelectProps} from '@material-ui/core/Select/Select';
import {SelectInputProps} from '@material-ui/core/Select/SelectInput';
import {MultiSelectFieldControlView} from './MultiSelectFieldControlView';
import {MultiSelectFieldControlEdit} from './MultiSelectFieldControlEdit';
import {SkeletonFieldControl} from '../SkeletonFieldControl';
import {ISelectItem} from '../SelectFieldControl';
import {BaseFieldControlProps, fieldControlClassNames} from '../index';

export type MultiSelectFieldControlProps = SelectProps &
  BaseFieldControlProps & {
    items?: ISelectItem[];
    onChange?: SelectInputProps['onChange'];
    value?: Array<unknown>;
  };

export const MultiSelectFieldControl = (
  props: MultiSelectFieldControlProps
) => {
  const {isEdit = true, loading, className, ...other} = props;

  const cls = fieldControlClassNames(
    'multi-select-field-control select-field-control',
    props
  );

  return loading ? (
    <SkeletonFieldControl className={cls} />
  ) : isEdit ? (
    <MultiSelectFieldControlEdit className={cls} {...other} />
  ) : (
    <MultiSelectFieldControlView className={cls} {...other} />
  );
};
