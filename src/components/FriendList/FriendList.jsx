import css from './FriendList.module.css';

const FriendList = ({friends}) => {
  console.log(friends);
return (
  <div className={css.friends}>
      <ul className={css.friends_ul}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className={css.friends_li} key={id}>
            <img className={css.avatar} src={avatar} alt={name} />
            <p className={css.friends_name}>{name}</p>
            <p className={css.friends_status}>{isOnline}</p>
          </li>
        ))}
      </ul>
    </div>
);
}

export default FriendList