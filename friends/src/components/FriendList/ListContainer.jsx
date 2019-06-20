import React, { useEffect, } from 'react';
import ListItem from './ListItem';
import FriendsList from './StyledComponents/FriendsList';
import { connect } from 'react-redux';
import { getFriends, deleteFriend } from '../../actions'

function ListContainer(props) {
  useEffect(() => {
    props.getFriends();
  });

  return(
    <FriendsList>
      <h2>Friends List</h2>
      <ul>
        {props.app.friends.map(friend => <ListItem 
          key={`${friend.id}`} 
          friend={friend} 
          delHandler={props.deleteFriend}
        />)}
      </ul>
    </FriendsList>
  );
}

const mapStateToProps = state => ({app: state.appState});

export default connect(mapStateToProps, { getFriends, deleteFriend })(ListContainer);
