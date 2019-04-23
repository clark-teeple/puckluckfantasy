import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

// components

import Home from './views/Home';

// actions
// example
import { standardAction } from './action-creators/standard';

// styles
import './App.css';

const Nav = () => <h1> <Link to="/"> Home </Link> </h1>;


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Nav />
            <Route path="/" component={Home} />
          </Router>
        </header>
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
