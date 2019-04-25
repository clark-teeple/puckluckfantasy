import React from 'react';

import { ItemTypes } from '../../helpers/dragConstants';
import { DragSource } from 'react-dnd';

import './table.scss';

const cellSource = {
  beginDrag(props) {
    return {}
  },
  endDrag(props) {
    props.addSkaterToOptimizer(props.value);
  }
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
};

const Cell = ({ connectDragSource, isDragging, value, addSkaterToOptimizer }) => {
  return connectDragSource(
    <div
      className="dragrow"
    />
  );
};

export default DragSource(ItemTypes.CELL, cellSource, collect)(Cell);
