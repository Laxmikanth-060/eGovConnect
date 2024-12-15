import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import Button from '@mui/material/Button';

function Home() {
  return (

    <div className='homeParentDiv'>

      <div className='landing-container'>
        <div><img id='landing-img' src='landing-page.png' alt='home_image' />
        <Link to='/services'><Button 
        style={{
          position: 'absolute', 
          top: '380px', 
          left: '120px', 
          width: '200px', 
          height: '40px', 
          margin: '20px', 
        }}
        sx={{
          borderRadius: '15px', 
          fontFamily: 'Arial, sans-serif', 
          fontWeight:'500',
          fontSize: '16px',
        }}
        variant="contained">Explore Services</Button></Link>
        </div>
      </div>

      <section className='services-section'>
        <h1 id='heading'>Services We Are Providing</h1>
        <div className='service-parent-container'>

          <Link className='link' to='/services#personal-services'><div className='service-container' style={{ backgroundColor: '#008080' }}> 
            <h2>Personal Identication</h2>
            <div><img className='service-section-img' src='personal-service.png' alt='personal-service-img'></img></div>
          </div></Link>

          <Link className='link' to='/services#socialwelfare'><div href className='service-container' style={{ backgroundColor: '#DE3163' }}>
            <h2>Social & Welfare</h2>
            <div><img className='service-section-img' src='socialwelfare.png' alt='social-service-img'></img></div>
          </div></Link> 

          <Link className='link' to='/services#education'><div href className='service-container' style={{ backgroundColor: ' #e67e22 ' }}>
            <h2>Education & Scholorships</h2>
            <div><img className='service-section-img' src='educational.png' alt='social-service-img'></img></div>
          </div></Link> 

          <Link className='link' to='/services#road-transport'><div href className='service-container' style={{ backgroundColor: '#e74c3c' }}>
            <h2>Transport Related</h2>
            <div><img className='service-section-img' src='transport.png' alt='transport-img'></img></div>
          </div></Link> 

          <Link className='link' to='/services#personal-services'><div href className='service-container' style={{ backgroundColor: ' #7f8c8d ' }}>
            <h2>Utility & Civic</h2>
            <div><img className='service-section-img' src='civic.png' alt='civic-img'></img></div>
          </div></Link> 

          <Link className='link' to='/services#personal-services'><div href className='service-container' style={{ backgroundColor: ' #7d3c98 ' }}>
            <h2>Finance and Tax</h2>
            <div><img className='service-section-img' src='tax.png' alt='tax-img'></img></div>
          </div></Link> 

          <Link className='link' to='/services#agriculture'><div href className='service-container' style={{ backgroundColor: ' #28b463 ' }}>
            <h2>Agriculture & Rural Development</h2>
            <div><img className='service-section-img' src='agriculture.png' alt='tax-img'></img></div>
          </div></Link> 

          <Link className='link' to='/services#personal-services'><div href className='service-container' style={{ backgroundColor: '#2e86c1' }}>
            <h2>Land & Property</h2>
            <div><img className='service-section-img' src='land-property.png' alt='tax-img'></img></div>
          </div></Link> 

        </div>
      </section>
     
    </div>

  )
}

export default Home