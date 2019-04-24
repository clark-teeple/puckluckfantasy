import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import 'foundation-sites/dist/css/foundation.min.css';
// components

import Home from './views/Home';
import Nav from './Nav';
// actions
// example
import { standardAction } from './action-creators/standard';

// styles
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <div className="App-body">
            <Route path="/" component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  standardAction: () => dispatch(standardAction())
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
