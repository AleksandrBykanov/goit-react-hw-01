import clsx from "clsx"
import css from './FriendList.module.css';

const FriendList = ({friends}) => {
return (
  <div className={css.friends}>
      <ul className={css.friends_ul}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className={css.friends_li} key={id}>
            <img className={css.avatar} src={avatar} alt={name} />
            <p className={css.friends_name}>{name}</p>
            <p className={clsx(css.friends_status, isOnline ? css.green : css.red)}>{isOnline ? "Online" : "Offline"}</p>
          </li>
        ))}
      </ul>
    </div>
);
}

export default FriendList