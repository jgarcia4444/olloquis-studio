import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';
import BookOnlineContainer from './components/bookOnline/BookOnlineContainer';
import ShopContainer from './components/shop/ShopContainer';
import TrainingContainer from './components/training/TrainingContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavContainer from './components/nav/NavContainer';
import AboutContainer from './components/about/AboutContainer';
import ContactContainer from './components/contact/ContactContainer';

class App extends Component {


  render() {
    return (
      <div className="App container">
        <Router>
        <NavContainer />
          <Switch>
            <Route path="/training">
              <TrainingContainer />
            </Route>
            <Route path="/book-online">
              <BookOnlineContainer />
            </Route>
            <Route path="/shop">
              <ShopContainer />
            </Route>
            <Route path="/about">
              <AboutContainer />
            </Route>
            <Route path="/contact">
              <ContactContainer />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
