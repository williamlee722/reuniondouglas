import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <footer className='footerContainer'>
      <div className='footerWrap'>
        <div className='footerGrid'>
          <div className='adminButtonWrap'>
            <Link className='footerLogo' to='/' onClick={toggleHome}>ReunionDouglas</Link>
            <small className='copyright'>ReunionDouglas © 2022 All rights reserved.<br/>Designed by Berke & William.</small>
            <div className='adminButton'>
              <Link className='adminBtn' to='/admin' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Admin</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
