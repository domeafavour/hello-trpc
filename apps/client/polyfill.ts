import nodeFetch from 'node-fetch';

if (!globalThis.fetch) {
  // @ts-ignore
  globalThis.fetch = nodeFetch;
}
