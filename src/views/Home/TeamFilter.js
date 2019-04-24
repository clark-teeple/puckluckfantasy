import React from 'react';
import { Button, ButtonGroup, Colors, Sizes } from 'react-foundation';

const genTeamFilter = (todayTeams, onCheck, selectedTeams) => {
  return todayTeams.sort().map((team) => {
    return (
      <Button
        color={ selectedTeams.includes(team) ? Colors.PRIMARY : Colors.SECONDARY }
        onClick={ () => onCheck(team) }
        key={`${team}_filter`}
      >
        {team}
      </Button>
    );
  });
}

const TeamFilter = (props) => {
  return (
    <div className="grid-container fluid">
      <div className="grid-x grid-margin-x">
        <ButtonGroup size={Sizes.LARGE}>
          <div className="cell large-auto">
            { genTeamFilter(props.todayTeams, props.onCheck, props.selectedTeams) }
          </div>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default TeamFilter;
