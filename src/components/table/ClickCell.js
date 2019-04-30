import React, { Component } from 'react';

export default class ClickCell extends Component {
  render() {
    console.info(this.props);
    return (
      <div
        onClick={ () => this.props.addSkaterToOptimizer()}
      >
        +
      </div>
    );
  }
};
