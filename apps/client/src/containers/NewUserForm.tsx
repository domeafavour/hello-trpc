import { useState } from 'react';
import { UserForm } from '../UserForm';
import { trpc } from '../utils/trpc';

export type NewUserFormProps = {
  isUsersLoading?: boolean;
  refetch: () => void;
};

export function NewUserForm({ refetch, isUsersLoading }: NewUserFormProps) {
  const [values, setValues] = useState({ firstName: '', lastName: '' });
  const { mutateAsync, isLoading } = trpc.userCreate.useMutation();

  return (
    <UserForm
      values={values}
      onValuesChange={setValues}
      disabled={isLoading || isUsersLoading}
      onSubmit={async () => {
        await mutateAsync(values);
        setValues({ firstName: '', lastName: '' });
        refetch();
      }}
    />
  );
}
