import React from 'react';
import { Field } from 'formik';
import { Button, FormLabel, RadioGroup, Radio, FormControlLabel } from '@mui/material';

const StepTwo = () => (
  <>
    <FormLabel component="legend">Number of Wheels</FormLabel>
    <Field name="wheels">
      {({ field, meta }) => (
        <RadioGroup {...field}>
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="4" control={<Radio />} label="4" />
        </RadioGroup>
      )}
    </Field>
  </>
);

export default StepTwo;
