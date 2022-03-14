import React, {useState} from 'react';
import {InputAdornment} from '@material-ui/core';
import {FormField, FormSection} from '../../core/components/form';
import {
  FormatCurrency,
  percentViewFormat,
  TextFieldControl,
  TextFieldControlEditable,
} from '../../core/components/fields';
import {FormatPhone} from '../../core/components/fields/fieldControlsBase/TextFieldControl/FormatPhone';

export const TextFieldControls = () => {
  const [value, setValue] = useState<string>();
  return (
    <FormSection title="TextField">
      <FormField title="1. TextFieldControl">
        <TextFieldControl disabled placeholder="disabled" />
        <TextFieldControl placeholder="enter value" onChange={(e) => {}} />
        <TextFieldControl
          placeholder="error"
          error={true}
          helperText="Error message"
        />
        <TextFieldControl
          placeholder="multiline field"
          value="value"
          multiline
          rows={5}
        />
      </FormField>
      <FormField title="2. TextFieldControl formats">
        <TextFieldControl
          placeholder="phone format"
          onChange={(e) => {}}
          InputProps={{
            inputComponent: FormatPhone as any,
          }}
        />
        <TextFieldControl
          placeholder="number format"
          error={true}
          helperText="Error message"
          InputProps={{
            inputComponent: FormatCurrency as any,
            endAdornment: <InputAdornment position="end">days</InputAdornment>,
          }}
        />
        <TextFieldControl
          placeholder="percent format"
          InputProps={{
            inputComponent: FormatCurrency as any,
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
        />
      </FormField>
      <FormField title="3. TextFieldControlEditable">
        <TextFieldControlEditable
          placeholder="empty editable field"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          InputProps={{
            inputComponent: FormatCurrency as any,
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
