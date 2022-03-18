import React from 'react';
import {Form, FormField, FormSection} from '../../../../core/components/form';
import {
  inputPropsCurrency,
  inputPropsNumber,
  inputPropsPhone,
  TextFieldControl,
  viewFormatCurrency,
  viewFormatNumber,
  viewFormatPhone,
} from '../../../../core/components/fields';
import './index.less';

interface ISimpleModalFormProps {
  isRow?: boolean;
}

export const SimpleModalForm = (props: ISimpleModalFormProps) => {
  const {isRow} = props;
  return (
    <Form className="simple-modal-form">
      <FormSection title="Enter some data">
        <FormField isRow={isRow} title="Days">
          <TextFieldControl
            placeholder="days format"
            InputProps={inputPropsNumber('days')}
            viewFormat={viewFormatNumber('days')}
            fixedHeight
          />
        </FormField>
        <FormField isRow={isRow} title="Percent">
          <TextFieldControl
            placeholder="percent format"
            InputProps={inputPropsNumber('%')}
            viewFormat={viewFormatNumber('%', '0,0.0')}
            fixedHeight
          />
        </FormField>
        <FormField isRow={isRow} title="Currency">
          <TextFieldControl
            placeholder="currency format"
            InputProps={inputPropsCurrency('USD')}
            viewFormat={viewFormatCurrency('USD')}
            fixedHeight
          />
        </FormField>
        <FormField isRow={isRow} title="Enter your personal phone number">
          <TextFieldControl
            InputProps={inputPropsPhone}
            viewFormat={viewFormatPhone}
            fixedHeight
          />
        </FormField>
      </FormSection>
    </Form>
  );
};
