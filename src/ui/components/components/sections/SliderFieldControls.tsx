import React, {useState} from 'react';
import {FormField, FormSection} from '../../../../core/components/form';
import {getCurrencySign} from '../../../../core/components/fields';
import {Button} from '../../../../core/components/button';
import {SliderFieldControl} from '../../../../core/components/fields/SliderFieldControl';

export const SliderFieldControls = () => {
  const [value, setValue] = useState<undefined | number | number[]>();
  const [edit, setEdit] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <FormSection title="SliderField">
      <FormField title="1. SliderFieldControl">
        <SliderFieldControl
          disabled
          placeholder="disabled"
          min={0}
          max={2000}
          value={[0, 1000]}
          endAdornment={getCurrencySign('EUR')}
        />
        <SliderFieldControl
          placeholder="simple"
          min={0}
          max={2000}
          value={[100, 1000]}
          endAdornment={getCurrencySign('EUR')}
        />
        <SliderFieldControl
          placeholder="error"
          min={0}
          max={2000}
          value={[100, 1000]}
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
        <SliderFieldControl
          isEdit={edit}
          placeholder="view"
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
        <SliderFieldControl
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
