import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormStep from './components/FormStep';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './index.css'; // Import Tailwind CSS


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const App = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    wheels: '',
    vehicleType: '',
    vehicleModel: '',
    dateRange: [new Date(), new Date()],
  });
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [vehicleModels, setVehicleModels] = useState([]);
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Fetch vehicle types based on the number of wheels
    const fetchVehicleTypes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/vehicles');
        const vehicles = response.data;
        console.log('Fetched vehicle types:', vehicles);

        const twoWheelerTypes = vehicles.filter(vehicle => vehicle.wheels === 2);
        const fourWheelerTypes = vehicles.filter(vehicle => vehicle.wheels === 4);

        setVehicleTypes(data.wheels === '2' ? twoWheelerTypes : fourWheelerTypes);
        console.log("filtered",vehicleTypes)
      } catch (error) {
        console.error('Error fetching vehicle types:', error);
      }
    };

    if (data.wheels) {
      fetchVehicleTypes();
    }
  }, [data.wheels]);



  useEffect(() => {
    // Fetch vehicle models based on the selected vehicle type
    const fetchVehicleModels = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/vehicles');
        const vehicles = response.data;
        console.log('Fetched vehicle models:', vehicles);
    
        const models = vehicles.filter(vehicle => vehicle.type === data.vehicleType).map(vehicle => vehicle.model);
        console.log('Filtered models:', models); // Log filtered models
    
        setVehicleModels(models);
      } catch (error) {
        console.error('Error fetching vehicle models:', error);
      }
    };

    if (data.vehicleType) {
      fetchVehicleModels();
    }

  }, [data.vehicleType]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = ({ startDate, endDate }) => {
    setData(prevData => ({
      ...prevData,
      dateRange: [startDate, endDate],
    }));
  };
  
  const validate = () => {
    const newErrors = {};
    if (step === 1) {
      if (!data.firstName) newErrors.firstName = 'First name is required';
      if (!data.lastName) newErrors.lastName = 'Last name is required';
    }
    if (step === 2) {
      if (!data.wheels) newErrors.wheels = 'Number of wheels is required';
    }
    if (step === 3) {
      if (!data.vehicleType) newErrors.vehicleType = 'Vehicle type is required';
    }
    if (step === 4) {
      if (!data.vehicleModel) newErrors.vehicleModel = 'Vehicle model is required';
    }
    if (step === 5) {
      if (!data.dateRange[0] || !data.dateRange[1]) newErrors.dateRange = 'Both start and end dates are required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  const handleNext = () => {
    if (validate()) {
      if (step === 5) {
        // Submit the form data to the backend
        axios.post('http://localhost:3000/api/bookings', {
          vehicleId: vehicleModels.find(model => model === data.vehicleModel).id,
          startDate: data.dateRange[0],
          endDate: data.dateRange[1],
        })
          .then(response => {
            console.log('Booking successful:', response.data);
            setOpen(true); // Show success popup
          })
          .catch(error => {
            console.error('Error booking vehicle:', error);
            if (error.response && error.response.data) {
              setErrorOpen(true); // Show error popup
              setErrorMessage(error.response.data.message);
            }
          });
      } else {
        setStep((prevStep) => prevStep + 1);
      }
    }
  };



  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  // Snackbar for error messages
const [errorOpen, setErrorOpen] = useState(false);
const [errorMessage, setErrorMessage] = useState('');

const handleErrorClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setErrorOpen(false);
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <FormStep
          step={step}
          data={data}
          vehicleTypes={vehicleTypes}
          vehicleModels={vehicleModels}
          handleChange={handleChange}
          handleDateChange={handleDateChange}
          handleNext={handleNext}
          errors={errors}
        />
      </div>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  <Alert onClose={handleClose} severity="success">
    Booking successful!
  </Alert>
</Snackbar>

<Snackbar open={errorOpen} autoHideDuration={6000} onClose={handleErrorClose}>
  <Alert onClose={handleErrorClose} severity="error">
    {errorMessage}
  </Alert>
</Snackbar>

    </div>
  );
};

export default App;
