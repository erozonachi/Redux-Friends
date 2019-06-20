import * as types from '../actions';

const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case types.FETCHING:
      return {...state, fetchingFriends: true};
    case types.SAVING:
      return {...state, savingFriends: true};
    case types.UPDATING:
      return {...state, updatingFriends: true};
    case types.DELETING:
      return {...state, deletingFriends: true};
    case types.SUCCESS:
      return {...initialState, friends: action.payload};
    case types.FAILURE:
      return {...initialState, friends: [...state.friends], error: action.payload.error}
  }
}
