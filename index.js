const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const Bing = require('node-bing-api')({accKey: "* *"});
const mongoose = require('mongoose');
const imageDetails = require('./models/imageDetailsModel');

mongoose.connect("mongodb://<un>:<up>@ds113606.mlab.com:13606/ialayer");
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || 3000, ()=>{
    console.log("running at 3000");
});

app.get("/api/imagesearch/:val*", (req, res)=>{
    var {val} = req.params;
    var {offset} = req.query;
 
    var data = new imageDetails({
        searchVal: val,
        searchDate: new Date()
    });
    data.save(err=>{
        if(err){
            throw err;
            
        }
    });
    Bing.images(val,{count: 10, offset: offset}, (err, response, body)=>{
        res.json(body);
    })
});