// npm init
// npm i express body-parser nodemon
const express = require("express")
const app = express();

const bodyParser = require("body-parser")

const https = require("https")

app.use(express.urlencoded({extended:true}))


const apiKey = "39bab8448614bfaf20e38b9d85cd98d9";
const units = "metric";

app.get("/api", (req,res) => {
    const city = 'Vancouver';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`

    https.get(url,(response) =>{
        console.log(response.statusCode);

        response.on("data",(data) => {
            console.log(data);
            const weatherData = JSON.parse(data);
            console.log(weatherData);

            const description = weatherData.weather[0].description;
            const temp = Math.round(weatherData.main.temp);
            const country = weatherData.sys.country;

            // https://openweathermap.org/weather-conditions
            const icon = weatherData.weather[0].icon;
            const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

            res.json({"city": city, "country": country, "temp": temp, "iconImageURL": imageURL})
        })
    })    
})

app.listen(5000, () => {
    console.log("The serves is up and running on port 5000");
})