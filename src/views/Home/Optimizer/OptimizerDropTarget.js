import React from 'react';

import { ItemTypes } from '../../../helpers/dragConstants';
import { DropTarget } from 'react-dnd'

const skaterTarget = {
  drop(props, monitor) {
    return {}
  }
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
};

const SkaterOptimizerRow = (props) => {
  return (
    <div>
      { props.children }
    </div>
  );
};

const SkaterDrop = ({connectDropTarget, isOver, children, position, remainingPlayers, remainingSalary }) => {
  return connectDropTarget(
    <div>
      <SkaterOptimizerRow position={ position } remainingPlayers={ remainingPlayers }>
        { children }
      </SkaterOptimizerRow>
    </div>
  );
};

export default DropTarget(ItemTypes.CELL, skaterTarget, collect)(SkaterDrop);
