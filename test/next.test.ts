import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import next from 'next';

// Verify Next.js can render the root page
// by starting a Next server and fetching the page.
describe('Next.js root page', () => {
  it('renders greeting', async () => {
    const app = next({ dev: false, dir: '.' });
    const handle = app.getRequestHandler();
    await app.prepare();

    const server = createServer((req, res) => {
      handle(req, res);
    });

    await new Promise<void>(resolve => server.listen(4001, resolve));

    const res = await fetch('http://localhost:4001/');
    const text = await res.text();
    server.close();

    assert.match(text, /Hello from Next.js!/);
  });
});
