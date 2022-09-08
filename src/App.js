
import React from 'react';
import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create';
import BlockDetails from './BlogDetails';
import NotFound from './NotFound';



function App() {
  // const title = 'Welcome to Jether Blog';
  // const like = 50;
  // const link = "http://www.google.com";

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
          <div className="content">
            <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route path="/Create">
                  <Create/>
              </Route>
              <Route path="/blogs/:id">
                  <BlockDetails/>
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
