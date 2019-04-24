import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="grid-container fluid navbar-upper">
          <div className="grid-x">
            <div className="cell large-2">
              <img className="navimg" src="http://res.cloudinary.com/dpe1j785q/image/upload/v1526327499/Puck-Luck_1_bnc8m8.svg" />
            </div>
            <div className="cell auto" />
            <div className="cell large-1"> <span className="twitter"> <a href="https://twitter.com/puckluckfantasy" target="_blank"> @puckluckfantasy </a> </span> </div>
          </div>
        </div>
        <div className="navbar-lower">
        </div>
      </div>
    );
  }
}
