import React, { Component } from 'react';
import { connect } from 'react-redux';

import SkaterDrop from './OptimizerDropTarget';
import './optimizer.scss';

class Optimizer extends Component {
  genOptimizerRows = () => {
    return this.props.optimizerReducer.optimizerData.map((row) => {
      return (
        <div
          className="optimizer-row"
          key={ row.Name }
        >
          { row.Name }
        </div>
      );
    });
  }

  render() {
    let rows;

    if (this.props.optimizerReducer.optimizerData) {
      rows = this.genOptimizerRows();
    }

    const remainingSalaryPerPlayer = this.props.optimizerReducer.optimizerPlayers> 0 ? Math.floor(this.props.optimizerReducer.optimizerSalary / this.props.optimizerReducer.optimizerPlayers) : 0;

    return (
      <div className="optimizer-floater">
        <div className="instructions">
          <span> REMAINING SALARY: { this.props.optimizerReducer.optimizerSalary } </span>
          <span> REMAINING SALARY/PLAYER { remainingSalaryPerPlayer } </span>
        </div>
        <div className="tool">
          <SkaterDrop
            position='D'
            remainingPlayers={ this.props.optimizerReducer.optimizerPlayers }
            remainingSalary={ this.props.optimizerReducer.optimizerSalary }
          >
            {rows}
          </SkaterDrop>
        </div>
        <div className="output"> asdfasd </div>
        <div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(Optimizer);
