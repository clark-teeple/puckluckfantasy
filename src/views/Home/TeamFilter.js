import React, { Component } from 'react';

const genTeamFilter = (todayTeams) => {
  return todayTeams.sort().map((team) => {
    return <label key={`${team}_selector`} className="filterUnit">
      <input
        type="checkbox"
        className="checkboxUnit"
        onChange={ () => null }
        defaultChecked
      />
      <div>
        {team}
      </div>
    </label>
  });
}

const TeamFilter = (props) => {
  return <div> { genTeamFilter(props.todayTeams) } </div>;
}

export default TeamFilter;
