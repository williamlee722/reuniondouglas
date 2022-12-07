import '../App.css';
import React, { useState } from 'react';

const WeatherApi = ({apiData}) => {

    //const {ApiData} = onApiData;
    const {city, country, temp, iconImageURL, description} = apiData;
    console.log(apiData);
    console.log(city);
    console.log(iconImageURL);

    return ( 
        <div className='weatherApi'>
            <table className='weatherApiBox'>
                <tbody>
                    <tr className='weatherIcon'>
                        <td rowSpan='2'> 
                            <img src={iconImageURL} alt='WeatherIcon' style={{width: '50px',  height: '50px'}}></img>
                        </td>
                        <td className='weatherApicity'>
                            {city}
                        </td>
                    </tr>
                    <tr className='weatherdegrees'>
                        <td className='weatherApitemp'>
                            {temp} &#8451;
                        </td>
                    </tr>
                </tbody>                
            </table>
        </div>
     );
}
 
export default WeatherApi;