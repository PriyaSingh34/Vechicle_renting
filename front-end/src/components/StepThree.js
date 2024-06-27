import React from 'react';
import { Field } from 'formik';
import { Button, FormLabel, RadioGroup, Radio, FormControlLabel } from '@mui/material';

const StepThree = ({ vehicleTypes }) => (
  <>
    <FormLabel component="legend">Type of Vehicle</FormLabel>
    <Field name="vehicleType">
      {({ field, meta }) => (
        <RadioGroup {...field}>
          {vehicleTypes.map(type => (
            <FormControlLabel key={type.model} value={type.type} control={<Radio />} label={type.type} />
          ))}
        </RadioGroup>
      )}
    </Field>
  </>
);

export default StepThree;
