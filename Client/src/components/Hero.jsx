import React from 'react';
import '../App.css';
import GroupPhoto from './images/Hero_GroupPhoto.JPG';

function HeroSection() {
  return (
    <div className='heroContainer' id='home'>
      <div className='heroBg'>
        <img className='heroImg' src={GroupPhoto}></img>
      </div>
      <div className='heroContext'>
        <h1 className='heroH1'>WE ARE THE CLASS OF 2023</h1>
        <p className='heroP'>
          2 years, 6 semesters, 17520 hours might seem long for some, but it wasn't long enough for us.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
