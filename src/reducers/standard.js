// standard example of a reducer

export default (state = {}, action) => {
  switch (action.type) {
    case 'ACTION_STANDARD':
      console.info(action.payload);
      return {
        result: action.payload
      }
    default:
      return state
  }
};
