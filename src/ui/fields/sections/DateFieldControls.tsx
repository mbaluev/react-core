import React, {useState} from 'react';
import {FormField, FormSection} from '../../../core/components/form';
import {Button} from '../../../core/components/button';
import {ParsableDate} from '@material-ui/pickers/constants/prop-types';
import {DateFieldControl} from '../../../core/components/fields';

export const DateFieldControls = () => {
  const [value, setValue] = useState<ParsableDate>(new Date());
  const [edit, setEdit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <FormSection title="--> DateField">
      <FormField title="1. DateFieldControl">
        {/*
        <DateFieldControl disabled placeholder="disabled" />
        <DateFieldControl placeholder="simple" />
        <DateFieldControl placeholder="multiline" multiline rows={5} />
        <DateFieldControl
          placeholder="error"
          helperText="Error message"
          error={true}
        />
        */}
      </FormField>
      <FormField title="2. DateFieldControl view">
        {/*
        <Button
          variant="contained"
          color="blue"
          className="field-control"
          onClick={() => setEdit(!edit)}
        >
          {edit ? 'view' : 'edit'}
        </Button>
        <DateFieldControl
          placeholder="select"
          value={value}
          isEdit={edit}
          onChange={(date, name) => setValue(date)}
          fixedHeight
        />
        */}
      </FormField>
      <FormField title="3. DateFieldControl loading">
        {/*
        <Button
          variant="contained"
          color="blue"
          className="field-control"
          onClick={() => setLoading(!loading)}
        >
          {loading ? 'edit' : 'loading'}
        </Button>
        <DateFieldControl
          placeholder="select"
          value={value}
          loading={loading}
          onChange={(date, name) => setValue(date)}
          fixedHeight
        />
        */}
      </FormField>
    </FormSection>
  );
};
