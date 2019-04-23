import request from 'superagent'

export const fetchSkaterData = () => dispatch => {
  dispatch({
    type: 'FETCH_SKATER_DATA'
  })

  request
    .get('https://s3-us-west-2.amazonaws.com/drexsitebucket/utility.csv')
    .set('accept', 'text')
    .end((error, res) => {
      if (error) {
        dispatch({
          type: 'FETCH_SKATER_FAILURE',
          payload: error
        })
      } else {
        dispatch({
          type: 'FETCH_SKATER_SUCCESS',
          payload: res.text
        })
      }
    });
};
