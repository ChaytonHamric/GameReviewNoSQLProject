const mongoose = require('mongoose'); 
const express = require('express')
const bodyParser = require('body-parser')

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
console.log("WHAT UP")

const app = express();
const path = require('path');
const review_Router = require("./routes/review.route")


// viewed at http://localhost:8080
app.use(express.static(path.join(__dirname + "/frontend/")))
app.use("/reviews", review_Router)
app.use(bodyParser.json())

app.get('/', function(req, res) {
    
    res.sendFile(path.join(__dirname + '/frontend/index.html'));
});

mongoose.connect('mongodb+srv://Admin:Nosql123@gamereviewsite.xhhn6.mongodb.net/Game-Review?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true})
        .then((result) => app.listen(3000))
        .catch((err) => console.log(err));


















// var xhr = new XMLHttpRequest();
// xhr.open("POST", "http://id.twitch.tv/oath2/token?client_id=g9ld31alrkoaably90beduok0snere&client_secret=6ju82oxji3lt6v5fp9idsc1d18gm4g&grant_type=client_credentials", true);
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.send(null)
// xhr.send(JSON.stringify({
//     value: value
// }));
