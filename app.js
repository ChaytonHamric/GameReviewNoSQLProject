
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
const Review = require('./models/Reviews')

const app = express();
function add_review(){
    mongoose.connect('mongodb+srv://Admin:Nosql123@gamereviewsite.xhhn6.mongodb.net/Game-Review?retryWrites=true&w=majority',
                        { useNewUrlParser: true, useUnifiedTopology: true})
                        .then((result) => app.listen(3000))
                        .catch((err) => console.log(err));

    app.get('/add-review', (req, res) => {
        const review = new Review({
            GameName: "Digimon",
            HoursPlayed: 500,
            FiveStarRating: 5,
            Review: "Great Game"
        });

        review.save()
            .then((result) => {
                res.send(result)
            })
            .catch((err) => {
                console.log(err);
            });
    })
}

app.get('/all-reviews', (req, res) => {
    Review.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
})

app.get('/single-review', (req, res) => {
    Review.findById()
})