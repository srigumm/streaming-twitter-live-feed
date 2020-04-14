import { combineReducers } from "redux";
import tweetsReducer from './tweetsReducer';

export default combineReducers({
    twitter: tweetsReducer
});