"use client"

import Image from "next/image"
import Link from "next/link"


 

const TopBar = () => {
   
  return (
    <div className='social-logos'>
      <Image className="logos" src="/icons8-facebook-24.png"width="25"height="25" alt="" />
      <Image className="logos" src="/icons8-twitter-24.png"width="25"height="25" alt="" />
      <Image className="logos" src="/icons8-google-24.png" width="25"height="25"alt="" />
      <Image className="logos" src="/icons8-linkedin-24.png "width="25"height="25" alt="" />
      <Image className="logos" src="/icons8-youtube-24.png " width="25"height="25"alt="" />
      <Image className="logos-left" src="/icons8-phone-26.png "width="25"height="25" alt="" />
      <h5 className="logos-left">+92(304)386-6719
      </h5>
      <Image className="logos-left" src="/icons8-phone-26.png "width="25"height="25" alt="" />
      <h5 className="logos-left">+92(317)011-3001
      </h5>
      <button  className="btn-left">
        <Link href='/our-contact' >CALL ME BACK</Link> 
      </button>

    </div>
  )
}

export default TopBar
