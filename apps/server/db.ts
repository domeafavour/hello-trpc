export type User = {
  id: number;
  firstName: string;
  lastName: string;
};

const users: User[] = [
  //
  { id: 0, firstName: 'John', lastName: 'Doe' },
];

export const db = {
  user: {
    findMany: async () => users,
    insertOne: async (input: Omit<User, 'id'>) => {
      const user = { ...input, id: users.length };
      users.push(user);
      return user;
    },
  },
};
