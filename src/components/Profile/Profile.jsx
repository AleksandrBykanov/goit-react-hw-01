import css from './Profile.module.css';

const Profile = ({ username, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.card}>
        <img src={image} alt={username} className={css.foto} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.span}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.span}>{stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.span}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile

