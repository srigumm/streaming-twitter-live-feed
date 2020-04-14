import React from 'react'
import io from "socket.io-client";
import {connect} from 'react-redux'
import {GetTweetsAction,MergeTweetAction,MergeNewTweetsAction} from '../actions/tweetsActions'
import styles from "./tweets.module.css"

class TweetsSearch extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            newTweets:[],
            showTweets:false
        }
    }
 componentDidMount=()=>{
        this.socket = io('localhost:3060');
        this.socket.on('connect',()=>{
         console.log('connected');
        });
        this.socket.on('getTweets',(data)=>{
            //console.log('Recieved new tweet to UI -'+data);
            let recentweets = this.state.newTweets.slice();
            recentweets.unshift(data);
            this.setState({newTweets:recentweets});
            //this.props.notifyNewTweet(data);
        });
    }
    handleButton=()=>{
        this.setState({showTweets:!this.state.showTweets})
    }
    handleChange=(e)=>{
        const name = e.target.value
        this.setState({name})
    }
    handleSubmit=(e)=>{
        this.props.getTweets(this.state.name);
        this.socket.emit('getTweets', this.state.name);
    }
    reloadNewTweets = (e)=>{
        this.props.mergeNewTweets(this.state.newTweets);
        this.setState({newTweets:[]});
    }
    render(){
        return(
            <div className={styles.pageContainer}>
                <span className={styles.title}>Welcome to the Demo Tweets Search app</span>
                <div>                
                    <label>Enter Hashtag/Keyword:</label>
                    <input title="ex: Covid" type="text" value={this.state.name} onChange={this.handleChange} />
                    &nbsp;&nbsp;&nbsp;
                    <input type="button" value="Get Tweets" onClick={this.handleSubmit}/>
                </div>
                <div className={styles.results}>
                    <div>
                        {
                            this.state.newTweets.length>0 &&
                            <button onClick={this.reloadNewTweets}>New Tweets({this.state.newTweets.length})</button>
                        }
                    </div>
                    {this.props.retrievedTweets&&this.props.retrievedTweets.map((tweet,i)=><p>{i}:{tweet}</p>)} 
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        retrievedTweets:state.twitter.tweets
    }
}
const mapDispatchToProps = dispatch => ({
    getTweets: payload => dispatch(GetTweetsAction(payload)),
    notifyNewTweet: payload => dispatch(MergeTweetAction(payload)),
    mergeNewTweets: newtweets => dispatch(MergeNewTweetsAction(newtweets))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TweetsSearch);