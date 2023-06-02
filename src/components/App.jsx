import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './FriendsList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import data from '../path/data';
import user from '../path/user';
import friends from '../path/friends';
import transactions from '../path/transactions';

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
