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
      <h1 className='title' id='personal-services'>Categories of Services Offering</h1>
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
          <Link to="/services/education/birthcertificate" className='service-link'><Card img="" name="Scholorships" bg=" #2e86c1 "/></Link>
          <Link to="/services/education/birthcertificate" className='service-link'><Card img="/educational/degree.png" name="DOST(Degree)" bg=" #9c2bd1"/></Link>
          <Link to="/services/education/birthcertificate" className='service-link'><Card img="/educational/school.png" name="TSWREIS" bg="#85929e"/></Link>
          <Link to="/services/education/birthcertificate" className='service-link'><Card img="/educational/educationloan.png" name="Education Loan" bg=" #20afbc"/></Link>
          <Link to="/services/education/birthcertificate" className='service-link'><Card img="/educational/oversea.png" name="Overseas Scholorships"/></Link>
          <Link to="/services/education/birthcertificate" className='service-link'><Card img="" name="JEE" bg="#16a085" /></Link>
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
        <div id=''>
        <section className='category-parent'>
          <Link to="/services/road-transport/birthcertificate" className='service-link'><Card img="/road-transport/card.png" name="Driving License" bg="#008080"/></Link>
          <Link to="/services/road-transport/birthcertificate" className='service-link'><Card img="/road-transport/license.png" name="Fitness Certificates" bg="#e74c3c"/></Link>
          <Link to="/services/road-transport/birthcertificate" className='service-link'><Card img="/road-transport/vehicletax.png" name="Road Tax" bg=" #d520b9 "/></Link>
          <Link to="/services/road-transport/birthcertificate" className='service-link'><Card img="/road-transport/roadpollution.png" name="Pollution Certificate" bg="##28a1f2"/></Link>
          <Link to="/services/road-transport/birthcertificate" className='service-link'><Card img="" name="Permit Service" bg=" #839192 "/></Link>
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
          <Card img="" name="Health Cards" bg="#16a085" />
          <Card img="" name="Vaccination Certificate" bg=" #ab17bc "/>
          <Card img="" name="" bg="#3268a8"/>
          <Card img="" name="" bg="#008080"/>
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
        <div id='agriculture'>      
        <section className='category-parent'>
          <Link to="/services/welfare/birthcertificate" className='service-link'><Card img="/welfare/pension.png" name="Pension Services" bg=" #20afbc"/></Link>
          <Link to="/services/welfare/birthcertificate" className='service-link'></Link><Card img="/welfare/" name="Caste Certificate"bg="#85929e" />
          <Link to="/services/welfare/birthcertificate" className='service-link'></Link><Card img="/welfare/" name="Shadi Mubharakh"/>
          <Link to="/services/welfare/" className='service-link'><Card img="/welfare/kalyana.png" name="Kalyana laxmi" bg="#e74c3c"/></Link>
          <Link to="/services/welfare/" className='service-link'><Card img="" name="Income Certificate" bg="#e74c3c"/></Link>
          <Link to="/services/welfare/" className='service-link'><Card img="" name="Arogya Sree" bg=" #bc7b17 " /></Link>
          <Link to="/services/welfare/" className='service-link'><Card img="" name="Labour Card" bg="#32a89e"/></Link>
          <Link to="/services/welfare/" className='service-link'><Card img="" name="Residence Certificate" bg=" #048099 " /></Link>
          <Link to="/services/welfare/" className='service-link'><Card img="" name="Labour Card"/></Link>
          <Link to="/services/welfare/" className='service-link'><Card img="" name="Marriage Certificate" bg=" #840fb0 " /></Link>
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
          <Card img="" name="Encumbrance Certificate" bg='#de2057'/>
        </section>
        </div>
      </Root>

    </div>
  )
}

export default Services