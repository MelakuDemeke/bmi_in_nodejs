const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});



app.listen(3000,function(){
    console.log("server started at port 3000");
});

