import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

const Nav = () => <h1> <Link to="/"> Home </Link> </h1>;
const Home = () => <h1> HOME </h1>;

const App = () => {
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

export default App;
