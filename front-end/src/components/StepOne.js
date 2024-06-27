import React from 'react';
import { Field } from 'formik';
import { Button, TextField } from '@mui/material';

const StepOne = () => (
  <>
    <Field name="firstName">
      {({ field, meta }) => (
        <TextField
          {...field}
          label="First Name"
          fullWidth
          margin="normal"
          error={meta.touched && !!meta.error}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
    <Field name="lastName">
      {({ field, meta }) => (
        <TextField
          {...field}
          label="Last Name"
          fullWidth
          margin="normal"
          error={meta.touched && !!meta.error}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
  </>
);

export default StepOne;
