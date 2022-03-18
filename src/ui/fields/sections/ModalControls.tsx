import React, {useState} from 'react';
import {FormField, FormSection} from '../../../core/components/form';
import {Button, IButtonProps} from '../../../core/components/button';
import {Modal} from '../../../core/components/modal';
import {SimpleModalForm} from '../forms/simpleModalForm';

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
          <SimpleModalForm isRow={isRow} />
        </Modal>
      </FormField>
    </FormSection>
  );
};
