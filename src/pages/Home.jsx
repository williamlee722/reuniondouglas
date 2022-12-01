import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Blog from '../components/Blog';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
<<<<<<< Updated upstream:src/pages/Home.jsx
=======

  const {city, country, temp, imageURL} = onApiData;
  console.log(onApiData);
  console.log(city);

>>>>>>> Stashed changes:Client/src/pages/Home.jsx
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