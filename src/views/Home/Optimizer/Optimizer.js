import React, { Component } from 'react';
import { connect } from 'react-redux';

import SkaterDrop from './OptimizerDropTarget';
import './optimizer.scss';

import { removeSkaterFromOptimizer } from '../../../action-creators/optimizer';

class Optimizer extends Component {
  render() {
    const {
      optimizerSalary,
      optimizerData,
      optimizerPlayers,
      optimizerIsValid,
      optimizerMessage,
      optimizerFPTS
    } = this.props.optimizerReducer;

    const remainingSalaryPerPlayer = optimizerPlayers > 0 ? Math.floor(optimizerSalary / optimizerPlayers) : 0;
    const instructionsClassName = optimizerIsValid ? 'instructions cell large-3' : 'instructions-invalid cell large-3';
    return (
      <div className="grid-container remove-grid-padding">
        <div
          className="grid-y"
          style={ { height: '70vh' } }
        >
          <div className={ instructionsClassName }>
            <div className="instructions__item"> Drag from table to add, click to remove </div>
            <div className="instructions__item"> <span className="title"> REMAINING SALARY:</span><span className="value"> { optimizerSalary } </span></div>
            <div className="instructions__item"> <span className="title"> REMAINING SALARY/PLAYER:</span> <span className="value"> { remainingSalaryPerPlayer } </span> </div>
            <div className="instructions__item"> <span className="title"> TOTAL FPTS: </span> <span className="value"> { optimizerFPTS } </span> </div>
            <div className="instructions__item">  <span className="value"> { optimizerMessage ? 'Lineup requires skaters from 3 teams' : '' } </span> </div>
          </div>
          <div className="cell large-10">
            <div className="grid-container remove-grid-padding"
              style={ { height: '100%' } }
            >
              <div
                className="tool grid-y"
                style={ { height: '100%' } }
              >
                <SkaterDrop
                  player={ optimizerData['centerOne'] }
                  position='centerOne'
                  accepts={ ['C'] }
                  placeholder="Center"
                  removeSkater={ this.props.removeSkaterFromOptimizer }
                  optimizerState={ optimizerData }
                />
                <SkaterDrop
                  player={ optimizerData['centerTwo'] }
                  position='centerTwo'
                  accepts={ ['C'] }
                  placeholder="Center"
                  removeSkater={ this.props.removeSkaterFromOptimizer }
                  optimizerState={ optimizerData }
                />
                <SkaterDrop
                  player={ optimizerData['wingerOne'] }
                  position='wingerOne'
                  accepts={ ['w'] }
                  placeholder="Winger"
                  removeSkater={ this.props.removeSkaterFromOptimizer }
                  optimizerState={ optimizerData }
                />
                <SkaterDrop
                  player={ optimizerData['wingerTwo'] }
                  position='wingerTwo'
                  accepts={ ['w'] }
                  placeholder="Winger"
                  removeSkater={ this.props.removeSkaterFromOptimizer }
                  optimizerState={ optimizerData }
                />
                <SkaterDrop
                  player={ optimizerData['wingerThree'] }
                  position='wingerThree'
                  accepts={ ['w'] }
                  placeholder="Winger"
                  removeSkater={ this.props.removeSkaterFromOptimizer }
                  optimizerState={ optimizerData }
                />
                <SkaterDrop
                  player={ optimizerData['defenseOne'] }
                  position='defenseOne'
                  accepts={ ['D'] }
                  placeholder="Defense"
                  removeSkater={ this.props.removeSkaterFromOptimizer }
                  optimizerState={ optimizerData }
                />
                <SkaterDrop
                  player={ optimizerData['defenseTwo'] }
                  position='defenseTwo'
                  accepts={ ['D'] }
                  placeholder="Defense"
                  removeSkater={ this.props.removeSkaterFromOptimizer }
                  optimizerState={ optimizerData }
                />
                <SkaterDrop
                  player={ optimizerData['goalie'] }
                  position="goalie"
                  accepts={ ['G'] }
                  placeholder="Goalie"
                  removeSkater={ this.props.removeSkaterFromOptimizer }
                  optimizerState={ optimizerData }
                />
                <SkaterDrop
                  player={ optimizerData['util'] }
                  position="util"
                  accepts={ ['D', 'C', 'W'] }
                  placeholder="Utility"
                  removeSkater={ this.props.removeSkaterFromOptimizer }
                  optimizerState={ optimizerData }
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

const mapDispatchToProps = dispatch => ({
  removeSkaterFromOptimizer: (skater, position) => dispatch(removeSkaterFromOptimizer(skater, position))
});

export default connect(mapStateToProps, mapDispatchToProps)(Optimizer);
