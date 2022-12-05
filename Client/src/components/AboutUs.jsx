import React from 'react';
import '../App.css';
import GroupPhoto from './images/AboutUs_GroupPhoto.jpg';

const AboutUs = () => {
    return ( 
        <>
        <div className='aboutUsContainer' id='about'>
            <div className='aboutUsWrapper'>
                <div className='aboutUsInfo'>
                    <div className='aboutUsTxt'>
                        <div className='textWrapper'>
                            <h1 className='aboutUsH1'>Who we are</h1>
                            <p className='aboutUsP'>We are a group of international students from the <em>Computer Systems and Information Studies (CSIS) Program</em> of the <em>Commerce and Business Department</em> at Douglas College New Westminster Campus.<br/><br/> We are not a student club or fall under any faculty in Douglas Collge. We are an independent group created for the sole purpose of networking and sharing projects to develop our skillsets further and contribute to both our careers and our alma mater.</p>
                        </div>
                    </div>
                    <div className='aboutUsImg'>
                        <div className='imgWrap'>
                        <img className='aboutUsImage' src={GroupPhoto} alt='photo' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default AboutUs;
