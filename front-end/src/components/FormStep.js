import React from 'react';
import { Button, TextField, RadioGroup, Radio, FormControlLabel, FormLabel } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const StepOne = ({ data, handleChange, handleNext, errors }) => (


 
   <div>
   
   <TextField
     label="First Name"
     name="firstName"
     value={data.firstName}
     onChange={handleChange}
     fullWidth
     margin="normal"
     error={!!errors.firstName}
     helperText={errors.firstName}
   />
   <TextField
     label="Last Name"
     name="lastName"
     value={data.lastName}
     onChange={handleChange}
     fullWidth
     margin="normal"
     error={!!errors.lastName}
     helperText={errors.lastName}
   />
   <Button onClick={handleNext} variant="contained" color="secondary" fullWidth>
     Next
   </Button>
 </div>
  
  
);

const StepTwo = ({ data, handleChange, handleNext, errors }) => (
  <div>
    <FormLabel component="legend">Choose type of vehicle</FormLabel>
    <RadioGroup name="wheels" value={data.wheels} onChange={handleChange}>
      <FormControlLabel value="2" control={<Radio />} label="2" />
      <FormControlLabel value="4" control={<Radio />} label="4" />
    </RadioGroup>
    {errors.wheels && <p style={{ color: 'red' }}>{errors.wheels}</p>}
    <Button onClick={handleNext} variant="contained" color="secondary" fullWidth>
      Next
    </Button>
  </div>
);

const StepThree = ({ data, vehicleTypes, handleChange, handleNext, errors }) => (
  <div>
    <FormLabel component="legend">Choose The Model </FormLabel>
    <RadioGroup name="vehicleType" value={data.vehicleType} onChange={handleChange}>
      {vehicleTypes.map(type => (
        <FormControlLabel key={type.model} value={type.type} control={<Radio />} label={type.type} />
      ))}
    </RadioGroup>
    {errors.vehicleType && <p style={{ color: 'red' }}>{errors.vehicleType}</p>}
    <Button onClick={handleNext} variant="contained" color="secondary" fullWidth>
      Next
    </Button>
  </div>
);


const StepFour = ({ data, vehicleModels, handleChange, handleNext, errors }) => (
  <div>
    <FormLabel component="legend">Choose Specific Model</FormLabel>
    <RadioGroup name="vehicleModel" value={data.vehicleModel} onChange={handleChange}>
      {vehicleModels.map(model => (
        <FormControlLabel key={model} value={model} control={<Radio />} label={model} />
      ))}
    </RadioGroup>
    {errors.vehicleModel && <p style={{ color: 'red' }}>{errors.vehicleModel}</p>}
    <Button onClick={handleNext} variant="contained" color="secondary" fullWidth>
      Next
    </Button>
  </div>
);

const StepFive = ({ data, handleDateChange, handleNext, errors }) => (
  <div>
    <FormLabel component="legend">Select Date Range</FormLabel>
    <DatePicker
      selected={data.dateRange[0]}
      onChange={(date) => handleDateChange({ startDate: date, endDate: data.dateRange[1] })}
      selectsStart
      startDate={data.dateRange[0]}
      endDate={data.dateRange[1]}
      dateFormat="yyyy/MM/dd"
      placeholderText="Start Date"
      customInput={<TextField label="Start Date" fullWidth margin="normal" error={!!errors.dateRange} />}
    />
    <DatePicker
      selected={data.dateRange[1]}
      onChange={(date) => handleDateChange({ startDate: data.dateRange[0], endDate: date })}
      selectsEnd
      startDate={data.dateRange[0]}
      endDate={data.dateRange[1]}
      dateFormat="yyyy/MM/dd"
      placeholderText="End Date"
      customInput={<TextField label="End Date" fullWidth margin="normal" error={!!errors.dateRange} />}
    />
    {errors.dateRange && <p style={{ color: 'red' }}>{errors.dateRange}</p>}
    <Button onClick={handleNext} variant="contained" color="secondary" fullWidth>
      Submit
    </Button>
  </div>
);

const steps = [
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  StepFive
];

const FormStep = ({ step, data, vehicleTypes, vehicleModels, handleChange, handleDateChange, handleNext, errors }) => {
  const StepComponent = steps[step - 1];
  return (
    <StepComponent
      data={data}
      vehicleTypes={vehicleTypes}
      vehicleModels={vehicleModels}
      handleChange={handleChange}
      handleDateChange={handleDateChange}
      handleNext={handleNext}
      errors={errors}
    />
  );
};

export default FormStep;

