import { useIsMutating } from '@tanstack/react-query';
import { getQueryKey } from '@trpc/react-query';
import { useState } from 'react';
import './App.css';
import { Loading } from './Loading';
import { NewUserForm } from './containers/NewUserForm';
import { UserItem } from './containers/UserItem';
import { trpc } from './utils/trpc';

function App() {
  const [newUserFormVisible, setNewUserFormVisible] = useState(true);
  const { data, isLoading } = trpc.userList.useQuery();
  const isCreatingUser = !!useIsMutating({
    mutationKey: getQueryKey(trpc.userCreate),
  });

  if (isLoading) {
    return <Loading />;
  }
  if (!data) {
    return <div>no users</div>;
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setNewUserFormVisible((b) => !b)}
        className="p-2 bg-slate-200 hover:bg-slate-300"
      >
        toggle new user form
      </button>
      {isCreatingUser ? <p>creating user..</p> : null}
      {newUserFormVisible && <NewUserForm />}

      <ul className="divide-y">
        {data.map((user) => {
          return (
            <UserItem
              key={user.id}
              id={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
