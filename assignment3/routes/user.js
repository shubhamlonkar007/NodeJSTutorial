const express = require('express');


const path = require('path');

const router = express.Router();

const rootDir = require('../util/path');


router.get('/users',(req,res,next) => {
    res.render(res.sendFile(path.join(rootDir,'views','user.html')),)
    
    ;
});


module.exports = router;