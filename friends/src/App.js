import React, { useState, useEffect, } from 'react';
import {BrowserRouter as Router, Route, NavLink,} from 'react-router-dom';
import axios from 'axios';
import ListContainer from './components/FriendList/ListContainer';
import NewFriendForm from './components/NewFriend/NewFriendForm';
import AppContainer from './StyledComponents/AppContainer';

function App() {
  const url = `http://localhost:5000/friends`;

  const [friends, setFriends] = useState([]);
  const [errorMsg, setErrorMsg] = useState(``);

  useEffect(() => {
    getFriends();
  });

  function getFriends() {

    axios.get(url)
    .then(response => {
      if(JSON.stringify(friends) !== JSON.stringify(response.data)) {
        setFriends(response.data);
      }
    })
    .catch(err => {
      setErrorMsg(err.message);
    });
  }

  const handleAddSubmit = (newFriend) => {
    axios.post(url, newFriend)
    .then(response => {
      setFriends(response.data);
    })
    .catch(err => setErrorMsg(err.message));
  }

  const handleEditSubmit = (friend, id) => {
    axios.put(`${url}/${id}`, friend)
    .then(response => {
      setFriends(response.data);
    })
    .catch(err => setErrorMsg(err.message));
  }

  const handleDelete = (id) => {
    axios.delete(`${url}/${id}`)
    .then(response => {
      setFriends(response.data);
    })
    .catch(err => setErrorMsg(err.message));
  }

  const getAFriend = (id) => {
    return friends.filter(friend => friend.id === parseInt(id))[0];
  }

  return(
    <AppContainer>
      <Router>
        {errorMsg && <div>{errorMsg}</div>}
        <ul>
          <li><NavLink to='/'>Friends</NavLink></li>
          <li><NavLink to='/new_friend/ '>New Friend</NavLink></li>
        </ul>
        <Route
          path='/'
          exact
          render={props => <ListContainer friends={friends} delHandler={handleDelete} {...props} />}
        />
        <Route
          path='/new_friend/:id'
          render={props => <NewFriendForm 
            addSubmitHandler={handleAddSubmit} 
            editSubmitHandler={handleEditSubmit}
            getFriend={getAFriend}
            {...props} 
          />}
        />
      </Router>
    </AppContainer>
  );
}

export default App;
