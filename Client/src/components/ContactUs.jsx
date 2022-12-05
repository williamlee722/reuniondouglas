import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ContactUs = () => {
    return ( 
        <div className='contactUsContainer' id='contact'>
            <div className='contactUsWrapper'>
                <div className='contactUsInfo'>
                    <div className='contactUsTxt'>
                        <h1 className='contactUsH1'>Contact us for more information!</h1>
                        <p className='contactUsP'>If you have any questions or enquries of Reunion Douglas, please send us an email.<br/>Most emails will be replied within 5 business days.</p>
                        <button className='contactUsBtn' smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={() => window.location = 'mailto:reuniondouglasl@gmail.com'}>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ContactUs;
