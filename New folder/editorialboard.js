const express = require('express');   
const format = require("node.date-time"); 
 
const router  = express.Router()      
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";



///הוספת יום
router.post('/addDay', function (req, res) {
console.log(req.body)
var Employees =null;
const dbName = 'test';
MongoClient.connect(url, function(err, client) {
 
const col = client.db(dbName).collection(req.body.id);
a=req.body
col.insert({a,"page":{"$ref":"Employees","$id":req.body.id}}, function(err, result) {
  console.log(err);
  console.log(result);
if(err){
  res.send('<b>error</b>');
}else{
  res.send('<b>sucess</b>');
}
})
})
 
});
// router.post('/addDay', function (req, res) {
//   const dbName = "test";
//   MongoClient.connect(url, function(err, client) {
//   const adminDb = client.db(dbName).admin();
//   adminDb.listDatabases(function(err, dbs) {
//   if(err)
//   console.log("error to connect")
//   console.log(dbs.databases);
//   client.close();
//   });
//   });
//   console.log(req.body)
//   var Employees =null;
//   const dbName = 'test';
//   MongoClient.connect(url, function(err, client) {
//   const col = client.db(dbName).collection(req.body.id);
//    for(let i=0; i<dbs.databases.length;i++) {
//      if(dbs.databases[i]==req.body.id){

//      }
//    }   
//   col.insert(req.body, function(err, result) {
//     console.log(err);
//     console.log(result);
//   if(err){
//     res.send('<b>error</b>');
//   }else{
//     res.send('<b>sucess</b>');
//   }
//   })
//   });
//   });
///קבלת פרטי עובד
 
// router.get("/get/:e",function(req,res){
//   var ress = req.params.e.slice(2,req.params.e.length);
//     MongoClient.connect(url, function(err, db) {
//      if (err) throw err;
//      var dbo = db.db("test");
//      dbo.collection(ress).find({}).toArray(function(err, result) {
//      if (err) throw err;
//      for (let i= 0; i < result.length; i++) {
//      if(result[i].id==ress){
//       var dt =result[i].date;
//        //  var formatted = dt.format('m/d/Y H:M:S');
//         ("date:"+dt+"       Beginningtime:"+result[i].Beginningtime+"  Endtime"+result[i].Endtime+" "+result[i].id);   
//       }
//       }
//       console.log(list)
//             db.close();
//           });
//         });
//       });
router.get("/get/:e",function(req,res){
var ress = req.params.e.slice(2,req.params.e.length);
  MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var dbo = db.db("test");
   dbo.collection(ress).find({},{projection:{a:1,_id:0}}).toArray(function(err, result) {
   if (err) throw err;
    res.send(result)
    
     
          db.close();
        });
      });
    });

//  var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("test");
//   dbo.collection("editorialboard").aggregate([{},{$group:{_id:"$id","count":{$sum:1},"day":{$push:"$day"}}}]),{projection:{firstName:1, lastName:1,tel:1}}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

 

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("test");
//   dbo.collection("editorialboard").find({id:"207458118"},{projection:{Beginningtime:1, Endtime:1,day:1,_id:0}},{$out:"207458118"}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

 

module.exports= router;   