import React from 'react'
import './Card.css'

function Card({img,name,bg}) {
    
  return (
    <div className='card-container' style={{backgroundColor:bg}}>
            <img src={img} alt="certificte-image"/>
            <div className='card-inner-container'>
              <h5>{name}</h5>
              <h6>Details about {name}</h6>
              <button>See More</button>
            </div>
    </div>
  )
}

export default Card