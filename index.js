const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const verifyRoute = require('./verifyRoute').verifyRoute

app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the api'
    })
});

app.post('/api/posts', verifyRoute, (req, res) => {
    let token = JSON.parse(req.token)
    jwt.verify( token, 'secret', (err, authdata)=>{
        if(err){
            console.log(err)
            res.sendStatus(403);
        }else{
            res.json({
                message: 'Post created ...',
                authdata
            })
        }
    });  
});

app.post('/api/login', (req, res)=> {
    let user = {
        id: 123,
        name: "myName",
        email: "mymail@mail.com"
    }
    jwt.sign({ user }, 'secret', (err, token)=> {
        res.json({ token })
    });
});

app.listen(5000, ()=>console.log("The server is listening..."))