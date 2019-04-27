import React from 'react';

import { ItemTypes } from '../../../helpers/dragConstants';
import { DropTarget } from 'react-dnd'

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
  const className = empty ? 'optimizerrow__skater-empty' : 'optimizerrow__skater-occupied';
  return (
    <div className={ className }>
      {empty ? (
         <div>
           <span className="optimizerplaceholder">
             { props.placeholder }
           </span>
         </div>
      ) : (
         <div> { props.player.Name } </div>
      )
      }
    </div>
  );
};

const SkaterDrop = ({connectDropTarget, isOver, position, accepts, player, placeholder, highlighted }) => {
  let className = 'optimizerrow cell large-2';
  if (highlighted) {
    className='optimizerrow--highlighted cell large-2';
  }
  return connectDropTarget(
    <div className={ className }>
      <SkaterOptimizerRow
        position={ position }
        player={ player }
        accepts={ accepts }
        placeholder={ placeholder }
      />
    </div>
  );
};

export default DropTarget(ItemTypes.CELL, skaterTarget, collect)(SkaterDrop);
