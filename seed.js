const db = require('./models');

const newSubscriber = [
{   
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    DayHikes: true,
    OvernightHikes: true,
    DestinationHikes: false,
},
{   
    firstName: "Mary",
    lastName: "Moe",
    email: "mary@mail.com",
    DayHikes: false,
    OvernightHikes: true,
    DestinationHikes: false,

},
{   
    firstName: "July",
    lastName: "Dooley",
    email: "july@greatstuff.com",
    DayHikes: true,
    OvernightHikes: true,
    DestinationHikes: true,
},
{   
    firstName: "Anja",
    lastName: "Ravendale",
    email: "a_r@test.com",
    DayHikes: false,
    OvernightHikes: true,
    DestinationHikes: true,
},
{   
    firstName: "Leanne",
    lastName: "Graham",
    email: "Sincere@april.biz",
    DayHikes: true,
    OvernightHikes: false,
    DestinationHikes: true,

},
{  
    firstName:"Ervin",
    lastName: "Howell",
    email:"Shanna@melissa.tv",
    DayHikes: false,
    OvernightHikes: false,
    DestinationHikes: true,
},
{  
    firstName:"Clementine",
    lastName: "Bauch",
    email:"Nathan@yesenia.net",
    DayHikes: false,
    OvernightHikes: false,
    DestinationHikes: true,
},
{   
    firstName:"Patricia",
    lastName: "Lebsack",
    email:"Julianne.OConner@kory.org",
    DayHikes: true,
    OvernightHikes: true,
    DestinationHikes: true,
},
];




// remove all records that match {} -- which means remove ALL records
    db.Subscriber.deleteMany({}, function(err, subscribers){
        if(err) {
        console.log('Error occurred in remove', err);
        } else {
        console.log('removed all subscribers');
    
        // create new records based on the array newSubscriber
        db.Subscriber.create(newSubscriber, function(err, subscribers){
            if (err) { return console.log('err', err); }
            console.log("created", subscribers.length, "subscribers");
            process.exit();
        });
        }
    });

// db.Subscriber.create(newSubscriber, (err, savedSubscriber)=> {
//     if (err) {
//         return
//             console.log(err);   
//     }
//     console.log(`saved new subscriber : ${savedSubscriber}`);
// });