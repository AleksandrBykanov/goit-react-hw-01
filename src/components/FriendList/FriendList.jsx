import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <div className={css.friends}>
      <ul className={css.friends_ul}>
          {friends.map((friend) => (
            <FriendListItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          ))}
      </ul>
    </div>
  );
};

export default FriendList;