import Link from 'next/link';
import React from 'react';
 

const  OurPortfolio = () => {
  return (
    <>
    <section className='portfolio'>

    <div className='our-portfolio'>
     <span className='ours'>OUR</span> <span className='port'>PORTFOLIO</span>
     <p className='our-para'>Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nulla?</p>
    </div>
    <div className='link' >

<Link className='our-links' href="/portfolio/webDesign"> WEB DESIGN </Link>
    <Link className='our-links' href="/portfolio/graphicDesign"> GRAPHIC DESIGN </Link>
    <Link className='our-links' href="/portfolio/branding"> BRANDING </Link>
    <Link className='our-links' href="/portfolio/logo"> LOGO </Link>

    <Link className='our-links' href="/portfolio/marketing"> MARKETING  </Link>
    <Link className='our-links' href="/portfolio/advertisment"> ADVERTISMENT </Link>
    </div>


    </section>
      
    </>
  )
}

export default OurPortfolio
