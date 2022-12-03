import '../App.css';
import React, { useState } from 'react';

const WeatherApi = ({apiData}) => {

    //const {ApiData} = onApiData;
    const {city, country, temp, iconImageURL, description} = apiData;
    console.log(apiData);
    console.log(city);
    console.log(iconImageURL);

    return ( 
        <div style={{position: 'fixed', bottom: '0', right: '0'}}>
            <table className='weatherApiBox' style={{width: '90px', height: '50px', padding: '5px', borderRadius: '10px'}}>
                <tbody>
                    <tr style={{height: '20px'}}>
                        <td rowSpan='2'> 
                            <img src={iconImageURL} alt='WeatherIcon' style={{width: '50px',  height: '50px'}}></img>
                        </td>
                        <td style={{fontSize: '14px'}}>
                            {city}
                        </td>
                    </tr>
                    <tr style={{height: '40px'}}>
                        <td style={{fontSize: '18px'}}>
                            {temp} &#8451;
                        </td>
                    </tr>
                </tbody>                
            </table>
        </div>
     );
}
 
export default WeatherApi;