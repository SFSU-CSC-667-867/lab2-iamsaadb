const express = require('express');
//axios makes network requests

const app = express();
const port = 3001;

//to declare a route you need get. 
//This can be used to requests from one server to another using ip adresses (or domain names)
app.get('/world', (req, res) => {
   res.send('Hello  World');
} 
); 


//app.get('/add', (req, res) => res.send('<html><title>THIS IS MY ADD PAGE </title><body><font size="6" color="red" >THOSE WHO LIVE IN GLASS HOUSES SHOULDNT TRY STONES</font></body></html>'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`)); 