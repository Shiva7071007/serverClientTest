var express = require('express');
var app = express();
app.use(express.json());

console.log('starting server');
app.get('/', function(req, res){
   console.log(req)
   res.send("hello, world!!!!");
});

app.post('/asset/pushAssetDetails', function(req, res) {
   // console.log('POST /')
   console.dir(req.body)


   setTimeout(() => {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end('thanks')
   }, 10000);


   // res.writeHead(200, {'Content-Type': 'text/html'})
   // res.end('thanks')
 })

app.listen(8444);
