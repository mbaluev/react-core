import React from 'react';
import {SkeletonFieldControl} from '../SkeletonFieldControl';
import {
  BaseFieldControlProps,
  fieldControlClassNames,
  TextFieldControlEdit,
} from '../index';
import {TextFieldControlView} from './TextFieldControlView';
import {TextFieldProps} from '@material-ui/core/TextField/TextField';

export type TextFieldControlProps = TextFieldProps &
  BaseFieldControlProps & {
    value?: string | number;
    regex?: RegExp;
    viewFormat?: (value?: string | number) => string | JSX.Element;
  };

export const isTextFieldControlHasData = (value?: string | number) => {
  return value || value === 0;
};

export const TextFieldControl = (props: TextFieldControlProps) => {
  const {
    isEdit = true,
    loading,
    fixedHeight,
    viewFormat,
    multiline,
    ...other
  } = props;

  const cls = fieldControlClassNames('text-field-control', props);

  return loading ? (
    <SkeletonFieldControl className={cls} />
  ) : isEdit ? (
    <TextFieldControlEdit className={cls} multiline={multiline} {...other} />
  ) : (
    <TextFieldControlView className={cls} viewFormat={viewFormat} {...other} />
  );
};
