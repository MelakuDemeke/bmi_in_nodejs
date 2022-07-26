const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/",function(req,res){
    var h = Number(req.body.h);
    var w = Number(req.body.w);
    var hsq = h*h;
    var bmi = w/hsq;
    res.send("Your BMI is " +bmi);
});

app.listen(3000,function(){
    console.log("server started at port 3000");
});

