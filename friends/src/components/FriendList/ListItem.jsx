import React from 'react';
import FriendItem from './StyledComponents/FriendItem';
import { Link, } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ListItem(props) {
  const handleDelete = () => {
    props.delHandler(props.friend.id);
  }

  return(
    <FriendItem>
      <h3>{props.friend.name}</h3>
      <span><em>Age:&nbsp;</em>{props.friend.age}</span>
      <span><em>Email:&nbsp;</em>{props.friend.email}</span>
      <div>
        <Link to={`/new_friend/${props.friend.id}`}><button>Edit</button></Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </FriendItem>
  );
}

ListItem.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  delHandler: PropTypes.func.isRequired,
}
