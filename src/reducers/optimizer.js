const initialSalary = 50000;
const initialPlayers = 9;
const initialFPTS = 0

const stackPositions = ['F3', 'DW', 'DC', 'WW', 'CW'];

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

const disallowDuplicates = (state, action) => {
  if (!Object.keys(state.optimizerData).filter((key) => {
    return state.optimizerData[key].Name === action.payload.skater.Name
  }).length) {
    return true;
  }
};

const checkOptimizerValid = (candidate, current) => {
  let valid = true;
  let salaryRemaining = initialSalary;
  let totalTeams = [];
  let playersRemaining = initialPlayers;
  let errorMessage = false;
  let skatersRemaining = initialPlayers - 1;
  let totalFPTS = initialFPTS;

  Object.keys(candidate).forEach((key) => {
    if (candidate.hasOwnProperty(key) && candidate[key].Name) {
      totalFPTS += parseFloat(candidate[key].FPts);
      playersRemaining--;
      salaryRemaining = parseInt(salaryRemaining, 10) - parseInt(candidate[key].Salary, 10);
      if (candidate[key].Pos !== 'G') {
        skatersRemaining--;
      }
      if (!totalTeams.includes(candidate[key].Team)) {
        totalTeams = totalTeams.concat(candidate[key].Team);
      }
    }
  });

  if (salaryRemaining < 0) {
    valid = false;
  }
  if (playersRemaining < 0) {
    valid = false;
  }
  if (skatersRemaining === 0 && totalTeams.length < 3) {
    valid = false;
    errorMessage = true;
  }
  // save a loop
  return {valid, salaryRemaining, playersRemaining, errorMessage, totalFPTS};
};

export default (state = { optimizerData: {}, optimizerSalary: initialSalary, optimizerPlayers: initialPlayers, optimizerIsValid: true, optimizerFPTS: initialFPTS}, action) => {
  switch (action.type) {
    case 'ADD_SKATER_TO_OPTIMIZER':
      const tempPosition = action.payload.skater.Pos;
      const potentialOptimizerPositions = Object.keys(positionMapping).filter((pos) => positionMapping[pos].includes(tempPosition) && !state.optimizerData[pos]);
      let addCandidate = Object.assign({}, state.optimizerData);

      // disallow duplicates
      if (disallowDuplicates(state, action) && potentialOptimizerPositions.length) {
        addCandidate[potentialOptimizerPositions[0]] = action.payload.skater;
      }

      const addCandidateProperties = checkOptimizerValid(addCandidate, state.optimizerData);

      return {
        ...state,
        optimizerData: addCandidate,
        optimizerSalary: addCandidateProperties.salaryRemaining,
        optimizerIsValid: addCandidateProperties.valid,
        optimizerPlayers: addCandidateProperties.playersRemaining,
        optimizerMessage: addCandidateProperties.errorMessage,
        optimizerFPTS: addCandidateProperties.totalFPTS
      }
    case 'REMOVE_SKATER_FROM_OPTIMIZER':
      let removeCandidate = Object.assign({}, state.optimizerData);
      delete removeCandidate[action.payload.position];

      const removeCandidateProperties = checkOptimizerValid(removeCandidate, state.OpimizerData);

      return {
        ...state,
        optimizerData: removeCandidate,
        optimizerSalary: removeCandidateProperties.salaryRemaining,
        optimizerPlayers: removeCandidateProperties.playersRemaining,
        optimizerMessage: removeCandidateProperties.errorMessage,
        optimizerIsValid: removeCandidateProperties.valid,
        optimizerFPTS: removeCandidateProperties.totalFPTS
      }
    default:
      return state
  }
};
