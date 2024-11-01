
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

 
 
 

const Navbar = () => {
  return (
    <>
    <div className='navbar'>

    <Image className='pc-logo' src="/images.png" width= "90" height="60" alt="" />
    <nav>

    <Link className = "links" href= "/whyUs"> WHY US</Link>
    <Link className = "links" href= "/about">ABOUT</Link>
    <Link className = "links" href= "/our-services">SERVICES</Link>
    <Link className = "links" href= "portfolio" >PORTFOLIO</Link>
    <Link className = "links" href= "/our-process">PROCESS</Link>
     <Link className = "links" href= "/reviews">REVIEWS</Link>
     <Link className = "links" href= "/our-skills">OUR SKILLS</Link>
     <Link className = "links" href= "/our-contact">CONTACT US</Link>
      
    </nav>

     
    </div>
      
    
      
    </>
  )
}
 

 

export default Navbar
