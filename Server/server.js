// npm init
// npm i express body-parser nodemon
const express = require("express")
const app = express();

const bodyParser = require("body-parser")

const https = require("https")
const axios = require("axios")

app.use(express.urlencoded({extended:true}))


const apiKey = "5be4a60131798e59349d3764e174a738";
const units = "metric";

// var count = 0;

app.get("/api", (req,res) => {
    const city = 'Vancouver';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`

    // count++
    // console.log(count); 
    axios
        .get(url)
        .then((response) => {
            
            const data = response.data;
            console.log(data);
            const description = data.weather[0].description;
            const temp = Math.round(data.main.temp);
            const country = data.sys.country;

            // https://openweathermap.org/weather-conditions
            const icon = data.weather[0].icon;
            const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

            res.json({"city": city, "country": country, "temp": temp, "iconImageURL": imageURL, "description": description})
        })
        .catch((err) => {
            console.log("ERROR: ", err);
    });


    // https.get(url,(response) =>{
    //     console.log(response.statusCode); 
    //     // count++
    //     // console.log(count); 
    //     response.on("data",(data) => {
    //         //console.log(data);
    //         const weatherData = JSON.parse(data);
    //         console.log(weatherData);

    //         const description = weatherData.weather[0].description;
    //         const temp = Math.round(weatherData.main.temp);
    //         const country = weatherData.sys.country;

    //         // https://openweathermap.org/weather-conditions
    //         const icon = weatherData.weather[0].icon;
    //         const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    //         res.json({"city": city, "country": country, "temp": temp, "iconImageURL": imageURL, "description": description})
    //     })}        
    // )
    

    // https.get('https://api.open-meteo.com/v1/forecast?latitude=49.25&longitude=-123.12&current_weather=true&timezone=Canada/Pacific',(response) => {
    //             response.on("data",(data) => {
    //             //console.log(data);
    //             const weatherData = JSON.parse(data);
    //             console.log(weatherData);
    
    //             const temp = Math.round(weatherData.current_weather.temperature);
    
    //             res.json({"city": "Vancouver", "country": "Canada", "temp": temp, "iconImageURL": "No icon", "description": "No description"});
    //             })})
    
    
})

app.listen(5000, () => {
    console.log("The serves is up and running on port 5000");
})