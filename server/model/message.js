var mongoose = require('mongoose');

var message = mongoose.Schema({
 from: String,
 subject: String })

var message = mongoose.model(
 'message', message);

module.exports=message;
