import './index.less';
import {classNames} from '../../utils/classNames';

export type BaseFieldControlProps = {
  isEdit?: boolean;
  loading?: boolean;
  fixedHeight?: boolean;
  className?: string;
  error?: boolean;
  helperText?: string | null;
};

export const fieldControlClassNames = (
  className: string,
  props: BaseFieldControlProps
) => {
  const {
    className: classNameProps,
    isEdit = true,
    loading,
    fixedHeight,
    error,
  } = props;

  return classNames(className, 'field-control', classNameProps, {
    'field-control_is-edit': !Boolean(loading) && Boolean(isEdit),
    'field-control_is-view': !Boolean(loading) && !Boolean(isEdit),
    'field-control_is-loading': Boolean(loading),
    'field-control_fixed-height': Boolean(fixedHeight),
    'field-control-error': Boolean(error),
  });
};

export * from './CheckboxFieldControl';
export * from './DateFieldControl';
export * from './MultiSelectFieldControl';
export * from './PasswordFieldControl';
export * from './SelectFieldControl';
export * from './SkeletonFieldControl';
export * from './SwitchFieldControl';
export * from './TextFieldControl';
