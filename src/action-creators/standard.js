// standard example of an action creator

export const standardAction = () => dispatch => {
  dispatch({
    type: 'ACTION_STANDARD',
    payload: 'result'
  })
};
