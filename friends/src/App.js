import React, { useState, useEffect, } from 'react';
import {BrowserRouter as Router, Route, NavLink,} from 'react-router-dom';
import ListContainer from './components/FriendList/ListContainer';
import NewFriendForm from './components/NewFriend/NewFriendForm';
import AppContainer from './StyledComponents/AppContainer';

function App() {

  useEffect(() => {
    //getFriends();
  });

  const getAFriend = (id) => {
    //return friends.filter(friend => friend.id === parseInt(id))[0];
  }

  return(
    <AppContainer>
      <Router>
        <ul>
          <li><NavLink to='/'>Friends</NavLink></li>
          <li><NavLink to='/new_friend/ '>New Friend</NavLink></li>
        </ul>
        <Route
          path='/'
          exact
          render={props => <ListContainer {...props} />}
        />
        <Route
          path='/new_friend/:id'
          render={props => <NewFriendForm
            {...props} 
          />}
        />
      </Router>
    </AppContainer>
  );
}

export default App;
