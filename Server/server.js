// npm init
// npm i express body-parser nodemon
const express = require("express")
const app = express();

const mongoose = require("mongoose");
const Blog = require("./models/blogs.js");
const cors = require("cors");

const bodyParser = require("body-parser")

const https = require("https")
const axios = require("axios")

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));


const apiKey = "5be4a60131798e59349d3764e174a738";
const units = "metric";

const dbUrl = "mongodb://localhost:27017/blogsDB";

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
    

    // https.get('https://api.open-meteo.com/v1/forecast?latitude=49.25&longitude=-123.12&current_weather=true&timezone=Canada/Pacific',(response) => {
    //             response.on("data",(data) => {
    //             //console.log(data);
    //             const weatherData = JSON.parse(data);
    //             console.log(weatherData);
    
    //             const temp = Math.round(weatherData.current_weather.temperature);
    
    //             res.json({"city": "Vancouver", "country": "Canada", "temp": temp, "iconImageURL": "", "description": "No description"});
    //             })})       
})


//READ OPERATION

app.get("/api/bloginfo", async (req, res) => {
    try {
      await mongoose.connect(dbUrl);
      console.log("database connected");
      Blog.find((err, blogs) => {
        if (err) res.send(err);
        else {
          console.log(blogs);
          res.send(blogs);
          mongoose.connection.close();
        }
      });
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  });
  
 //CREATE OPERATION
app.post("/api/bloginfo", async (req, res) => {
    try {
      //process request body
      const { title, author, headerImage, text } = req.body;
      console.log(title, author, headerImage, text);
  
      const blog = new Blog({
        title, author, headerImage, text
      });
      await mongoose.connect(dbUrl);
      blog.save((err) => {
        if (err) {
          console.log("ERROR: ", err);
          res.send(err);
        } else {
          console.log("Document inserted successfully");
          res.send(blog);
          mongoose.connection.close();
        }
      });
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
});
  
  ///////////UPDATE OPERATION
  
  app.put("/api/bloginfo/:id", async (req, res) => {
    console.log("inside update");
    try {
      //process request body
      const { title, author, headerImage, text } = req.body;
      console.log(title, author, headerImage, text);
  
      let _id = req.params.id;
      _id = mongoose.Types.ObjectId(_id);
  
      await mongoose.connect(dbUrl);
      console.log("database connected");
      Blog.updateOne(
        { _id: _id },
        { title, author, headerImage, text},
  
        (err, msg) => {
          if (err) {
            console.log("ERROR: ", err);
            res.send(err);
          } else {
            if (msg.modifiedCount == 0) {
              console.log(`No matching blog found`);
              res.send(`No matching blog found`);
            } else {
              console.log(`Successfully updated ${msg.modifiedCount} blog`);
              res.send(`Successfully updated ${msg.modifiedCount} blog`);
            }
            mongoose.connection.close();
          }
        }
      );
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  });
  
  ///////////DELETE OPERATION
  
  app.delete("/api/bloginfo/:id", async (req, res) => {
    console.log("inside delete");
    try {
      let _id = req.params.id;
      _id = mongoose.Types.ObjectId(_id);
  
      await mongoose.connect(dbUrl);
      console.log("database connected");
      Blog.deleteOne(
        { _id: _id },
  
        (err, msg) => {
          if (err) {
            console.log("ERROR: ", err);
            res.send(err);
          } else {
            if (msg.deletedCount == 0) {
              console.log(`No matching blog found`);
              res.send(`No matching blog found`);
            } else {
              console.log(`Successfully deleted ${msg.deletedCount} blog`);
              res.send(`Successfully deleted ${msg.deletedCount} blog`);
            }
            mongoose.connection.close();
          }
        }
      );
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  });

app.listen(5000, () => {
    console.log("The serves is up and running on port 5000");
})

