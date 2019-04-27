const initialSalary = 50000;
const initialPlayers = 9;

const getTotals = (state, action, optimizerCandidate) => {
  let totalSalary = parseInt(0, 10);
  let totalTeams = [];
  let totalPlayers = 0;

  Object.keys(optimizerCandidate).forEach((key) => {
    if (optimizerCandidate[key] && optimizerCandidate[key].Name) {
      totalPlayers++;
      totalSalary = parseInt(totalSalary, 10) +  parseInt(optimizerCandidate[key].Salary, 10);
      if (!totalTeams.includes(optimizerCandidate[key].Team)) {
        totalTeams.concat(optimizerCandidate[key].Team);
      }
    }
  });

  return { totalSalary, totalTeams, totalPlayers };
};

const disallowDuplicates = (state, action) => {
  if (!Object.keys(state.optimizerData).filter((key) => {
    return state.optimizerData[key].Name === action.payload.skater.Name
  }).length) {
    return true;
  }
};

export default (state = { optimizerData: {}, optimizerSalary: initialSalary, optimizerPlayers: initialPlayers, optimizerIsValid: true }, action) => {
  switch (action.type) {
    case 'ADD_SKATER_TO_OPTIMIZER':

      let optimizerIsValid = state.optimizerIsValid;
      let optimizerCandidate = Object.assign({}, state.optimizerData);

      // disallow duplicates
      if (disallowDuplicates(state, action)) {
        optimizerCandidate[action.payload.position] = action.payload.skater;
      }

      const totals = getTotals(state, action, optimizerCandidate);

      if (totals.totalSalary > initialSalary) {
        optimizerIsValid = false;
      }

      let optimizerMessage;
      if (totals.totalPlayers === 9 && totals.totalTeams.length < 3) {
        optimizerIsValid = false;
        optimizerMessage = 'Lineup requires skaters from 3 teams';
      }

      return {
        ...state,
        optimizerData: optimizerCandidate,
        optimizerSalary: initialSalary - totals.totalSalary,
        optimizerIsValid,
        optimizerPlayers: totals.totalPlayers,
        optimizerMessage
      }
    case 'REMOVE_SKATER_FROM_OPTIMIZER':
      return state
    default:
      return state
  }
};
