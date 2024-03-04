import { type AppRouter } from '@app/server';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import './polyfill';

//     👆 **type-only** import
// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});

async function main() {
  const users = await trpc.userList.query();
  console.log('Users:', users);
}

main().catch(console.error);
