import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + "/" } component={Home} />
              <Route path={ process.env.PUBLIC_URL + "/about" } component={About} />
              <Route path={ process.env.PUBLIC_URL + "/contact" } component={Contact} />
              <Route path={ process.env.PUBLIC_URL + "/:post_id"} component={Post} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
