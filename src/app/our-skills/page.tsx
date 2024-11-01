'use client'
import Image from 'next/image'
import React from 'react'

const OurSkills = () => {
  return (
    <>
    <div className='our-skill'>
<span className='abt'>OUR</span> <span className='us'>SKILLS </span>
<p className='our-para'>Lorem ipsum dolor sit amet.Lorem, ipsum dolor.Lorem ipsum dolor, sit amet consectetur adipisicing elit </p>
<div className='skill-img1'>
    <Image className='skill-img' src="/skill.jpg"width= "550" height="120" alt="" />
</div>
<div className='skill-project'>
    <h2 className='skill-heading'>START YOUR NEW PROJECT</h2>
    <form action="">

    <label htmlFor="name"></label>
        <input type="text" id="name" name="name" placeholder='YOUR NAME' required />
     <label htmlFor="email"></label>
     <input type="email" id="email" name="email" placeholder='YOUR EMAIL' required />
     <label htmlFor="phone"></label>
     <input type="tel" id="phone" name="phone" placeholder='YOUR NUMBER' required />
     <button className='skill-btn'>SEND REQUEST</button>
    </form>
    <div  >
      <p className='skill-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit commodi quibusdam ut suscipit nulla? Non, sit? Doloremque accusantium corporis quisquam.</p>
    </div>
</div>
</div>

      
    </>
  )
}

export default OurSkills
