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

export const MergeTweetsAction=(tweet)=>{
    console.log(tweet)
     return {
         type: 'MERGE_TWEETS',
         payload:tweet
     }
}
      

