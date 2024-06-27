import React from 'react';
import { Field } from 'formik';
import { Button, FormLabel, RadioGroup, Radio, FormControlLabel } from '@mui/material';

const StepFour = ({ vehicleModels }) => (
  <>
    <FormLabel component="legend">Specific Model</FormLabel>
    <Field name="vehicleModel">
      {({ field, meta }) => (
        <RadioGroup {...field}>
          {vehicleModels.map(model => (
            <FormControlLabel key={model} value={model} control={<Radio />} label={model} />
          ))}
        </RadioGroup>
      )}
    </Field>
  </>
);

export default StepFour;
