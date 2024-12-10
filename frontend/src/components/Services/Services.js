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
          <Link to='/services/personal/drivinglicense' className='service-link'><Card img="" name="Driving License" bg=' #707b7c '/></Link>
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
          <Card img="" name="Mock Data" bg=" #20afbc"/>
          <Card img="" name="Mock Data" />
          <Card img="" name="Mock Data" />

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
          <Card img="" name="Mock Data" bg="#008080"/>
          <Card img="" name="Mock Data" bg="#e74c3c"/>
          <Card img="" name="Mock Data"/>
          <Card img="" name="Mock Data" bg="#e74c3c"/>
          <Card img="" name="Mock Data"/>
          <Card img="" name="Mock Data" bg="#008080"/>
          <Card img="" name="Mock Data"/>
          <Card img="" name="Mock Data"/>
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
          <Card img="" name="Mock Data" bg="#008080"/>
          <Card img="" name="Mock Data" bg="#e74c3c"/>
          <Card img="" name="Mock Data"/>
          <Card img="" name="Mock Data"/>
          <Card img="" name="Mock Data"/>
          <Card img="" name="Mock Data"/>
          <Card img="" name="Mock Data" bg='#de2057'/>
          <Card img="" name="Mock Data" bg=" #20afbc"/>
      </section>
      </div>

      </Root>
    </div>
  )
}

export default Services