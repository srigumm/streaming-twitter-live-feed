var express = require('express');
var router = express.Router();
var getTweetsHandler = require("../twitter/twittercontroller");

router.get('/:hashTagToSearch',getTweetsHandler);

module.exports = router;