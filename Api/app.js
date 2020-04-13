
const express = require("express");
const cors = require("cors");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

var twitterRoutes = require('./routes/twitterRoutes');
app.use('/tweets', twitterRoutes);
 
module.exports = app;