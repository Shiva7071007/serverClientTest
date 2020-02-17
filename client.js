var request = require('request');
var process = require('process');

let ip = (process.argv[2]);
let port = (process.argv[3]);

request(`http://${ip}:port/`, function (error, response, body) {

    if (!error && response.statusCode == 200) {
        console.log(body)
    } else {
        console.log(error);
    }
})