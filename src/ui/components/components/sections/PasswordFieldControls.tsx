import React, {useState} from 'react';
import {FormField, FormSection} from '../../../../core/components/form';
import {PasswordFieldControl} from '../../../../core/components/fields';
import {Button} from '../../../../core/components/button';

export const PasswordFieldControls = () => {
  const [value, setValue] = useState<string>('_Pa2');
  const [edit, setEdit] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <FormSection title="PasswordField">
      <FormField title="1. PasswordFieldControl">
        <PasswordFieldControl placeholder="disabled" disabled value="qwe" />
        <PasswordFieldControl placeholder="simple" />
        <PasswordFieldControl
          placeholder="error"
          error={true}
          helperText="Error message"
        />
      </FormField>
      <FormField title="2. PasswordFieldControl view">
        <Button
          variant="contained"
          color="blue"
          className="field-control"
          onClick={() => setEdit(!edit)}
        >
          {edit ? 'view' : 'edit'}
        </Button>
        <PasswordFieldControl
          placeholder="password"
          value={value}
          isEdit={edit}
          onChange={(e) => setValue(e.target.value)}
        />
      </FormField>
      <FormField title="3. PasswordFieldControl loading">
        <Button
          variant="contained"
          color="blue"
          className="field-control"
          onClick={() => setLoading(!loading)}
        >
          {loading ? 'edit' : 'loading'}
        </Button>
        <PasswordFieldControl
          placeholder="password"
          value={value}
          loading={loading}
          onChange={(e) => setValue(e.target.value)}
        />
      </FormField>
    </FormSection>
  );
};
