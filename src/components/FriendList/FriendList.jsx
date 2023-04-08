import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import {FriendListItem} from './FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {

  return (
    <div className={css.friends}>
      <ul className={css.friend__list}>
        {friends.map(friend => (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

/* FriendList.propTypes = {
  friends: PropTypes.array
} */




