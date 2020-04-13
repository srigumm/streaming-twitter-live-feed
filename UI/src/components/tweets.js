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
           this.props.getTweets(name);
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
               {this.props.tweets&&this.props.tweets.map((tweet,i)=><p>{i}:{tweet}</p>)} 
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        tweets:state.tweets.tweets
    }
}
const mapDispatchToProps = dispatch => ({
    getTweets: payload => dispatch(GetTweetsAction(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TweetsSearch);