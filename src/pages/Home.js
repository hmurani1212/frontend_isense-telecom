import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ServicesPreview from '../components/ServicesPreview';
import Subscribe from '../components/Subscribe';
import WhatsAppButton from '../components/WhatsAppButton';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ServicesPreview />
      <Subscribe />
      <WhatsAppButton />
    </>
  );
};

export default Home;
