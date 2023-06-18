const path = require('path');  

const express = require('express');

const routDir = require('../util/path');

const router = express.Router();

router.get('/success',(req, res, next) => {
    res.sendFile(path.join(routDir, 'views', 'success.html'));  
    });

module.exports = router;