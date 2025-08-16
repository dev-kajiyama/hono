import { Hono } from 'hono';
import { serve } from '@hono/node-server';

// Export the app so it can be tested without starting the server
export const app = new Hono();

app.get('/', (c) => c.text('Hello from Hono!'));

// Only start the server when this file is executed directly
if (import.meta.main) {
  serve({
    fetch: app.fetch,
    port: 3000,
  });
}
