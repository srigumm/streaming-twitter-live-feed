import axios from 'axios'


export const GetTweetsAction=(name)=>{
    return (dispatch) =>{
        return axios.get(`http://localhost:3060/tweets/${name}`, { responseType: 'json' })
        .then(res =>{
                dispatch(
                {
                    type:'GET_TWEETS',
                    payload: res
                });
        });
    };
};

export const MergeTweetAction=(tweet)=>{
    //console.log(tweet)
     return {
         type: 'MERGE_TWEET',
         payload:tweet
     }
}

export const MergeNewTweetsAction = (tweets) =>{
    return {
        type: 'MERGE_TWEETS',
        payload: tweets
    }
}
      

