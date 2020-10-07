var express = require('express');
var app = express();
var moment = require('moment');
const OpenWeatherMapHelper = require("openweathermap-node");
const isPrime = require('prime-number')
const today = moment().format('DD');
const helper = new OpenWeatherMapHelper(
    {
        APPID: 'b0ace0b1d2af8ef30a2eb3a5e5b2ff6c'
    }
);
app.use('/', function(req, res, next) {
    helper.getCurrentWeatherByCityName("Mumbai", (err, currentWeather) => {
        if(isPrime(today)){
         res.status(200).json(currentWeather);
        }
        else{
            res.status(200).json("Date is not prime so no data")
          
        }
    });
    
  });

app.listen(8000,(res,req,next)=>{
    console.log('Server Start')
})