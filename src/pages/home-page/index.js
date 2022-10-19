import React, { useState } from 'react';
import HeroSection from '../../components/main/hero-section';
import OurServices from '../../components/main/our-services';
import WhyUs from '../../components/main/why-us';
import Testimonial from '../../components/main/testimonial';
import CtaBanner from '../../components/main/cta-banner';
import Faq from '../../components/main/faq';

const HomePage = () => {
  const [name, setName] = useState('home')
  const props = {
    name, 
    setName,
  }
  return (
    <div className='home-page'>
      <HeroSection {...props} />
      <OurServices {...props} />
      <WhyUs {...props} />
      <Testimonial {...props} />
      <CtaBanner {...props} />
      <Faq {...props} />
    </div>
  );
};

export default HomePage;