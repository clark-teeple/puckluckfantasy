export const addSkaterToOptimizer = (row, position) => dispatch => {
  dispatch({
    type: 'ADD_SKATER_TO_OPTIMIZER',
    payload: {skater: row, position}
  });
}
