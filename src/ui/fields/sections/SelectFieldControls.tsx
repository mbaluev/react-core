import React, {useState} from 'react';
import {FormField, FormSection} from '../../../core/components/form';
import {SelectFieldControl} from '../../../core/components/fields';
import {Button} from '../../../core/components/button';

const SelectList = [
  {
    label: 'Administrator',
    value: 1,
  },
  {
    label: 'Manager',
    value: 2,
  },
  {
    label: 'Viewer',
    value: 3,
  },
];

export const SelectFieldControls = () => {
  const [value, setValue] = useState<unknown>();
  const [edit, setEdit] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <FormSection title="SelectField">
      <FormField title="1. SelectFieldControl">
        <SelectFieldControl
          placeholder="disabled"
          items={SelectList}
          disabled
        />
        <SelectFieldControl placeholder="simple" items={SelectList} />
        <SelectFieldControl
          placeholder="error"
          error={true}
          helperText="Error message"
          items={SelectList}
        />
      </FormField>
      <FormField title="2. SelectFieldControl view">
        <Button
          variant="contained"
          color="blue"
          className="field-control"
          onClick={() => setEdit(!edit)}
        >
          {edit ? 'view' : 'edit'}
        </Button>
        <SelectFieldControl
          placeholder="select"
          value={value}
          isEdit={edit}
          items={SelectList}
          onChange={(e) => setValue(e.target.value)}
          fixedHeight
        />
      </FormField>
      <FormField title="3. SelectFieldControl loading">
        <Button
          variant="contained"
          color="blue"
          className="field-control"
          onClick={() => setLoading(!loading)}
        >
          {loading ? 'edit' : 'loading'}
        </Button>
        <SelectFieldControl
          placeholder="select"
          value={value}
          loading={loading}
          items={SelectList}
          onChange={(e) => setValue(e.target.value)}
          fixedHeight
        />
      </FormField>
    </FormSection>
  );
};
