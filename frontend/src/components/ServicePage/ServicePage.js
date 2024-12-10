import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './ServicePage.css'
import { Link, useParams,useNavigate } from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

function ServicePage() {

  const {name}=useParams();
  const navigate = useNavigate();

const [title,setTitle]=useState("-");
const [description,setDescription]=useState("-");
const [dept,setDept]=useState("-");
const [docs,setDocs]=useState("-");
const [officers,setOfficers]=useState("-");
const [time,setTime]=useState("-");
const [fee,setFee]=useState("-");
const [reference,setReference]=useState("");
const [eligibility,setEligibility]=useState("");

const url = process.env.REACT_APP_BACKEND_URL;

useEffect(() => {
  const fetchServiceData = async () => {
    try {
      const response = await axios.get(`${url}/services/get/${name}`);
      setTitle(response.data.service.name);
      setDescription(response.data.service.description);
      setDocs(response.data.service.documents);
      setDept(response.data.service.department);
      setOfficers(response.data.service.officers);
      setTime(response.data.service.time);
      setFee(response.data.service.fee);
      setReference(response.data.service.reference);
      setEligibility(response.data.service.eligibility);

    } catch (err) {
      alert("Currently this service is not available.");
      navigate('/services');
    }
  };

  fetchServiceData();

});

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (

    <div className='sp-root-container'>

      <h3 id='sp-title'>{name.toUpperCase()}</h3>

    <div className='sp-parent-container'>

    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
    sx={{
      backgroundColor: 'rgba(255, 255, 255, 0.5)', 
      boxShadow: 'none', 
      // border: '1px solid rgba(0, 0, 0, 0.2)', 
      borderRadius: '8px', 
      // marginBottom:'0.5px',
    }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header">
        <Typography sx={{ width: '33%', flexShrink: 0 , ml: 2,p:1, fontWeight: 'bold'}}>
          Name
        </Typography>
        <Typography sx={{ color: 'text.main',p:1 }}>{title.toUpperCase()}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ p:1, ml: 2}}>
        This section displays the name of the service or document you're inquiring about. 
        It helps identify the type of assistance or process you need.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion 
    expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
    sx={{
      backgroundColor: 'rgba(255, 255, 255, 0.5)', 
      boxShadow: 'none', 
      // border: '1px solid rgba(0, 0, 0, 0.2)', 
      borderRadius: '8px', 
    }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2bh-content"
        id="panel2bh-header">
        <Typography sx={{ width: '33%', flexShrink: 0 , ml: 2,p:1, fontWeight: 'bold'}}>Description</Typography>
        <Typography sx={{ color: 'text.main',p:1 }}>
         {description}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ p:1, ml: 2}}>
        Find detailed information about the service, including its purpose and key features. 
        Understand what this service entails and how it benefits you.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
    sx={{
      backgroundColor: 'rgba(255, 255, 255, 0.5)', 
      boxShadow: 'none', 
      // border: '1px solid rgba(0, 0, 0, 0.2)', 
      borderRadius: '8px', 
    }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3bh-content"
        id="panel3bh-header">
        <Typography sx={{ width: '33%', flexShrink: 0 , ml: 2,p:1, fontWeight: 'bold'}}>
          Department
        </Typography>
        <Typography sx={{ color: 'text.main',p:1 }}>
          {dept}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ p:1, ml: 2}}>
        Learn about the responsible department managing this service. This ensures clarity about 
        which governmental or organizational body oversees the process.
        </Typography>
      </AccordionDetails>
    </Accordion>


    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
    sx={{
      backgroundColor: 'rgba(255, 255, 255, 0.5)', 
      boxShadow: 'none', 
      // border: '1px solid rgba(0, 0, 0, 0.2)', 
      borderRadius: '8px', 
    }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3bh-content"
        id="panel3bh-header">
        <Typography sx={{ width: '33%', flexShrink: 0 , ml: 2,p:1, fontWeight: 'bold'}}>
          Eligibility
        </Typography>
        <Typography sx={{ color: 'text.main',p:1 }}>
          {eligibility}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ p:1, ml: 2}}>
        Learn about the responsible department managing this service. This ensures clarity about 
        which governmental or organizational body oversees the process.
        </Typography>
      </AccordionDetails>
    </Accordion>


    
    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
    sx={{
      backgroundColor: 'rgba(255, 255, 255, 0.5)', 
      boxShadow: 'none', 
      // border: '1px solid rgba(0, 0, 0, 0.2)', 
      borderRadius: '8px', 
    }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3bh-content"
        id="panel3bh-header">
        <Typography sx={{ width: '33%', flexShrink: 0 , ml: 2,p:1, fontWeight: 'bold'}}>
          Required Documents
        </Typography>
        <Typography sx={{ color: 'text.main',p:1 }}>
          {docs}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ p:1, ml: 2}}>
        This section lists all the documents you need to complete the process.
         Ensure you have these ready to avoid delays.
        </Typography>
      </AccordionDetails>
    </Accordion>


    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}
    sx={{
      backgroundColor: 'rgba(255, 255, 255, 0.5)', 
      boxShadow: 'none', 
      // border: '1px solid rgba(0, 0, 0, 0.2)', 
      borderRadius: '8px', 
    }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3bh-content"
        id="panel3bh-header">
        <Typography sx={{ width: '33%', flexShrink: 0 , ml: 2 , p:1 , fontWeight: 'bold'}}>
          Concerned Offices / Officers
        </Typography>
        <Typography sx={{ color: 'text.main',p:1 }}>
         {officers}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ p:1, ml: 2}}>
        Get information about the offices or officials responsible for handling your request.
         Contact details may also be provided for further assistance.
        </Typography>
      </AccordionDetails>
    </Accordion>


    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}
    sx={{
      backgroundColor: 'rgba(255, 255, 255, 0.5)', 
      boxShadow: 'none', 
      // border: '1px solid rgba(0, 0, 0, 0.2)', 
      borderRadius: '8px', 
    }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3bh-content"
        id="panel3bh-header">
        <Typography sx={{ width: '33%', flexShrink: 0 , ml: 2,p:1, fontWeight: 'bold'}}>
          Processing Time / Duration
        </Typography>
        <Typography sx={{ color: 'text.main',p:1 }}>
          {time}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ p:1, ml: 2}}>
        Understand how long it typically takes to complete the process. 
        This helps you plan better and manage your time efficiently.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}
    sx={{
      backgroundColor: 'rgba(255, 255, 255, 0.5)', 
      boxShadow: 'none', 
      // border: '1px solid rgba(0, 0, 0, 0.2)', 
      borderRadius: '8px', 
    }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3bh-content"
        id="panel3bh-header">
        <Typography sx={{ width: '33%', flexShrink: 0 , ml: 2,p:1, fontWeight: 'bold'}}>
          Prescribed Fee (by Govt.)
        </Typography>
        <Typography sx={{ color: 'text.main',p:1 }}>
          Rs. {fee} /-
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ p:1, ml: 2}}>
        Check the official fee required for the service. 
        Ensure you have the correct amount to avoid any discrepancies.
        </Typography>
      </AccordionDetails>
    </Accordion>


    <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}
    sx={{
      backgroundColor: 'rgba(255, 255, 255, 0.5)', 
      boxShadow: 'none', 
      // border: '0.5px solid rgba(0, 0, 0, 0.2)', 
      borderRadius: '8px', 
    }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3bh-content"
        id="panel3bh-header">
        <Typography sx={{ width: '33%', flexShrink: 0 , ml: 2,p:1, fontWeight: 'bold'}}>
          Reference / Resource (website)
        </Typography>
        <Typography sx={{ color: 'text.main' ,p:1}}>
         <Link to={`${reference}`} > {reference} </Link>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ p:1, ml: 2}}>
        Find reliable references, links, or websites for additional information about this service. 
        Use these resources to verify details or gather more insights.
        </Typography>
      </AccordionDetails>
    </Accordion>

</div>
    <div className='sp-footer-section'> 
    <Checkbox defaultChecked />
    <p>"Choose to apply services on this portal if <b>NO HARDCOPY SINGATURE / PHYSICAL APPEARANCE</b> is needed."</p></div>
    <div className='sp-button-parent'>
    <Button variant="contained">Apply Now</Button>  
    </div>

  </div>
   
  )
}

export default ServicePage