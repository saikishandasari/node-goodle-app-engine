var express = require('express');
require('dotenv').config();
var app = express();

app.get('/',(req,res)=> {
    res.status(200).send(`Hello World!`);
});

app.listen(process.env.PORT||3000,function () {
    console.log(`Express app running on port ${process.env.PORT||3000}...`);
});

