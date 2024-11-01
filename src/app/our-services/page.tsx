 
import Link from 'next/link'
import React from 'react'


const OurServices = () => {
  return (
    <>
    <div className='our-services'>

     <span className='our'>OUR</span> <span className='ser'>SERVICES</span>
     <p className='our-para'>Lorem ipsum dolor sit amet.Lorem, ipsum dolor.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, nulla?</p>
      <div className="row">
  <div className="column">
    <div className="card">
      <h3>WEB DESIGN</h3>
      <p className='card-para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, debitis. </p>
      <Link className='card-link' href='./our-services'>read more</Link>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <h3>GRAPHIC DESIGN</h3>
      <p className='card-para'>Lorem, ipsum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, optio.</p>
      <Link className='card-link' href='./our-services'>read more</Link>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <h3>BRANDING</h3>
      <p className='card-para'>lorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quod.</p>
      <Link className='card-link' href='./our-services'>read more</Link>
      </div>
  </div>
  
  <div className="column">
    <div className="card">
      <h3>MARKETING</h3>
      <p className='card-para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, eligendi.</p>
      <Link className='card-link' href='./our-services'>read more</Link>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default OurServices
