export const applyTeamFilter = (team) => dispatch => {
  dispatch({
    type: 'APPLY_TEAM_FILTER',
    payload: team
  })
};

export const applyIndividualPositionFilter = (position) => dispatch => {
  dispatch({
    type: 'APPLY_INDIVIDUAL_POSITION_FILTER',
    payload: position
  })
};

export const applyPairPositionFilter = (position) => dispatch => {
  dispatch({
    type: 'APPLY_PAIR_POSITION_FILTER',
    payload: position
  })
};
