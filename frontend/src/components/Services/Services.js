import React,{useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom'
import './Services.css'
import Card from '../../utils/Card/Card';

import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

function Services() {

  const location = useLocation();

  const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    '& > :not(style) ~ :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.getElementById(location.hash.substring(1)); 
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (

    <div>
      
      <div>
        <img src='coverpage.jpg' alt='coverpage-services' className='coverpage-services'/>
      </div>

      <div className='titleSection'>
      <h1 className='title'>Categories of Services Offering</h1>
      <input placeholder='Search for particular service..' className='inputBar'/>
      </div>

      
      {/* <h2 id='personal-identification-services'>Personal Identication Services</h2> */}
      <Root>
  <Divider>
    <Chip
     sx={{
      fontWeight: 'bold', 
      fontSize: '18px', 
      padding: '20px 20px',
    }}
     label="Personal Identication Services" size="small" />
  </Divider>
    <div id='education'>
      <section className='category-parent'>
          <Link to="/services/personal/birthcertificate" className='service-link'><Card img="" name="Birth Certificate" bg="#008080"/></Link>
          <Link to='/services/personal/deathcertificate' className='service-link'><Card img="" name="Death Certificate" bg="#e74c3c"/></Link>
          <Link to='/services/personal/pancard' className='service-link'><Card img="" name="Pan Card" bg='#de2057'/></Link>
          <Link to='/services/personal/passport' className='service-link'><Card img="" name="Passport" bg=' #e67e22 '/></Link>
          <Link to='/services/personal/drivinglicense' className='service-link'><Card img='license.png' name="Driving License" bg=' #707b7c '/></Link>
          <Card img='license.png' name="Aadhaar" bg=' #707b7c '/>
          {/* <Card img="" name="Laxmikanth"/>
          <Card img="" name="Laxmikanth"/>
          <Card img="" name="Laxmikanth"/> */}
      </section> 
      </div>
      </Root>

      <Root>
  <Divider>
    <Chip
     sx={{
      fontWeight: 'bold', 
      fontSize: '18px', 
      padding: '20px 20px',
    }}
     label="Educational Services" size="small" />
  </Divider>
  
      <div id='road-transport'>
      <section className='category-parent'>
          <Card img="" name="Scholorships" bg=" #2e86c1 "/>
          <Card img="" name="DOST(Degree)" bg=" #9c2bd1"/>
          <Card img="" name="TSWREIS" bg=" #85929e "/>
          <Card img="" name="Eduction Loan" bg=" #20afbc"/>
          <Card img="" name="Overseas Scholorships"/>
          <Card img="" name="JEE" />

      </section>
      </div>
      </Root>


      <Root>
  <Divider>
    <Chip
     sx={{
      fontWeight: 'bold', 
      fontSize: '18px', 
      padding: '20px 20px',
      // marginTop:'20px'
      margin:'20px 0px'
    }}
     label="Road & Transport Services" size="small" />
  </Divider>
    <div id='socialwelfare'>
      <section className='category-parent'>
          <Card img="" name="Driving License" bg="#008080"/>
          <Card img="" name="Fitness Certificates" bg="#e74c3c"/>
          <Card img="" name="Road Tax"/>
          <Card img="" name="Pollution Certificate" bg="#e74c3c"/>
          <Card img="" name="Permit Service"/>
      </section>
      </div>
      </Root>


      <Root>
  <Divider>
    <Chip
     sx={{
      fontWeight: 'bold', 
      fontSize: '18px', 
      padding: '20px 20px',
      // marginTop:'20px'
      margin:'20px 0px'
    }}
     label="Health & Medical Services" size="small" />
  </Divider>
    <div id='socialwelfare'>      
    <section className='category-parent'>
          <Card img="" name="Health Cards" bg="#008080"/>
          <Card img="" name="Vaccination Certificate" bg="#e74c3c"/>
          <Card img="" name=""/>
          <Card img="" name=""/>
      </section>
      </div>

      </Root>


      <Root>
  <Divider>
    <Chip
     sx={{
      fontWeight: 'bold', 
      fontSize: '18px', 
      padding: '20px 20px',
      // marginTop:'20px'
      margin:'20px 0px'
    }}
     label="Social Welfare Services" size="small" />
  </Divider>
    <div id='socialwelfare'>      
    <section className='category-parent'>
          <Card img="" name="Pension Services" bg="#008080"/>
          <Card img="" name="Caste Certificate" bg="#e74c3c"/>
          <Card img="" name="Shadi Mubharakh"/>
          <Card img="" name="Kalyana laxmi"/>
          <Card img="" name="Income Certificate"/>
          <Card img="" name="Arogya Sree"/>
          <Card img="" name="Labour Card"/>
          <Card img="" name="Residence Certificate"/>
          <Card img="" name="Labour Card"/>
          <Card img="" name="Marriage Certificate"/>
      </section>
      </div>

      </Root>

      <Root>
  <Divider>
    <Chip
     sx={{
      fontWeight: 'bold', 
      fontSize: '18px', 
      padding: '20px 20px',
      // marginTop:'20px'
      margin:'20px 0px'
    }}
     label="Agriculture Services" size="small" />
  </Divider>
    <div id='socialwelfare'>      
    <section className='category-parent'>
          <Card img="" name="Crop Loans" bg="#008080"/>
          <Card img="" name="Land Registration" bg="#e74c3c"/>
          <Card img="" name="Passbook"/>
          <Card img="" name="Encumbrance Certificate"/>
      </section>
      </div>

      </Root>
    </div>
  )
}

export default Services