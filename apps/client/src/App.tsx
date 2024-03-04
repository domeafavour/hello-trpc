import { useState } from 'react';
import './App.css';
import { trpc } from './utils/trpc';

function App() {
  const { data, isLoading, refetch } = trpc.userList.useQuery();
  const createMutation = trpc.userCreate.useMutation();

  const [values, setValues] = useState({ firstName: '', lastName: '' });

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (!data) {
    return <div>no users</div>;
  }

  const formDisabled = isLoading || createMutation.isLoading;
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await createMutation.mutateAsync(values);
          setValues({ firstName: '', lastName: '' });
          refetch();
        }}
      >
        <div>
          firstName:
          <input
            name="firstName"
            disabled={formDisabled}
            value={values.firstName}
            onChange={(e) => {
              const newFirstName = e.target.value;
              setValues((r) => ({ ...r, firstName: newFirstName }));
            }}
          />
        </div>
        <div>
          lastName:
          <input
            name="lastName"
            value={values.lastName}
            disabled={formDisabled}
            onChange={(e) => {
              const newLastName = e.target.value;
              setValues((r) => ({ ...r, lastName: newLastName }));
            }}
          />
        </div>
        <div>
          <button type="submit" disabled={formDisabled}>
            New User
          </button>
        </div>
      </form>
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
