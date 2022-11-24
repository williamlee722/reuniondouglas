import React from 'react';
import '../App.css';

const AboutUs = () => {
    return ( 
        <>
        <div className='aboutUsContainer' id='about'>
            <div className='aboutUsWrapper'>
                <div className='aboutUsInfo'>
                    <div className='aboutUsTxt'>
                        <div className='textWrapper'>
                            <h1 className='aboutUsH1'>AS DOUGLAS ALUMNIS</h1>
                            <p className='aboutUsP'>Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees</p>
                        </div>
                    </div>
                    <div className='aboutUsImg'>
                        <div className='imgWrap'>
                        <img className='aboutUsImage' src='./images/Hero_GroupPhoto.JPG' alt='photo' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default AboutUs;
