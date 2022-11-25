import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Blog from '../components/Blog';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

const Home = (onApiData) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const {city, country, temp, imageURL} = onApiData.onApiData;
  console.log(onApiData);
  console.log(city);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <AboutUs />
      <Blog />
      <ContactUs />
      <Footer />
    </>
  );
}
 
export default Home;