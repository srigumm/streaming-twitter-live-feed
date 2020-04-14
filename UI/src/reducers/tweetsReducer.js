const initialState= {
    tweets:[]
}

const tweetsReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'GET_TWEETS':{
            //console.log('Get_Tweets retrieved data - '+JSON.stringify(action.payload.data));
            return {...state,tweets:action.payload.data};
        }
        case 'MERGE_TWEET':{
            //console.log("merging tweet into state:"+action.payload);
            const newTweet = action.payload;
            let newArray = state.tweets.slice();
            newArray.unshift(newTweet.text);
            return {...state,tweets:newArray};
        }
        case 'MERGE_TWEETS':{
            let newTweets = action.payload.reduce((p,tweet)=>p.concat(tweet.text),[]);
            let newArray = state.tweets.slice();
            newArray.unshift(...newTweets);
            return {...state,tweets:newArray};
        }
        default:{
            return state
        }
    }
}

export default tweetsReducer