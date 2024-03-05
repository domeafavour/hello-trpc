import { useState } from 'react';
import './App.css';
import { Loading } from './Loading';
import { UserForm } from './UserForm';
import { trpc } from './utils/trpc';

function App() {
  const { data, isLoading, refetch } = trpc.userList.useQuery();
  const createMutation = trpc.userCreate.useMutation();

  const [values, setValues] = useState({ firstName: '', lastName: '' });

  if (isLoading) {
    return <Loading />;
  }
  if (!data) {
    return <div>no users</div>;
  }

  const formDisabled = isLoading || createMutation.isLoading;
  return (
    <div>
      <UserForm
        values={values}
        onValuesChange={setValues}
        disabled={formDisabled}
        onSubmit={async () => {
          await createMutation.mutateAsync(values);
          setValues({ firstName: '', lastName: '' });
          refetch();
        }}
      />

      <ul>
        {data.map((user) => {
          return (
            <li key={user.id}>
              {user.firstName} {user.lastName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
