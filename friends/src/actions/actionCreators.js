import * as types from './index';
import axios from 'axios';

const enrichedAxios = () => axios.create({
  headers: {
    authorization: localStorage.getItem('accessToken')
  }
});

export const loginUser = (user, navHistory) => dispatch => {
  dispatch({type: types.LOGGING_IN});
  axios.post(`http://localhost:5000/api/login`, user)
  .then(res => {
    localStorage.setItem('accessToken', res.data.payload);
    navHistory.push('/');
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

export const addFriend = (newFriend) => dispatch => {
  dispatch({type: types.SAVING});
  enrichedAxios().post(`http://localhost:5000/api/friends`, newFriend)
  .then(response => {
    dispatch({type: types.SUCCESS, payload: response.data});
  })
  .catch(err => {
    dispatch({type: types.FAILURE, payload: {error: err.message}})
  });
}

export const editFriend = (friend, id) => dispatch => {
  dispatch({type: types.UPDATING});
  enrichedAxios().put(`http://localhost:5000/api/friends/${id}`, friend)
  .then(response => {
    dispatch({type: types.SUCCESS, payload: response.data});
  })
  .catch(err => {
    dispatch({type: types.FAILURE, payload: {error: err.message}})
  });
}

export const deleteFriend = (id) => dispatch => {
  dispatch({type: types.DELETING});
  enrichedAxios().delete(`http://localhost:5000/api/friends/${id}`)
  .then(response => {
    dispatch({type: types.SUCCESS, payload: response.data});
  })
  .catch(err => {
    dispatch({type: types.FAILURE, payload: {error: err.message}})
  });
}
