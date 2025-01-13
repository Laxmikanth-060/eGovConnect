import React,{useState,useEffect, act} from 'react';
import './ApplicationPage.css'
import axios from 'axios'
import {useParams,useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import Loader from '../../utils/Loader/Loader';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Status from './Status';

const steps = [
    "Document Upload",
    "Agent/Center Selection",
    "Application Submission",
    "Status Tracking",
    "Payment Process",
    "Feedback",
  ];

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  

export default function ApplicationPage() {

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [docs,setDocs]=useState([]);
  const [loading,setLoading]=useState(false);
  const [selectedDocs, setSelectedDocs] = useState({});
  const [error, setError] = useState("");
  const [serviceType, setServiceType] = useState('');
  const [dist,setDist]=useState('');
  const [mandal,setMandal]=useState('');
  const {name}=useParams();
  const navigate=useNavigate();


  const districts = [
    "Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon",
    "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar",
    "Khammam", "Komaram Bheem", "Mahabubabad", "Mahabubnagar", "Mancherial",
    "Medak", "Medchal-Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda",
    "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla",
    "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad",
    "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"
  ];

  
  const mandals = {
    "Nagarkurnool": ["Achampet", "Amrabad", "Nagarkurnool","Tadoor"],
    "Mahabubnagar": ["Balanagar", "Boothpur", "Devarkadra"],
    "Hyderabad": ["Amberpet", "Charminar", "Musheerabad"],
    
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    const allChecked = Object.values(selectedDocs).every((isChecked) => isChecked);
    if (!allChecked) {
      setError("Please check all the documents before proceeding.");
      return;
    }
    setError("");
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };


const url = process.env.REACT_APP_BACKEND_URL;

useEffect(() => {
  const fetchServiceData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${url}/services/get/${name}`);
      const data=response.data.service.documents.split(/,(?![^\(]*\))/).map(item => item.trim())
      setDocs(data);
      setLoading(false);
      const initialSelection = {};
        data.forEach((doc) => {
          initialSelection[doc] = false;
        });
        setSelectedDocs(initialSelection);
    } catch (err) {
      setLoading(false);
      alert("Currently this service is not available.");
      navigate('/services');
    }
  };

  fetchServiceData();

},[]);


const handleCheckboxChange = (doc) => {
  setSelectedDocs((prevState) => ({
    ...prevState,
    [doc]: !prevState[doc],
  }));
  setError(""); 
};

const handleServiceTypeChange = (event) => {
  setServiceType(event.target.value);
};

const handleDistrictChange = (event) => {
  setDist(event.target.value);
  setMandal(''); 
};

const handleMandalChange = (event) => {
  setMandal(event.target.value);
};


const renderStepContent=(step)=>{
    switch(step){

      case 0:                     /////1st STEP
        return(
          <FormGroup 
                sx={{display: 'flex', 
                flexDirection: 'row',
                justifyContent:'center', 
                alignItems:'center', 
                width: '100%' }}>
            {docs.map((doc, index) => (
            <div className='stepper-documents-upload'>
            <FormControlLabel
            key={index} 
            control={<Checkbox 
              checked={selectedDocs[doc] || false}
              onChange={() => handleCheckboxChange(doc)}/>} 
              label={doc} />
            <Button
            size="small"
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
              multiple
            />
          </Button>
          </div>
          ))}
          
          </FormGroup>
        );
      
      case 1:          /////2nd STEP
        return(
                  
              <div className='center-selection-container'>
        
              <FormControl sx={{ width: "75%", margin: "30px 0px" }}>
                <InputLabel id="service-type-label">Service Type</InputLabel>
                <Select
                  labelId="service-type-label"
                  id="service-type-select"
                  value={serviceType}
                  onChange={handleServiceTypeChange}
                >
                  <MenuItem value="Online Service">Online Service</MenuItem>
                  <MenuItem value="Meeseva Service">Meeseva Service</MenuItem>
                </Select>
              </FormControl>

              
              <FormControl sx={{ width: "75%", margin: "10px 0px" }}>
                <InputLabel id="district-label">Select District</InputLabel>
                <Select
                  labelId="district-label"
                  id="district-select"
                  value={dist}
                  onChange={handleDistrictChange}
                >
                  {districts.map((district) => (
                    <MenuItem key={district} value={district}>
                      {district}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              
              <FormControl sx={{ width: "75%", margin: "30px 0px" }} disabled={!dist}>
                <InputLabel id="mandal-label">Select Mandal</InputLabel>
                <Select
                  labelId="mandal-label"
                  id="mandal-select"
                  value={mandal}
                  onChange={handleMandalChange}
                >
                  {(mandals[dist] || [dist]).map((mandalOption) => (
                    <MenuItem key={mandalOption} value={mandalOption}>
                      {mandalOption}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
        )
      
      case 2:                    /////3rd STEP
        return(
          <div className='application-submission-section'>
               <FormControlLabel required control={<Checkbox />} label="Ensure all required documents are uploaded. Incomplete submissions may lead to delays or rejection." />
              <FormControlLabel required control={<Checkbox />} label="Review your application details carefully before submitting. Corrections cannot be made after submission." />
              <Button
              sx={{
                width:"25%",
                margin:"20px auto",
              }}
               variant="contained" color="success">
              Submit Application
            </Button>
          </div>
        )
      
      case 3:                    /////4th STEP
        return(
          <Status></Status>
        )
      
      case 4:                   /////5th STEP
        return(
          <div></div>
        )

      case 5:                  /////6th STEP
        return(
          <div></div>
        )
    }
};


  return (
    <Box sx={{ width: '90vw', margin:'60px auto' }}>
      {loading && <Loader/>}
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography variant="caption">Optional</Typography>
          //   );
          // }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step
                key={label}
                {...stepProps}
                sx={{
                  padding: "10px", 
                  border: "1px solid #ccc",
                  borderRadius: "8px", 
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
                  fontSize: "20px",
                  fontWeight: 600,
                  backgroundColor: activeStep === index ? "#f0f0f0" : "transparent",
                  transition: "background-color 0.3s ease", 
                  marginBottom: "10px",
                }}
              >
            <StepLabel {...labelProps}>{label}</StepLabel>
          </Step>

          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) :  (
        <React.Fragment>
            {error && (
            <Typography color="error" sx={{ width:'50vw', margin:'30px auto', textAlign:'center',fontWeight:'600' }}>
              {error}
            </Typography>
          )}
          <div className='content-parent-container'>
            {renderStepContent(activeStep)}
          </div>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              backgroundColor: '#f5f5f5', 
              border: '1px solid #dcdcdc', 
              borderRadius: '8px', 
              padding: '10px 16px', 
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
            }}
          >
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="#2e86c1" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext} sx={{fontWeight:'700', fontSize:'15px'}}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>

        </React.Fragment>
      )}
    </Box>
  );
}