
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Admin:<Nosql123>@gamereviewsite.xhhn6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });

const mongoose = require('mongoose');
const express = require('express');

const app = express();

mongoose.connect('mongodb+srv://Admin:Nosql123@gamereviewsite.xhhn6.mongodb.net/Game-Review?retryWrites=true&w=majority',
                    { useNewUrlParser: true, useUnifiedTopology: true})
                    .then((result) => app.listen(3000))
                    .catch((err) => console.log(err));

