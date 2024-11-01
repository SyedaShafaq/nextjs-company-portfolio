import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const WebDesign= () => {
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
<Image className='logo-img' src="/web1.jpg" width= "200" height="180" alt="" /> 
<Image className='logo-img' src="/web9.jpg  " width= "200" height="180" alt="" />
<Image className='logo-img' src="/web6.jpg  " width= "200" height="180"alt="" />
<Image className='logo-img' src="/web8.jpg  "width= "200" height="180" alt="" />
</div>

      
<div className='logo2-div'>

<Image className='logos-img' src="/web2.jpg " width= "200" height="180" alt="" />
<Image className='logos-img' src="/web7.jpg  " width= "200" height="180" alt="" />
<Image className='logos-img'src="/web5.jpg  " width= "200" height="180" alt="" />
<Image  className='logos-img' src= "/web4.jpg   " width= "200" height="180"alt="" />
</div>


  
</section>
    </>
  )
}

export default WebDesign;
