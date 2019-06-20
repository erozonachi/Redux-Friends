import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Redirect, } from 'react-router-dom';
import ListContainer from './components/FriendList/ListContainer';
import NewFriendForm from './components/NewFriend/NewFriendForm';
import LoginForm from './components/LoginForm';
import AppContainer from './StyledComponents/AppContainer';

function App() {

  return(
    <AppContainer>
      <Router>
        <ul>
          <li><NavLink to='/'>Friends</NavLink></li>
          <li><NavLink to='/new_friend/ '>New Friend</NavLink></li>
        </ul>
        <Route 
          exact 
          path='/'
          render={props => {
            if (localStorage.getItem('accessToken')) {
              return (
                <ListContainer {...props} />
              );
            } else {
              return <Redirect to='login' />
            }
          }}
        />
        <Route
          path='/new_friend/:id'
          render={props => {
            if (localStorage.getItem('accessToken')) {
              return (
                <NewFriendForm {...props} />
              );
            } else {
              return <Redirect to='/' />
            }
          }}
        />
        <Route
          path='/login'
          render={props => <LoginForm {...props} />}
        />
      </Router>
    </AppContainer>
  );
}

export default App;
