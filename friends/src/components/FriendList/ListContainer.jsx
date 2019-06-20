import React from 'react';
import ListItem from './ListItem';
import FriendsList from './StyledComponents/FriendsList';
import PropTypes from 'prop-types';

export default function ListContainer(props) {
  return(
    <FriendsList>
      <h2>Friends List</h2>
      <ul>
        {props.friends.map(friend => <ListItem 
          key={`${friend.id}`} 
          friend={friend} 
          delHandler={props.delHandler}
        />)}
      </ul>
    </FriendsList>
  );
}

ListContainer.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
  delHandler: PropTypes.func.isRequired,
};
