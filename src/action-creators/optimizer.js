export const addSkaterToOptimizer = (row) => dispatch => {
  dispatch({
    type: 'ADD_SKATER_TO_OPTIMIZER',
    payload: row
  });
}
