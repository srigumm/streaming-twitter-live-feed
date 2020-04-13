const initialState= {
    tweets:[]
}

const tweetsReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'GET_TWEETS':{
            console.log('Get_Tweets retrieved data - '+JSON.stringify(action.payload.data));
            return {...state,tweets:action.payload.data};
        }
        case 'MERGE_TWEET':{
            return {...state,tweets:[...state.tweets,action.payload]}
        }
        default:{
            return state
        }
    }
}

export default tweetsReducer