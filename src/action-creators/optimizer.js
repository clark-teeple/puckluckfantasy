export const addSkaterToOptimizer = (row, position) => dispatch => {
  dispatch({
    type: 'ADD_SKATER_TO_OPTIMIZER',
    payload: {skater: row, position}
  });
}

export const removeSkaterFromOptimizer = (row, position) => dispatch => {
  dispatch({
    type: 'REMOVE_SKATER_FROM_OPTIMIZER',
    payload: {skater: row, position}
  });
}
