var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var message = require('../model/message');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("magarde1");
  console.log(req);
  console.log("magarde");
 message.find(function(err,data){
   if(err){
     console.log(err);
   }else{
     res.send(data)
   }
 })
//  res.send('respond with a resource');
})
.post('/', function(req, res, next){
 var messages = new message({ from: req.body.from,
  subject: req.body.subject});
 messages.save(function (err)
{
   if (err)
    {
     console.log(err);
   } else
   {
     console.log('Hello Saved');
    res.send({response:"data is saved"});
   }
 });
})
.put('/', function(req, res, next){

  message.findById(req.body.id, function (err, doc) {
  if (err)
       {
        console.log(err);
      } else
      {
        doc.from = req.body.from;
        doc.subject = req.body.subject;
        doc.save(message);
        res.send({response:"data is updated"});
      }

 });
})
.delete('/', function(req, res, next){
message.remove({_id:req.body.id}, function (err) {
    if (err)
        {
         console.log(err);
       } else
       {
         console.log('deleted');
        res.send({response:"data is saved"});
       }
  });

});

module.exports = router;
