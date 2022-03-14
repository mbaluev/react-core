import React, {useState} from 'react';
import {FormField, FormSection} from '../../core/components/form';
import {PasswordFieldControl} from '../../core/components/fields';
import {PasswordFieldControlEditable} from '../../core/components/fields/fieldControlsEditable/PasswordFieldControl';

export const PasswordFieldControls = () => {
  const [value, setValue] = useState<string>('_Pa2');
  return (
    <FormSection title="PasswordField">
      <FormField title="1. PasswordFieldControl">
        <PasswordFieldControl placeholder="empty field" onChange={(e) => {}} />
        <PasswordFieldControl
          placeholder="error field"
          error={true}
          helperText="Error message"
        />
        <PasswordFieldControl placeholder="field with value" value="_Pass@" />
      </FormField>
      <FormField title="2. PasswordFieldControlEditable">
        <PasswordFieldControlEditable
          placeholder="editable empty field"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <PasswordFieldControlEditable
          placeholder="editable with error"
          error={true}
          helperText="Error message"
        />
        <PasswordFieldControlEditable isEdit={false} value={value} />
      </FormField>
    </FormSection>
  );
};
