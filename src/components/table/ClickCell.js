import React, { Component } from 'react';

export default class ClickCell extends Component {
  render() {
    return (
      <div
        onClick={ () => this.props.addSkaterToOptimizer()}
      >
        +
      </div>
    );
  }
};
