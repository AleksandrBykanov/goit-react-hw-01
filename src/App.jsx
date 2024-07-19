import Profile from './components/Profile/Profile'
import userData from './components/Profile/userData.json';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json'


const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

    </>
  );
};

export default App
