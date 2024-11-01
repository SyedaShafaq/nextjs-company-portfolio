import Image from 'next/image'
import React from 'react'


const page = () => {
  return (
    <>
    <div className='review'>
<span className='abt'>PEOPLE</span> <span className='us'>ABOUT US </span>
<p className='our-para'>Lorem ipsum dolor Lorem ipsum dolor sit amet.Lorem, ipsum dolor.Lorem ipsum dolor, sit amet consectetur adipisicing elit </p>
    <section className='peoples-review'>
    <div className="row1">
    <div className="column1">
        <Image className='review-img' src="/review.jpg "width="120" height="70" alt="" />
        <h4 className='review-heading' >JOHN DOE</h4>
    <p className='review-para'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nulla dolor sit amet consectetur adipisicing elit. Obcaecati, perferendis? </p>
    </div>
    <div className="column1">
    <Image className='review-img' src="/review.jpg "width="120"height="70"alt="" />
    <h4 className='review-heading' >JOHN DOE</h4>
    <p className='review-para'>Lorem ipsum dolor sit amet, consectetur
       adipiscing dolor sit amet consectetur adipisicing elit. Velit minima dicta voluptas? </p>
    </div>

    <div className="column1">
    <Image className='review-img' src="/review.jpg "width="120"height="70" alt="" />
    <h4 className='review-heading' >JOHN DOE</h4>
    <p className='review-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nulla Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, facilis?</p>
    </div>
    <div className="column1">
<Image className='review-img' src="/review.jpg"width="120"height="70" alt="" />
    <h4 className='review-heading' >JOHN DOE</h4>
    <p className='review-para'>Lorem, ipsum dolor.Lorem ipsum jgg,consectetur adipiscing elit. 
        Nulla facilisi Lorem ipsum dolor sit amet adipisicing elit. Ipsa, doloremque? </p>
    </div>
  </div>
    </section>
      </div>
    </>
  )
}

export default page
