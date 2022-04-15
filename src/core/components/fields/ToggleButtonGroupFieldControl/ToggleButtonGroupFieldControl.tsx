import React from 'react';
import {ToggleButtonGroupFieldControlView} from './ToggleButtonGroupFieldControlView';
import {ToggleButtonGroupFieldControlEdit} from './ToggleButtonGroupFieldControlEdit';
import {SkeletonFieldControl} from '../SkeletonFieldControl';
import {BaseFieldControlProps, fieldControlClassNames} from '../index';
import {ToggleButtonGroupProps} from '@material-ui/lab';

export interface IToggleButtonItem {
  value: string;
  label: string;
  disabled?: boolean;
}

export type ToggleButtonGroupFieldControlProps = ToggleButtonGroupProps &
  BaseFieldControlProps & {
    items?: IToggleButtonItem[];
  };

export const isToggleButtonGroupFieldControlHasData = (value?: any) => {
  return (
    typeof value !== 'undefined' &&
    Array.isArray(value) &&
    (value as []).length > 0
  );
};

export const ToggleButtonGroupFieldControl = (
  props: ToggleButtonGroupFieldControlProps
) => {
  const {isEdit = true, loading, className, ...other} = props;

  const cls = fieldControlClassNames(
    'toggle-button-group-field-control',
    props
  );

  return loading ? (
    <SkeletonFieldControl className={cls} />
  ) : isEdit ? (
    <ToggleButtonGroupFieldControlEdit className={cls} {...other} />
  ) : (
    <ToggleButtonGroupFieldControlView className={cls} {...other} />
  );
};
