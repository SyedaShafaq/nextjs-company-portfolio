import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



const GraphicDesign = () => {
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
<Image className='logo-img' src="/istockphoto-1472421626-612x612.jpg " width= "200" height="180"alt="" /> 
<Image className='logo-img' src="/istockphoto-1458918643-612x612.jpg "width= "200" height="180" alt="" />
<Image className='logo-img' src="/istockphoto-1438023500-612x612.jpg  " width= "200" height="180"alt="" />
<Image className='logo-img' src="/istockphoto-1856755269-612x612.jpg  "width= "200" height="180" alt="" />
</div>

      
<div className='logo2-div'>

<Image className='logos-img' src= "/istockphoto-1480674112-612x612.jpg "width= "200" height="180" alt="" />
<Image className='logos-img' src="/istockphoto-1856755778-612x612.jpg   " width= "200" height="180"alt="" />
<Image className='logos-img'src="/istockphoto-1486940614-612x612.jpg  "width= "200" height="180" alt="" />
<Image  className='logos-img' src="/istockphoto-1480214929-612x612.jpg  "width= "200" height="180" alt="" />
</div>


  
</section>
    </>
  )
}

export default GraphicDesign
