import React, {useState} from 'react';
import {FormField, FormSection} from '../../../../core/components/form';
import {getCurrencySign} from '../../../../core/components/fields';
import {Button} from '../../../../core/components/button';
import {CountFieldControl} from '../../../../core/components/fields/CountFieldControl';

export const CountFieldControls = () => {
  const [value, setValue] = useState<number>(200);
  const [edit, setEdit] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <FormSection title="CountField">
      <FormField title="1. CountFieldControl">
        <CountFieldControl
          disabled
          placeholder="disabled"
          min={0}
          max={2000}
          value={100}
          endAdornment={getCurrencySign('EUR')}
        />
        <CountFieldControl
          placeholder="simple"
          min={0}
          max={2000}
          value={50}
          endAdornment={getCurrencySign('EUR')}
        />
        <CountFieldControl
          placeholder="error"
          min={0}
          max={2000}
          value={100}
          endAdornment={getCurrencySign('EUR')}
          error
          helperText="Error message"
        />
      </FormField>
      <FormField title="2. SliderFieldControl view">
        <Button
          variant="contained"
          color="blue"
          className="field-control"
          onClick={() => setEdit(!edit)}
        >
          {edit ? 'view' : 'edit'}
        </Button>
        <CountFieldControl
          isEdit={edit}
          min={0}
          max={2000}
          value={value}
          onChange={(value) => setValue(value)}
          endAdornment={getCurrencySign('EUR')}
        />
      </FormField>
      <FormField title="3. SliderFieldControl loading">
        <Button
          variant="contained"
          color="blue"
          className="field-control"
          onClick={() => setLoading(!loading)}
        >
          {loading ? 'edit' : 'loading'}
        </Button>
        <CountFieldControl
          loading={loading}
          placeholder="loading"
          min={0}
          max={2000}
          value={value}
          onChange={(value) => setValue(value)}
          endAdornment={getCurrencySign('EUR')}
        />
      </FormField>
    </FormSection>
  );
};
