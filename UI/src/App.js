import React from 'react'
import {Link, Route, BrowserRouter, Switch} from 'react-router-dom'
import TweetsSearch from './components/tweets'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={TweetsSearch} exact={true}/>
          {/* <Route path="/:name" component ={Tweets}/> */}
        </Switch>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
