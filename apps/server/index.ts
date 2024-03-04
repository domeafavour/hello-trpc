import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { db } from './db';
import { publicProcedure, router } from './trpc';

export const appRouter = router({
  userList: publicProcedure.query(async () => {
    const users = await db.user.findMany();
    return users;
  }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);
