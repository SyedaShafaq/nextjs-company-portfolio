import Image from 'next/image';
 
import React from 'react';



const OurProcess = () => {
  return (
    <>
 <div className='our-process '>
<span className='our'>OUR</span> <span className='ser'>PROCESS</span>
<p className='our-para'>Lorem ipsum dolor Lorem ipsum dolor sit amet.Lorem, ipsum dolor.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, nulla?</p>
<section className='images-section '>

<div className=' phone-div '>
  <Image className='phone-img ' src="/phone.jpg " width= "60" height="60"alt="" />
  <h3 className='phone-heading '>REQUEST CALL</h3>
  <p className='phone-para '>Lorem ipsum dolor sit amet Lorem ipsum dolor sit. </p>
</div>
<div className='consult-div'>
<Image className='consult-img ' src="/email.jpg  "width= "60" height="60" alt="" />
<h3 className='consult-heading '>CONSULTATION</h3>
<p className='consult-para '> Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</p>
</div>
<div className='planning-div '>
<Image className='planning-img ' src="/planning.jpg" width= "60" height="60"alt="" />
<h3 className='planning-heading '>PLANNING</h3>
<p className='planning-para '> Lorem ipsum dolor sit amet Lorem ipsum dolor sit. </p>
</div>
<div className='work-div '>
<Image className='work-img ' src="/process.jpg   " width= "60" height="60" alt="" />
 
<h3 className=' work-heading'>WORK PROCESS</h3>
<p className='work-para '> Lorem ipsum dolor sit amet Lorem ipsum dolor sit. </p>
</div>
<div className='correct-div ' >
<Image className='correct-img ' src="/lock.jpg  " width= "60" height="60"  alt="" />
<h3 className='correct-heading '>CORRECTING</h3>
<p className='correct-para '> Lorem ipsum dolor sit amet Lorem ipsum dolor sit.   </p>
</div>
<div className='deliver-div ' >
<Image className=' deliver-img' src="/tick.jpg  "width= "60" height="60" alt="" />
<h3 className= 'deliver-heading'>DELIVER</h3>
<p className='deliver-para '> Lorem ipsum dolor sit amet Lorem ipsum dolor sit.  </p>
</div>
</section>
 </div>
    </>
  )
}

export default OurProcess;
