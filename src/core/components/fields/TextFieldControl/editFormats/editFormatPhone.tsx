import React from 'react';
import NumberFormat from 'react-number-format';

interface IProps {
  inputRef: (instance: NumberFormat<string> | null) => void;
  onChange: (event: {target: {name: string; value: string}}) => void;
  name: string;
}

export const EditFormatPhone = (props: IProps) => {
  const {inputRef, onChange, ...other} = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      format="+7 (###) ###-##-##"
      placeholder="+7 (___) ___-__-__"
    />
  );
};
