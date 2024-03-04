type User = {
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
  },
};
