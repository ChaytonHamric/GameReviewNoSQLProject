var http = require('http');
var fs = require('fs');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const PORT = 3000;

// var xhr = new XMLHttpRequest();
// xhr.open("POST", "http://id.twitch.tv/oath2/token?client_id=g9ld31alrkoaably90beduok0snere&client_secret=6ju82oxji3lt6v5fp9idsc1d18gm4g&grant_type=client_credentials", true);
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.send(null)
// xhr.send(JSON.stringify({
//     value: value
// }));
fs.readFile('index.html', function (err, html) {

    if (err) throw err;

    http.createServer(function (request, response) {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    }).listen(PORT);
});

