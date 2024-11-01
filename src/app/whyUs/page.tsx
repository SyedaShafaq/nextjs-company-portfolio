import Image from 'next/image';
import React from 'react'

const WhyUs = () => {
  return (
    <>
      <section className='second-page'>

<div className='our-advSection'>
   <span className='our'>OUR</span> <span className='adv'>ADVANTAGES</span>
  <p className='our-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facilis in architecto fuga, excepturi reprehenderit amet asperiores dignissimos exercitationem quaerat labore?</p>
</div>
<section className='images-section'>

<div className='bulb'>
  <Image className='img-bulb' src="/icons8-bulb-50.png "width="60"height="60" alt="" />
  <h3 className='bulb-heading'>INNOVATION</h3>
  <p className='bulb-para'>Lorem ipsum dolor sit amet </p>
</div>
<div className='thumbs'>
<Image className='img-thumbs' src="/icons8-thumbs-up-50 (1).png"width="60"height="60" alt="" />
<h3 className='thumbs-heading'>QUALITY</h3>
<p className='thumbs-para'>Lorem ipsum dolor sit amet </p>
</div>
<div className='clock'>
<Image className='clock-img' src="/icons8-clock-50 (1).png"width="60"height="60" alt="" />
<h3 className='clock-heading'>EXPERIENCE</h3>
<p className='clock-para'>Lorem ipsum dolor sit amet    </p>
</div>
<div className='user'>
<Image className='user-img' src="/icons8-users-50.png " width="60"height="60"alt="" />
<h3 className='user-heading'>HAPPY CLIENTS</h3>
<p className='user-para'>Lorem, ipsum dolor sit amet  </p>
</div>
<div className='message' >
<Image className='message-img' src="/icons8-messages-50.png " width="60"height="60"alt="" />
<h3 className='message-heading'> SUPPORT</h3>
<p className='message-para'>Lorem ipsum dolor sit amet   </p>
</div>
</section>
</section>
    </>
  )
}

export default WhyUs;
