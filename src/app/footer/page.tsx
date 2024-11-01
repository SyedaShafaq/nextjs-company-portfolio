import Image from "next/image";
import Link from "next/link";
import React from "react";


const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="box1">
          <Image className="pc-logo" src="/images.png " width= "90" height="60" alt="" />
          <p className="footer-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati,Lorem, ipsum dolor.{" "}
          </p>
          <h5 className="copyright">&copy;Panacloud 2019 </h5>
        </div>
        <div className="box2">
          <h1 className="footer-heading">SERVICES</h1>
          <div className="footer-links">
            <Link href="/">Lorem ipsum dolor....</Link>
          </div>

          <div className="footer-links">
            <Link href="/">Lorem ipsum dolor....</Link>
          </div>
          <div className="footer-links">
            <Link href="/">Lorem ipsum dolor....</Link>
          </div>
          <div className="footer-links" >
            <Link href="/">Lorem ipsum dolor....</Link>
          </div>
          <div className="footer-links" >
            <Link href="/">Lorem ipsum dolor....</Link>
          </div>

          <div className="footer-links">
            <Link href="/">Lorem ipsum dolor....</Link>
          </div>
        </div>
        <div className="box3">
          <h1 className="footer-heading" > USEFUL LINKS</h1>
          <div className="footer-links" >
            <Link href="/">Lorem ipsum dolor....</Link>
          </div>
          <div className="footer-links">
            <Link href="/">Lorem ipsum dolor....</Link>
          </div>
          <div className="footer-links">
            <Link href="/">Lorem ipsum dolor....</Link>
          </div>
          <div className="footer-links">
            <Link href="/">Lorem ipsum dolor....</Link>
          </div>
          <div className="footer-links">
            <Link href="/">Lorem ipsum dolor....</Link>
          </div>
          <div className="footer-links">
            <Link href="/">Lorem ipsum dolor....</Link>
          </div>
        </div>
        <div className="box4">
          <h1 className="footer-heading" >CONTACTS</h1>
          <div className="footor-con">
            <span>
            <Image className="footer-img" src="/icons8-phone-26.png "width= "20" height="20" alt="" />
              <span   >+92(304)386-6719</span>   </span>
            <span>
            <Image className="footer-img" src="/icons8-phone-26.png " width= "20" height="20" alt="" />
             <span  > +92(317)011-3001</span></span>
            <span>
              <Image className="footer-img" src="/download.png"width= "20" height="20" alt="" />
               <a href="mailto:info@example.com"> info@example.com</a>
            </span>
          </div>
          <div>

        <h2 className="footer-heading1">FOLLOW US</h2>
        <div className='social-logos1'>
      <Image className="logos" src="/icons8-facebook-24.png" width= "20" height="20"alt="" />
      <Image className="logos" src="/icons8-twitter-24.png"width= "20" height="20" alt="" />
      <Image className="logos" src="/icons8-google-24.png"width= "20" height="20" alt="" />
      <Image className="logos" src="/icons8-linkedin-24.png "width= "20" height="20" alt="" />
      <Image className="logos" src="/icons8-youtube-24.png "width= "20" height="20" alt="" />
      </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
