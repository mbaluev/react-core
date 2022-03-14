import React, {useState} from 'react';
import {InputAdornment} from '@material-ui/core';
import {FormField, FormSection} from '../../core/components/form';
import {
  NumberFieldControlFormat,
  percentViewFormat,
  TextFieldControl,
  TextFieldControlEditable,
} from '../../core/components/fields';

export const TextFieldControls = () => {
  const [value, setValue] = useState<string>();
  return (
    <FormSection title="TextField">
      <FormField title="1. TextFieldControl">
        <TextFieldControl disabled placeholder="disabled" />
        <TextFieldControl
          label="label"
          placeholder="empty field"
          onChange={(e) => {}}
        />
        <TextFieldControl
          placeholder="error"
          error={true}
          helperText="Error message"
          InputProps={{
            inputComponent: NumberFieldControlFormat as any,
            endAdornment: <InputAdornment position="end">days</InputAdornment>,
          }}
        />
      </FormField>
      <FormField title="2. TextFieldControl multiline">
        <TextFieldControl
          placeholder="field with value"
          value="value"
          multiline
          rows={5}
        />
      </FormField>
      <FormField title="3. TextFieldControlEditable">
        <TextFieldControlEditable
          label="label"
          placeholder="empty editable field"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          InputProps={{
            inputComponent: NumberFieldControlFormat as any,
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
        />
        <TextFieldControlEditable
          placeholder="editable field with error"
          error={true}
          helperText="Error message"
        />
        <TextFieldControlEditable
          isEdit={false}
          value={value}
          viewFormat={percentViewFormat}
        />
      </FormField>
    </FormSection>
  );
};
