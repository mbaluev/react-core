import './index.less';
import {classNames} from '../../utils/classNames/classNames';

export type BaseFieldControlProps = {
  isEdit?: boolean;
  loading?: boolean;
  className?: string;
  error?: boolean;
  helperText?: string | null;
  focused?: boolean;
  disabled?: boolean;
};

export const fieldControlClassNames = (
  className: string,
  props: BaseFieldControlProps
) => {
  const {
    className: classNameProps,
    isEdit = true,
    loading,
    error,
    focused,
    disabled,
  } = props;

  return classNames(className, 'field-control', classNameProps, {
    'field-control_is-edit': !Boolean(loading) && Boolean(isEdit),
    'field-control_is-view': !Boolean(loading) && !Boolean(isEdit),
    'field-control_is-loading': Boolean(loading),
    'field-control_error': Boolean(error),
    'field-control_focused': Boolean(focused),
    'field-control_disabled': Boolean(disabled),
  });
};

export * from './CheckboxFieldControl';
export * from './DateFieldControl';
export * from './MultiSelectFieldControl';
export * from './PasswordFieldControl';
export * from './RadioGroupFieldControl';
export * from './SelectFieldControl';
export * from './SkeletonFieldControl';
export * from './SliderFieldControl';
export * from './SwitchFieldControl';
export * from './TextFieldControl';
export * from './ToggleButtonGroupFieldControl';
