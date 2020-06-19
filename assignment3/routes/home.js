const express = require('express');


const path = require('path');

const router = express.Router();

const rootDir = require('../util/path');

router.get('/',(req,res,next) => {
    res.sendFile(path.join(rootDir,'views','home.html'));
});

router.post('/',(req,res,next) => {
    console.log(req.body);
    res.redirect('/users');
})

module.exports = router;