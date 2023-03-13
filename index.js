const express = require('express');
const app = express();
const SendMail = require('./controllers/SendMail');
const SendGmail=require('./controllers/SendGmail');

app.get('/', (req, res) => {
    res.send("Hello World !");
})

app.get('/mail',SendMail);

app.get('/gmail',SendGmail);

app.listen(8000, () => {
    console.log("Server is  listening at port no 8000");
})