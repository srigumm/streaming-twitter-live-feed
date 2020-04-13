import {createStore, combineReducers ,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import tweetsReducer from '../reducers/tweetsReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore=()=>{
    const store=createStore(combineReducers({
        tweets:tweetsReducer
    }),applyMiddleware(thunk));
    return store;
}

export default configureStore;