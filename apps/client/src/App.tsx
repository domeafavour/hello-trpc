import './App.css';
import { Loading } from './Loading';
import { NewUserForm } from './containers/NewUserForm';
import { trpc } from './utils/trpc';

function App() {
  const { data, isLoading } = trpc.userList.useQuery();

  if (isLoading) {
    return <Loading />;
  }
  if (!data) {
    return <div>no users</div>;
  }

  return (
    <div>
      <NewUserForm />

      <ul className="divide-y">
        {data.map((user) => {
          return (
            <li key={user.id} className="p-2 cursor-pointer">
              {user.firstName} {user.lastName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
