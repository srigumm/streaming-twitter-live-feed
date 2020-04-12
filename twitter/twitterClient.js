const Twitter= require('twitter');

//TODO:: Dont hardcode here.
var client = new Twitter({
    consumer_key: 'TODO',
    consumer_secret: 'TODO',
    access_token_key: 'TODO',
    access_token_secret: 'TODO'
});

module.exports = client;