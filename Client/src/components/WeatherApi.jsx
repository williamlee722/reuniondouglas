const WeatherApi = ({apiData}) => {

    //const {ApiData} = onApiData;
    const {city, country, temp, iconImageURL, description} = apiData;
    console.log(apiData);
    console.log(city);
    console.log(iconImageURL);

    return ( 
        <div>
            <img src={iconImageURL} alt='WeatherIcon'></img>
            <p>{city} weather is {description} and Temperature is {temp}</p>
        </div>
     );
}
 
export default WeatherApi;