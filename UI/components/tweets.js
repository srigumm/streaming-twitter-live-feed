import React from 'react'
import io from "socket.io-client";
import {connect} from 'react-redux'
import {GetTweetsAction} from '../actions/tweetsActions'

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
        // this.socket = io('localhost:3060');
        // this.socket.on('connect',()=>{
        //  console.log('connected');
        // })
        // this.socket.on('getTweets',(data)=>{
        //     var newArray = this.state.newTweets.slice();
        //     newArray.push(data)
        //     this.setState({newTweets:newArray})
        //    // console.log(data);
        // })
    }
    handleButton=()=>{
        this.setState({showTweets:!this.state.showTweets})
    }
    handleChange=(e)=>{
        const name = e.target.value
        this.setState({name})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
          const name = this.state.name
           console.log(name)
           this.props.dispatch(GetTweetsAction(name));
          // this.socket.emit('getTweets', name);
        //   this.setState({name:''})
    }

    render(){
        return(
            <div>
                <center>Welcome to the Tweets Search app</center>
        <p>notifications: {this.state.newTweets.length>0? (<button onClick={this.handleButton}>{this.state.showTweets?'show tweets':'hide tweets'}{this.state.newTweets.length}</button>):0}</p>
    
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                    <input type="submit" value="submit" />
                </form>
                {/* {this.state.showTweets&&this.state.newTweets.map(tweet=><p key={tweet.id}>{tweet.text},{tweet.user.screen_name}</p>)} */}
                {this.props.tweets&&this.props.tweets.map(tweet=>(<div>
                    {tweet}
                </div>)
                )}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
  //  console.log('state'+state.tweets.tweets.length)
 return{
        tweets:state.tweets.tweets
    }
}

export default connect(mapStateToProps)(TweetsSearch)