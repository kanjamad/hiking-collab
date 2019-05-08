const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SubscriberSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    DayHikes: Boolean,
    OvernightHikes: Boolean,
    DestinationHikes: Boolean,
    
});

const Subscriber = mongoose.model('Subscriber', SubscriberSchema );
module.exports = Subscriber;

