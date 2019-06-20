import * as types from './index';
import axios from 'axios';

const enrichedAxios = () => axios.create({
  headers: {
    authorization: localStorage.getItem('accessToken')
  }
});

export const loginUser = user => dispatch => {
  dispatch({type: types.LOGGING_IN});
  axios.post(`http://localhost:5000/api/login`, user)
  .then(res => {
    localStorage.setItem('accessToken', res.data.payload);
    dispatch({type: types.SUCCESS});
  })
  .catch(error => dispatch({type: types.FAILURE, payload: {error: error.message}}));
}

export const getFriends = () => dispatch => {
  dispatch({type: types.FETCHING});
  enrichedAxios().get(`http://localhost:5000/api/friends`)
  .then(response => {
    dispatch({type: types.SUCCESS, payload: response.data});
  })
  .catch(err => {
    dispatch({type: types.FAILURE, payload: {error: err.message}})
  });
}
