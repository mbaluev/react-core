import React, {useState} from 'react';
import {Form, FormField, FormSection} from '../../../core/components/form';
import {Button, IButtonProps} from '../../../core/components/button';
import {Modal} from '../../../core/components/modal';
import {
  inputPropsCurrency,
  inputPropsNumber,
  inputPropsPhone,
  TextFieldControl,
  viewFormatCurrency,
  viewFormatNumber,
  viewFormatPhone,
} from '../../../core/components/fields';

export const ModalControls = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isRow, setIsRow] = useState<boolean>(false);
  const footerButtons: IButtonProps[] = [
    {
      size: 'medium',
      color: 'grey',
      variant: 'contained',
      children: isRow ? 'vertical' : 'horizontal',
      onClick: () => setIsRow(!isRow),
    },
    {
      size: 'medium',
      variant: 'contained',
      children: 'save',
      onClick: () => setIsOpen(false),
    },
  ];
  return (
    <FormSection title="-> Dialogs">
      <FormField title="1. Simple dialog" align="left">
        <Button variant="outlined" onClick={() => setIsOpen(true)}>
          open dialog
        </Button>
        <Modal
          isOpen={isOpen}
          title="Simple dialog"
          onClose={() => setIsOpen(false)}
          footerButtons={footerButtons}
        >
          <Form style={{padding: 30}}>
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
        </Modal>
      </FormField>
    </FormSection>
  );
};
