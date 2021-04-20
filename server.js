var express = require('express')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
console.log("WHAT UP")

var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.use(express.static(path.join(__dirname + "/frontend/")))
app.get('/', function(req, res) {
    
    res.sendFile(path.join(__dirname + '/frontend/index.html'));
});

app.listen(3000);


















// var xhr = new XMLHttpRequest();
// xhr.open("POST", "http://id.twitch.tv/oath2/token?client_id=g9ld31alrkoaably90beduok0snere&client_secret=6ju82oxji3lt6v5fp9idsc1d18gm4g&grant_type=client_credentials", true);
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.send(null)
// xhr.send(JSON.stringify({
//     value: value
// }));
