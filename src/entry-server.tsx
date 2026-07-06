import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStaticRouter, createStaticHandler, StaticRouterProvider } from 'react-router';
import type { Request as ExpressRequest, Response as ExpressResponse } from 'express';
import { routes } from './routes';

export function createFetchRequest(req: ExpressRequest, res: ExpressResponse): Request {
  const origin = `${req.protocol}://${req.get('host')}`;
  // Note: This had to take originalUrl into account for presumably vite's proxying
  const url = new URL(req.originalUrl || req.url, origin);

  const controller = new AbortController();
  res.on('close', () => controller.abort());

  const headers = new Headers();

  for (const [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (const value of values) {
          headers.append(key, value);
        }
      } else {
        headers.set(key, values);
      }
    }
  }

  const init: RequestInit = {
    method: req.method,
    headers,
    signal: controller.signal,
  };

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    init.body = req.body;
  }

  return new Request(url.href, init);
}

export async function render(request: ExpressRequest, response: ExpressResponse): Promise<string> {
  const { query, dataRoutes } = createStaticHandler(routes);
  const remixRequest = createFetchRequest(request, response);
  const context = await query(remixRequest);

  // A `Response` here means the handler wants to redirect or short-circuit.
  if (context instanceof Response) {
    throw context;
  }

  const router = createStaticRouter(dataRoutes, context);
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouterProvider router={router} context={context} nonce="the-nonce" />
    </React.StrictMode>,
  );
}
