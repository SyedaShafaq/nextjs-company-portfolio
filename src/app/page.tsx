 
import Link from "next/link";

 

export default function Home() {
  return (
     <>
   
       <div className="hero-section">
      
      <h1 className="hero-heading">WE ARE EXPERTS</h1>
      <p className='hero-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Obcaecati, nemo vero. Deleniti itaque iste neque quidem rem quo commodi magnam pariatur est mollitia?
            </p>
           <button className='hero-btn'>
            <Link href='/about'>READ MORE</Link> </button>
  </div>
     </>
  );
}
