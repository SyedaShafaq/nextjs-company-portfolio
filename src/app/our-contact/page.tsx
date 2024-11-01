import Image from 'next/image'
 
import React from 'react'
 

const OurContact = () => {
  return (
    <>
      <div className='our-contact' >
      <span className='abt'>OUR</span> <span className='us'>CONTACT</span>
    <p className='our-para'> Lorem pellentesque purus lacinia. metus in suscipit lobortis, arcu urna commodo purus, vel ultricies neque neque vel justo.</p>
        </div>
        
         <div className='contact'>
        <Image className="logos-left" src="/icons8-phone-26.png " width= "25" height="25" alt="" />
      <span className="logos-left">+92(304)386-6719
      </span>
      <Image className="logos-left" src="/icons8-phone-26.png "  width= "25" height="25"alt="" />
      <span className="logos-left">+92(317)011-3001
      </span>
      <span><Image className='logos-left' src="/download.png" width= "25" height="25" alt="" />
       
        
      </span>
      <span className='con-email'>

            <a href="mailto:info@example.com">info@example.com</a>
      </span>
       
         
      
      </div>
     
       
        
    </>
  )
}

export default OurContact
