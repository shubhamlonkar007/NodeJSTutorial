const http = require('http');

const express = require('express');

const port = 3000;
const app = express();

app.use((req,res,next) =>{
    console.log("In the middleware!");
    next();
});

app.use((req,res,next) => {
    console.log("In another middleware!");
});

const server = http.createServer(app);

console.log('server is listening to port',port);
server.listen(port);