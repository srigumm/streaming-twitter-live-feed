const client = require("./twitterClient");

const getTweetsHandler =  (req, res)=>{

    //Retrieve user key to search tweets
    const keyToSearch = req.params.hashTagToSearch;
    const params = { q: keyToSearch , count: 100 }

    //invoke twitter client api
    client.get('search/tweets', params ,  (err, data, response) =>{
        if(!err){
            const h1= data.statuses.map(status=>status.text)
            res.json(h1)
        }
        else{
            res.json(err)
        } 
    });
};

module.exports = getTweetsHandler;