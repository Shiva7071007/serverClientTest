// var http = require('http');
// http.createServer(function (req, res) {
//     console.log(req);
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);




// const net = require('net');

// net.server.on('error', (e) => {
//     if (e.code === 'EADDRINUSE') {
//       console.log('Address in use, retrying...');
//       setTimeout(() => {
//         server.close();
//         server.listen(8080, "192.168.1.1");
//       }, 100000);
//     }
//   });

var net = require('net');

var client = new net.Socket();
client.connect(8080, '0.0.0.0', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});

client.on('error', function(err) {
    console.log(err)
 })