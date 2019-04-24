var request = require('request');
var process = require('process');

let ip = (process.argv[2]);

request(`http://${ip}:3000`, function (error, response, body) {

    if (!error && response.statusCode == 200) {
        console.log(body)
    } else {
        console.log(error);
    }
})