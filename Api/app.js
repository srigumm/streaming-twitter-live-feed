
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

var twitterRoutes = require('./routes/twitterRoutes');
app.use('/tweets', twitterRoutes);
 
module.exports = app;