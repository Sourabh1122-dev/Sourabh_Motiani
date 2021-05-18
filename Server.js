const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
   var ht = Number(req.body.num1);
   var wt = Number(req.body.num2);
   res.send("<h1> Your BMI is: </h1>" + (wt/(ht*ht)));
});


app.listen(3000, function(){
  console.log("A Server has started on port 3000");
});
