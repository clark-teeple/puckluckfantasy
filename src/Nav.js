import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="grid-container fluid navbar-upper">
          <div className="grid-x">
            <div className="cell large-2">
              <div className="navimg" />
            </div>
            <div className="cell auto" />
            <div className="cell auto large-2"> <span className="twitter"> <a href="https://twitter.com/puckluckfantasy" rel="noopener noreferrer" target="_blank"> @puckluckfantasy </a> </span> </div>
          </div>
        </div>
      </div>
    );
  }
}
