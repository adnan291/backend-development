const express = require('express');  

const router = express.Router();

router.get('/login1',(req, res, next) => {
    res.send(
        '<form action="/login/login1" method="POST"><input type="text" name="username"><button type="submit">Submit</button></input></form>');
        localStorage.setItem('username', $('#username'))
    });

router.post('/login1',(req, res, next) => {  
    console.log(req.body);
    res.redirect('/');
     });

    module.exports = router;