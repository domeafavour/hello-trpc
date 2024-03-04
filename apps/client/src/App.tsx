import './App.css';
import { trpc } from './utils/trpc';

function App() {
  const { data, isLoading } = trpc.userList.useQuery();
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (!data) {
    return <div>no users</div>;
  }
  return (
    <ul>
      {data.map((user) => {
        return (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        );
      })}
    </ul>
  );
}

export default App;
