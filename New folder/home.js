const express = require('express'); 
const app = express(); 
const Employeedetails = require('./Employeedetails')
const editorialboard = require('./editorialboard')
const fs = require('fs');
var bodyParser = require('body-parser');


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));



 
app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   next();
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/', function (req, res) {
  res.send('<b>Hello World!</b>');
});

 
   
 
  

app.use('/Employeedetails',Employeedetails);
app.use('/editorialboard',editorialboard);
 
app.use(function (req, res, next) {
    console.log("url not found");
    next();
   });
app.use(function (req, res, next) {
   res.send("url not found");
   
  });


  app.use(function (req, res, next) {
    console.log("url not found");
    
   });
  



 