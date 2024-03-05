import { useState } from 'react';
import { UserForm } from '../UserForm';
import { trpc } from '../utils/trpc';

const { userCreate, useUtils } = trpc;

export function NewUserForm() {
  const [values, setValues] = useState({ firstName: '', lastName: '' });
  const utils = useUtils();

  const { mutateAsync, isLoading } = userCreate.useMutation({
    onSuccess: () => {
      utils.userList.refetch();
    },
  });

  return (
    <UserForm
      values={values}
      onValuesChange={setValues}
      disabled={isLoading}
      onSubmit={async () => {
        await mutateAsync(values);
        setValues({ firstName: '', lastName: '' });
      }}
    />
  );
}
