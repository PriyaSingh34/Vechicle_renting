
import React from 'react';
import { Field } from 'formik';
import { Button, FormLabel, TextField } from '@mui/material';
import DatePicker from 'react-datepicker';

const StepFive = () => (
  <>
    <FormLabel component="legend">Select Date Range</FormLabel>
    <Field name="dateRange">
      {({ field, meta }) => (
        <>
          <DatePicker
            {...field}
            selected={field.value[0]}
            onChange={date => field.onChange({ startDate: date, endDate: field.value[1] })}
            selectsStart
            startDate={field.value[0]}
            endDate={field.value[1]}
            dateFormat="yyyy/MM/dd"
            placeholderText="Start Date"
            customInput={<TextField label="Start Date" fullWidth margin="normal" />}
          />
          <DatePicker
            {...field}
            selected={field.value[1]}
            onChange={date => field.onChange({ startDate: field.value[0], endDate: date })}
            selectsEnd
            startDate={field.value[0]}
            endDate={field.value[1]}
            dateFormat="yyyy/MM/dd"
            placeholderText="End Date"
            customInput={<TextField label="End Date" fullWidth margin="normal" />}
          />
        </>
      )}
    </Field>
  </>
);

export default StepFive;
