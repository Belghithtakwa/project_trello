require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.router');
const path = require("path");
var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});
app.use( express.static( "./dist/Angular6" ) );
app.use( "*", ( req, res ) => {
    res.sendFile( path.resolve("dist/Angular6", "index.html" ) );
} );
const port = process.env.PORT || 3000;
// start server

app.listen(port, () => console.log(`Server started at port : ${port}`));