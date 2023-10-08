import Navbar from '@/src/components/Navbar/Navbar';
import './page.css'
import Hero from '@/src/components/Hero/Hero';
import BrandingVideo from '@/src/components/BrandingVideo/BrandingVideo';
import WhatWeDo from '@/src/components/WhatWeDo/WhatWeDo';
export default function Home() {

  return (
    <div className="app">
      <Navbar/>   
      <Hero/>  
      <BrandingVideo/> 
      <WhatWeDo/>
    </div>
  );
}
