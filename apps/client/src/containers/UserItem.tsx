import { trpc } from '../utils/trpc';

export type UserItempProps = {
  id: number;
  firstName: string;
  lastName: string;
};

export function UserItem({ id, firstName, lastName }: UserItempProps) {
  const utils = trpc.useUtils();
  const { mutate, isLoading } = trpc.userRemove.useMutation({
    onSuccess: () => {
      utils.userList.refetch();
    },
  });
  return (
    <li className="p-2 cursor-pointer flex justify-between">
      {firstName} {lastName}
      <button
        type="button"
        onClick={() => mutate(id)}
        disabled={isLoading}
        className="p-1 bg-red-400 hover:bg-red-500 text-white rounded-md"
      >
        x
      </button>
    </li>
  );
}
