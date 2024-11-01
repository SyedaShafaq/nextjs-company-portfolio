import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

 




const About = () => {
  return (
    <>
    <section className='about'>

  <span className='abt'>ABOUT</span> <span className='us'>US</span>
    <Image className='about-img' src="/istockphoto-619745186-612x612.jpg " width= "500" height="300" alt=""  
     />
    
      <p className='about-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis assumenda asperiores voluptate possimus amet sint laboriosam
         laudantium soluta sequi recusandae corporis natus deserunt
          dolor in unde, excepturi beatae qui incidunt adipisci 
          provident ipsam voluptatum voluptas placeat. Vel obcaecati dolores
           cum tenetur fugiat aliquam dolor nequelorem10.
        </p>
    
    <div>
      <button className='about-btn'>
        <Link href='/portfolio'>READ MORE</Link> </button>
    </div>

    </section>
     
      
    </>
  )
}

export default About
 