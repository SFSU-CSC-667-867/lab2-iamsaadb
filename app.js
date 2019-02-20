const express = require('express');
const axios = require('axios');
//axios makes network requests

const app = express();
const port = 3000;

//to declare a route you need get. 
//This can be used to requests from one server to another using ip adresses (or domain names)
app.get('/Hello', (req, res) => {
    console.log(req.query);
    res.send('Hello ' + req.query.name + ' World');
} 
);

app.get('/network', (req, res) => {
   axios.get('http://localhost:3001/world')
   .then((networkResponse) => 
    res.send(networkResponse.data)
   )
   .catch(() => {
       res.send('DID NOT WORK');
   })
} 
);

//app.get('/add', (req, res) => res.send('<html><title>THIS IS MY ADD PAGE </title><body><font size="6" color="red" >THOSE WHO LIVE IN GLASS HOUSES SHOULDNT TRY STONES</font></body></html>'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`)); 