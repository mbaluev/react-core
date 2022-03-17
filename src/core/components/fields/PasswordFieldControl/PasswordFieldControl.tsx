import React from 'react';
import {TextFieldProps} from '@material-ui/core/TextField/TextField';
import {
  BaseFieldControlProps,
  fieldControlClassNames,
  PasswordFieldControlEdit,
} from '../index';
import {PasswordFieldControlView} from './PasswordFieldControlView';
import {SkeletonFieldControl} from '../SkeletonFieldControl';

export type PasswordFieldControlProps = TextFieldProps &
  BaseFieldControlProps & {
    value?: string;
  };

export const PasswordFieldControl = (props: PasswordFieldControlProps) => {
  const {isEdit = true, loading, fixedHeight, ...other} = props;

  const cls = fieldControlClassNames('password-field-control', props);

  return loading ? (
    <SkeletonFieldControl className={cls} />
  ) : isEdit ? (
    <PasswordFieldControlEdit className={cls} {...other} />
  ) : (
    <PasswordFieldControlView className={cls} {...other} />
  );
};
