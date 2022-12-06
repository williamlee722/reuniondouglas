import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Blog from '../components/Blog';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import WeatherApi from '../components/WeatherApi';

const Home = ({onApiData, blogs}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <AboutUs />
      <Blog blogs={blogs}/>
      <ContactUs />
      <Footer />
      <WeatherApi apiData = {onApiData}/>
    </>
  );
}
 
export default Home;