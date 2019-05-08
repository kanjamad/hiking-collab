const mongoose = require('mongoose');
const DB_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/hiking-collab';

mongoose.connect(DB_URL, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => console.log(err));


    module.exports.Subscriber = require('./newsLetter');
