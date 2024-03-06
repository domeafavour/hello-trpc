import { UserForm } from '../UserForm';
import { trpc } from '../utils/trpc';
import { useUserForm } from './useUserForm';

const { userCreate, useUtils } = trpc;

export function NewUserForm() {
  const [values, setValues] = useUserForm();
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
