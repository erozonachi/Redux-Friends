import * as types from './index';
import axios from 'axios';

export const loginUser = user => dispatch => {
  dispatch({type: types.LOGGING_IN});
  axios.post('https://localhost:5000/api/login', user)
  .then(res => {
    localStorage.setItem('accessToken', res.data.payload);
    dispatch({type: types.SUCCESS});
  })
  .catch(error => dispatch({type: types.FAILURE, payload: {error: error.message}}));
}
