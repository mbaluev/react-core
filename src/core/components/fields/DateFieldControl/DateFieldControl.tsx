import React from 'react';
import {SkeletonFieldControl} from '../SkeletonFieldControl';
import {DateFieldControlView} from './DateFieldControlView';
import {TModify} from '../../../utils/ts/tModify';
import {KeyboardDatePickerProps} from '@material-ui/pickers';
import {ParsableDate} from '@material-ui/pickers/constants/prop-types';
import {DateFieldControlEdit} from './DateFieldControlEdit';
import {BaseFieldControlProps, fieldControlClassNames} from '../index';

export type DateFieldControlProps = TModify<
  KeyboardDatePickerProps,
  {
    name?: string;
    value?: ParsableDate;
    onChange?: (date: Date | null, name?: string | null) => void;
  }
> &
  BaseFieldControlProps & {
    shouldValidate?: boolean;
  };

export const DateFieldControl = (props: DateFieldControlProps) => {
  const {isEdit = true, loading, multiline, className, ...other} = props;

  const cls = fieldControlClassNames('date-field-control', props);

  return loading ? (
    <SkeletonFieldControl className={cls} />
  ) : isEdit ? (
    <DateFieldControlEdit className={cls} {...other} />
  ) : (
    <DateFieldControlView className={cls} {...other} />
  );
};
