const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


//------------ content ------------///
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// ------------ Mongoose ---------//

mongoose.Promise = global.Promise;
var db = require('./models');

//-------------ROUTES--------------//
app.get('/', (req, res) => {
  res.sendFile('views/index.html', {root: __dirname});
})
app.get('/admin', (req, res) => {
  res.sendFile('views/admin.html', {root: __dirname});
})


// get all subscribers
app.get('/api/subscribers', function (req, res) {
  // send all subscribers as JSON response
  db.Subscriber.find(function(err, subscribers){
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
    res.json(subscribers);
  });
});

// get one subscriber
app.get('/api/subscribers/:id', function (req, res) {
  db.Subscriber.findById(req.params.id, (err, subscriber) => {
    if (err) return res.status(400).json({msg: 'subscriber ID does not exist'});
    res.json(subscriber);
  });
});

// create new subscriber
app.post('/api/subscribers', function (req, res) {
  db.Subscriber.create(req.body, (err, newSubscriber) => {
    if (err) return res.status(500).json({msg: 'Something went wrong. Please try again'});
    res.json(newSubscriber);
  });
});


// delete subscriber
app.delete('/api/subscribers/:id', function (req, res) {
  db.Subscriber.findByIdAndRemove(req.params.id, (err, deletedSubscriber) => {
    if (err) return res.status(400).json({msg: 'Subscriber ID does not exist'});
    res.json(deletedSubscriber);
  });
});


//-------------- Start up the server --------//
app.listen(process.env.PORT || 4000, () => {console.log('Hiking app listening')});
