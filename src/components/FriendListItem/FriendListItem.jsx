import clsx from "clsx";
import css from "../FriendList/FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friends_li}>
          <img className={css.avatar} src={avatar} alt={name} />
          <p className={css.friends_name}>{name}</p>
          <p className={clsx(css.friends_status, isOnline ? css.green : css.red)}>{isOnline ? "Online" : "Offline"}</p>
    </li>
  );
};
export default FriendListItem;
