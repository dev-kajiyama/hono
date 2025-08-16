import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { app } from '../src/index';

describe('GET /', () => {
  it('returns greeting', async () => {
    const res = await app.request('/');
    const body = await res.text();
    assert.equal(body, 'Hello from Hono!');
  });
});

