const initialSalary = 50000;
const initialPlayers = 9;

export default (state = { optimizerData: [], optimizerSalary: initialSalary, optimizerPlayers: initialPlayers }, action) => {
  switch (action.type) {
    case 'ADD_SKATER_TO_OPTIMIZER':
      let optimizerData;
      let optimizerSalary = state.optimizerSalary;
      let optimizerPlayers = state.optimizerPlayers;

      if (state.optimizerSalary < action.payload.Salary) {
        optimizerData = state.optimizerData;
      } else if (state.optimizerPlayers === 0) {
        optimizerData = state.optimizerData;
      } else {
        optimizerData = state.optimizerData.concat(action.payload);
        optimizerSalary = state.optimizerSalary - action.payload.Salary;
        optimizerPlayers = state.optimizerPlayers - 1;
      }
      return {
        ...state,
        optimizerData,
        optimizerSalary,
        optimizerPlayers
      }
    default:
      return state
  }
};
