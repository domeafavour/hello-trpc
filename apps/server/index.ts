import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { z } from 'zod';
import { db, type User } from './db';
import cors from 'cors';
import { publicProcedure, router } from './trpc';

export type { User };

export const appRouter = router({
  userList: publicProcedure.query(async () => {
    const users = await db.user.findMany();
    return users;
  }),
  userCreate: publicProcedure
    .input(z.object({ firstName: z.string(), lastName: z.string() }))
    .mutation(async ({ input }) => {
      const user = await db.user.insertOne(input);
      return user;
    }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
});

server.listen(3000);
