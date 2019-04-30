import React from 'react';
import { Button, ButtonGroup, Colors, Sizes } from 'react-foundation';
/* import TeamColorBox from '../../../components/teamColorBox';*/
import './filters.scss';

const genTeamFilter = (todayTeams, onCheck, selectedTeams) => {
  return todayTeams.sort().map((team) => {
    return (
        <Button
          color={ selectedTeams.includes(team) ? Colors.PRIMARY : Colors.SECONDARY }
          onClick={ () => onCheck(team) }
          key={`${team}_filter`}
          className="team-filter-button"
        >
          {team}
        </Button>
    );
  });
}

const TeamFilter = (props) => {
  return (
    <ButtonGroup size={Sizes.LARGE} style={ { display: 'inline' } }>
      { genTeamFilter(props.todayTeams, props.onCheck, props.selectedTeams) }
    </ButtonGroup>
  );
}

export default TeamFilter;
