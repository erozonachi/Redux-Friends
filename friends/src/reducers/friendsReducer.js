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

function friendsReducer(state = initialState, action) {
  switch(action.type) {
    case types.FETCHING:
      return {...initialState, friends: [...state.friends], fetchingFriends: true};
    case types.LOGGING_IN:
      return {...initialState, friends: [...state.friends], loggingIn: true};
    case types.SAVING:
      return {...initialState, friends: [...state.friends], savingFriends: true};
    case types.UPDATING:
      return {...initialState, friends: [...state.friends], updatingFriends: true};
    case types.DELETING:
      return {...initialState, friends: [...state.friends], deletingFriends: true};
    case types.SUCCESS:
      return {...initialState, friends: action.payload};
    case types.FAILURE:
      return {...initialState, friends: [...state.friends], error: action.payload.error}
    default:
      return state;
  }
}

export default friendsReducer;
