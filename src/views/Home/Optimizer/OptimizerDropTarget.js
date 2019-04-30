import React, { Component } from 'react';
import { ItemTypes } from '../../../helpers/dragConstants';
import { DropTarget } from 'react-dnd'
import TeamColorBox from '../../../components/teamColorBox';

const positionMapping = {
  centerOne: ['C'],
  centerTwo: ['C'],
  wingerOne: ['W'],
  wingerTwo: ['W'],
  wingerThree: ['W'],
  defenseOne: ['D'],
  defenseTwo: ['D'],
  goalie: ['G'],
  util: ['C', 'W', 'D']
}

const skaterTarget = {
  drop(props, monitor) {
    return {
      position: props.position
    }
  },
  canDrop(props, monitor) {
    return positionMapping[props.position].includes(monitor.getItem().value.Pos);
  }
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    highlighted: monitor.canDrop()
  }
};

const SkaterOptimizerRow = (props) => {
  const empty = !props.player;
  const highlighted = props.highlighted ? 'highlighted' : '';
  const className = empty ? `optimizerrow__skater ${highlighted} empty` : `optimizerrow__skater occupied ${highlighted}`;
  return (
    <div
      className={ className }
      style={ { height: props.height } }
      onClick={ () => {
          props.removeSkater(props.player, props.position)
      }}
    >
      { empty ?
        (
          ''
        ) : (
          <div
            className="grid-container player-box"
          >
            <div className="grid-x">
              <div className="cell large-3" />
              <div className="cell large-5 player-label">{ props.player.Name }</div>
              <div className="cell large-4 player-label">{ props.player.Salary }</div>
            </div>
          </div>
        )
      }
    </div>
  );
};

class SkaterDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '0px'
    }
  }
  componentDidMount() {
    const height = Math.round(this.divElement.clientHeight);
    this.setState({ height });
  }

  componentWillReceiveProps(nextProps) {
    if (this.divElement.clientHeight !== Math.round(this.state.height)) {
      this.setState({ height: Math.round(this.divElement.clientHeight )});
    }
  }

  render() {
    const {
      player,
      position,
      accepts,
      placeholder,
      removeSkater,
      highlighted,
      connectDropTarget
    } = this.props;
    const team = player ? player.Team : 'none';
    return connectDropTarget(
      <div className='optimizerrow cell auto' ref={ (divElement) => this.divElement = divElement }>
        <div className="grid-container remove-grid-padding">
          <div className="grid-x">
            <div className="cell large-2 position-box">
              { positionMapping[position].join(' / ') }
            </div>
            <div className="cell large-10">
              <TeamColorBox
                team={ team }
                height={ this.state.height }
              >
                <SkaterOptimizerRow
                  position={ position }
                  player={ player }
                  accepts={ accepts }
                  placeholder={ placeholder }
                  removeSkater={ removeSkater }
                  highlighted={ highlighted }
                  height= {this.state.height}
                />
              </TeamColorBox>
            </div>
          </div>
        </div>
      </div>
    ); 
  }
};

export default DropTarget(ItemTypes.CELL, skaterTarget, collect)(SkaterDrop);
