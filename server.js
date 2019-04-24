var express = require('express');
var app = express();

console.log('starting server');
app.get('/', function(req, res){
   res.send("hello, world!!!!");
});

app.listen(3000);
