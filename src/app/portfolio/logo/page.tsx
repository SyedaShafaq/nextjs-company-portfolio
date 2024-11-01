import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


 
 
 


const Logo= () => {
  return (
    <>
    <section className='logo-section'>

    <div className='link' >

<Link className='logo-links' href="/portfolio/webDesign"> WEB DESIGN </Link>
    <Link className='logo-links' href="/portfolio/graphicDesign"> GRAPHIC DESIGN </Link>
    <Link className='logo-links' href="/portfolio/branding"> BRANDING </Link>
    <Link className='logo-links' href="/portfolio/logo"> LOGO </Link>

    <Link className='logo-links' href="/portfolio/marketing"> MARKETING  </Link>
    <Link className ='logo-links' href="/portfolio/advertisment"> ADVERTISMENT </Link>
    </div>
    
    <div className='logo1-div'>
    <Image className='logo-img' src="/logo1.jpg   "width= "200" height="180" alt="" />
    <Image className='logo-img' src="/logo3.jpg "width= "200" height="180" alt="" />
    <Image className='logo-img' src="/logo8.jpg  " width= "200" height="180"alt="" />
    <Image className='logo-img' src="/logo4.jpg " width= "200" height="180"alt="" />
    </div>
    <div className='logo2-div'>

    <Image className='logos-img' src="/logo6.jpg "width= "200" height="180" alt="" />
    <Image className='logos-img' src="/logo7.jpg   "width= "200" height="180" alt="" />
    <Image className='logos-img'src="/logo9.jpg "width= "200" height="180" alt="" />
    <Image  className='logos-img' src="/logo5.jpg   "width= "200" height="180" alt="" />
    </div>
    
    
      
    </section>
    </>
  )
}

export default Logo;
