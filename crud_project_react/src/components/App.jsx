import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import User from "./Users";
import Userform from "./UserForm";

class NotFound extends Component {
  render() {
    return (
      <h1>404 NOT FOUND</h1>
    );
  }
}

class App extends Component {
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
          <Route path="/edit/:key" component={Userform} />
          <Route path="/add" component={Userform} />
            <Route exact path="/" component={User} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

// NOTES :

// To use routes you always use the BrowserRouter tag
// then the Switch tag 
// and in between all that you add the route tags containing the paths or 'links' along 
// with the components it needs to render at that route.

// to create a path with a paramater , use '/pathname/:param' 

// when adding your root / home route , it is best practice to put 'exact path=...'

// when routing to the 'notfound' page, put it last since anything that is after will be routed to 'notfound'
