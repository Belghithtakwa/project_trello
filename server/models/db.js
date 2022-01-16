const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://takwa:azerty123@cluster0.o9zwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {autoIndex: false}, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

require('./user.model');