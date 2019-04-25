import React from 'react';
import { Button, ButtonGroup, Colors, Sizes } from 'react-foundation';
import "./filters.scss"

const positionReference = {
  'C': 'Center',
  'W': 'Winger',
  'D': 'Defense',
  'DC': 'Defense/Center',
  'DW': 'Defense/Winger',
  'CW': 'Center/Winger',
  'WW': 'Winger/Winger'
};

const genPositionFilters = (positions, onCheck, selectedPositions) => {
  return positions.map((pos) => {
    return (
      <Button
        key={`${pos}_filter`}
        color={ selectedPositions.includes(pos) ? Colors.PRIMARY : Colors.SECONDARY }
        onClick={ () => onCheck(pos) }
      >
        {positionReference[pos]}
      </Button>
    );
  });
}

const PositionFilter = (props) => {
  return (
    <div className="grid-container fluid">
      <div className="grid-x grid-margin-x grid-padding-x">
        <div className="cell auto" />
        <ButtonGroup size={ Sizes.LARGE } className="grid-x">
          { genPositionFilters(props.positions, props.onCheck, props.selectedPositions) }
        </ButtonGroup>
      </div>
    </div>
  );
}

export default PositionFilter;
