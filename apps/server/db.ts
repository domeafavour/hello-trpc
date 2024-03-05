let userId = 0;
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
      const user = { ...input, id: userId++ };
      users.push(user);
      return user;
    },
    removeOne: async (id: number) => {
      const idx = users.findIndex((u) => u.id === id);
      if (idx === -1) {
        throw new Error('not found');
      }
      const [user] = users.splice(idx, 1);
      return user;
    },
  },
};
