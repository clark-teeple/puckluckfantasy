import React, { Component } from 'react';
import { connect } from 'react-redux';

import SkaterDrop from './OptimizerDropTarget';
import './optimizer.scss';

class Optimizer extends Component {
  render() {
    const {
      optimizerSalary,
      optimizerData,
      optimizerPlayers,
      optimizerIsValid,
      optimizerMessage
    } = this.props.optimizerReducer;

    const remainingSalaryPerPlayer = optimizerPlayers > 0 ? Math.floor(optimizerSalary / optimizerPlayers) : 0;
    const instructionsClassName = optimizerIsValid ? 'instructions cell large-2' : 'instructions-invalid cell large-2';
    return (
      <div className="optimizer-floater grid-container">
        <div
          className="grid-y"
          style={ { height: '90vh' } }
        >
          <div className={ instructionsClassName }>
            <span> REMAINING SALARY: { optimizerSalary } </span>
            <span> REMAINING SALARY/PLAYER { remainingSalaryPerPlayer } </span>
            <span> { optimizerMessage } </span>
          </div>
          <div className="cell large-10">
            <div className="grid-container">
              <div
                className="tool grid-y"
                style={ { height: '40vh' } }
              >
                <SkaterDrop
                  player={ optimizerData['centerOne'] }
                  position='centerOne'
                  accepts={ ['C'] }
                  className="cell large-10"
                  placeholder="Center"
                />
                <SkaterDrop
                  player={ optimizerData['centerTwo'] }
                  position='centerTwo'
                  accepts={ ['C'] }
                  placeholder="Center"
                />
                <SkaterDrop
                  player={ optimizerData['wingerOne'] }
                  position='wingerOne'
                  accepts={ ['w'] }
                  placeholder="Winger"
                />
                <SkaterDrop
                  player={ optimizerData['wingerTwo'] }
                  position='wingerTwo'
                  accepts={ ['w'] }
                  placeholder="Winger"
                />
                <SkaterDrop
                  player={ optimizerData['wingerThree'] }
                  position='wingerThree'
                  accepts={ ['w'] }
                  placeholder="Winger"
                />
                <SkaterDrop
                  player={ optimizerData['defenseOne'] }
                  position='defenseOne'
                  accepts={ ['D'] }
                  placeholder="Defense"
                />
                <SkaterDrop
                  player={ optimizerData['defenseTwo'] }
                  position='defenseTwo'
                  accepts={ ['D'] }
                  placeholder="Defense"
                />
                <SkaterDrop
                  player={ optimizerData['goalie'] }
                  position="goalie"
                  accepts={ ['G'] }
                  placeholder="Goalie"
                />
                <SkaterDrop
                  player={ optimizerData['util'] }
                  position="util"
                  accepts={ ['D', 'C', 'W'] }
                  placeholder="Utility"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(Optimizer);
