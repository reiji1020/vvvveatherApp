require('dotenv').config();
const express = require('express');

const router = express.Router();
const request = require('request');
const YOLPURL = "https://map.yahooapis.jp/weather/V1/place"

router.get('/getWeather', function(req, res, next){
    request.get({
        uri: YOLPURL,
        headers: {'Content-type': 'application/json'},
        qs: {
            appid: process.env.NODE_APP_ID,
            coordinates: "=" + req.query.longitude + "," + req.query.latitude
        },
        json: true
    },function(err, request, data){
        res.send(data);
    });
    
})

module.exports = router;