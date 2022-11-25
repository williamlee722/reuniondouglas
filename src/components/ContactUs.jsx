import React from 'react';
import '../App.css';
import { Button } from './ButtonElements';
import GroupPhoto from './images/Hero_GroupPhoto.JPG';

const ContactUs = () => {
    return ( 
        <>
        <div className='contactUsContainer' id='contact'>
            <div className='contactUsWrapper'>
                <div className='contactUsInfo'>
                    <div className='contactUsTxt'>
                        <div className='textWrapper'>
                            <h1 className='contactUsH1'>Contact us for inquiries and information!</h1>
                            <Button to='signin' width={'5px'} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Admin</Button>
                        </div>
                    </div>
                    <div className='contactUsImg'>
                        <div className='imgWrap'>
                        <img className='contactUsImage' src={GroupPhoto} alt='photo' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default ContactUs;
