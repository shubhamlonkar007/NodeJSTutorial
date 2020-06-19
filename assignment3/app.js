"use strict";

const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));

const home = require('./routes/home');
const users = require('./routes/user');

app.use('/',home);
app.use(users);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

console.log("port is listening to 3000");
app.listen(3000);