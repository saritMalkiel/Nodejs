const express = require('express');    
const router  = express.Router()      
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
///הוספת עובד
router.post('/addEmployee', function (req, res) {
console.log(req.body)
var Employees =null;
const dbName = 'test';
MongoClient.connect(url, function(err, client) {
const col = client.db(dbName).collection('Employees');
col.insert(req.body, function(err, result) {
  console.log(err);
  console.log(result);
if(err){
  res.send('<b>error</b>');
}else{
  res.send('<b>sucess</b>');
}
})
})
})
///כל העובדים 
 
router.get("/AllEmployees",function(req,res){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    dbo.collection("Employees").find({},{projection:{firstName:1, lastName:1,tel:1,_id:0}}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result)
      db.close();
    })
  })
})
//הצגת עובד
router.get("/Employeedetails/:e",function(req,res){
var ress = req.params.e.slice(2,req.params.e.length);
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.collection("Employees").find({ }).toArray (function(err, result) {
    if (err) throw err;
    for (let i= 0; i < result.length; i++) {
      if(result[i].id==ress){
        res.send(result[i]);
      }
      else{
        res.send("no find")
      }
     }
     db.close();
  })
})
})
 
//מחיקת עובד לפי id  
router.get("/DeleteEmployee/:e",function(req,res){
var ress = req.params.e.slice(2,req.params.e.length);
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    var myquery = { id: ress };
    dbo.collection("Employees").updateOne(myquery,{ $set: { isactive:false }}, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      db.close();
    })
  })
})
//עדכון עובד 
router.post("/updatingEmployee/:e",function(req,res){
var ress = req.params.e.slice(2,req.params.e.length);
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    var myquery = { id: ress};
    var newvalues = { $set: { firstName:req.body.firstName, lastName:req.body.lastName,adress:req.body.adress,tel:req.body.tel,mail:req.body.mail } };
    dbo.collection("Employees").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });
  });
});
  
 
 

 

module.exports= router;   
  