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
          <Link to="/services/personal/birthcertificate" className='service-link'><Card img="/personal/birth.png" name="Birth Certificate" bg="#008080"/></Link>
          <Link to='/services/personal/deathcertificate' className='service-link'><Card img="license.png" name="Death Certificate" bg="#e74c3c"/></Link>
          <Link to='/services/personal/pancard' className='service-link'><Card img="/personal/pan.png" name="Pan Card" bg='#de2057'/></Link>
          <Link to='/services/personal/passport' className='service-link'><Card img="personal-service.png" name="Passport" bg=' #e67e22 '/></Link>
          <Link to='/services/personal/driving license' className='service-link'><Card img='/road-transport/card.png' name="Driving License" bg=' #707b7c '/></Link>
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
          <Link to="/services/education/scholorships" className='service-link'><Card img="/educational/scholorships.jpg" name="Scholorships" bg=" #2e86c1 "/></Link>
          <Link to="/services/education/dost" className='service-link'><Card img="/educational/degree.png" name="DOST(Degree)" bg=" #9c2bd1"/></Link>
          <Link to="/services/education/tswreis" className='service-link'><Card img="/educational/school.png" name="TSWREIS" bg="#85929e"/></Link>
          <Link to="/services/education/educational loan" className='service-link'><Card img="/educational/educationloan.png" name="Education Loan" bg=" #20afbc"/></Link>
          <Link to="/services/education/overseas scholorships" className='service-link'><Card img="/educational/oversea.png" name="Overseas Scholorships"/></Link>
          <Link to="/services/education/jee" className='service-link'><Card img="/educational/jee.svg" name="JEE" bg="#16a085" /></Link>
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
          <Link to="/services/road-transport/driving license" className='service-link'><Card img="/road-transport/card.png" name="Driving License" bg="#008080"/></Link>
          <Link to="/services/road-transport/vehicle fitness" className='service-link'><Card img="/road-transport/license.png" name="Fitness Certificates" bg="#e74c3c"/></Link>
          <Link to="/services/road-transport/road tax" className='service-link'><Card img="/road-transport/vehicletax.png" name="Road Tax" bg=" #d520b9 "/></Link>
          <Link to="/services/road-transport/pollution certificate" className='service-link'><Card img="/road-transport/roadpollution.png" name="Pollution Certificate" bg="##28a1f2"/></Link>
          <Link to="/services/road-transport/permit service" className='service-link'><Card img="personal-service.png" name="Permit Service" bg=" #839192 "/></Link>
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
          <Link to="/services/health/healthcard" className='service-link'><Card img="/personal/birth.png" name="Health Cards" bg="#16a085" /></Link>
          <Link to="/services/health/vaccination certificate" className='service-link'><Card img="/personal/pan.png" name="Vaccination Certificate" bg=" #ab17bc "/></Link>
          {/* <Link to="/services/health/" className='service-link'><Card img="" name="" bg="#3268a8"/></Link>
          <Link to="/services/health/" className='service-link'><Card img="" name="" bg="#008080"/></Link> */}
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
          <Link to="/services/welfare/pension service" className='service-link'><Card img="/welfare/pension.png" name="Pension Services" bg=" #20afbc"/></Link>
          <Link to="/services/welfare/caste certificate" className='service-link'></Link><Card img="/socialwelfare.png" name="Caste Certificate"bg="#85929e" />
          <Link to="/services/welfare/shadhi mubarak" className='service-link'></Link><Card img="/welfare/kalyana.png" name="Shadi Mubharakh"/>
          <Link to="/services/welfare/kalyana laxmi" className='service-link'><Card img="/welfare/kalyana.png" name="Kalyana laxmi" bg="#e74c3c"/></Link>
          <Link to="/services/welfare/income certificate" className='service-link'><Card img="tax.png" name="Income Certificate" bg="#e74c3c"/></Link>
          <Link to="/services/welfare/arogya sree" className='service-link'><Card img="medical.png" name="Arogya Sree" bg=" #bc7b17 " /></Link>
          <Link to="/services/welfare/labour card" className='service-link'><Card img="/personal/pan.png" name="Labour Card" bg="#32a89e"/></Link>
          <Link to="/services/welfare/residence certificate " className='service-link'><Card img="/personal/birth.png" name="Residence Certificate" bg=" #048099 " /></Link>
          <Link to="/services/welfare/marriage certificate" className='service-link'><Card img="personal-service.png" name="Marriage Certificate" bg=" #840fb0 " /></Link>
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
          <Link to="/services/agri/crop loan" className='service-link'><Card img="agriculture.png" name="Crop Loans" bg="#008080"/></Link>
          <Link to="/services/agri/land registration" className='service-link'><Card img="land-property.png" name="Land Registration" bg="#e74c3c"/></Link>
          <Link to="/services/agri/passbook" className='service-link'><Card img="loan.png" name="Passbook"/></Link>
          <Link to="/services/agri/encumbrance certificate" className='service-link'><Card img="tax.png" name="Encumbrance Certificate" bg='#de2057'/></Link>
        </section>
        </div>
      </Root>

    </div>
  )
}

export default Services