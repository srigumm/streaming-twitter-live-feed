const Twitter= require('twitter');

//TODO:: Dont hardcode here.
var client = new Twitter({
    consumer_key: 'HlEmMglQgaUlXdsi0f3n7Bmsy',
    consumer_secret: 'QfNbOMIkraaS700ogUbjqrPYbLQ2PcHntAB4KwlhD4p4JXkUXN',
    access_token_key: '1239493661286531072-Ya7jfJMeRqsQwzbNeg3AXt9FGoUuV6',
    access_token_secret: '1aFNEnSba7sdxrT5b6D3uQ6K7R6IsCNu4MQC9F9c5SdU8'
});

module.exports = client;