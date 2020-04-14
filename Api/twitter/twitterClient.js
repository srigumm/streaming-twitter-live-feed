const Twitter= require('twitter');

//TODO:: Dont hardcode here.
var client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

module.exports = client;