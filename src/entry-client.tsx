import './css/application.css';
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { createBrowserRouter, matchRoutes } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { routes } from './routes';

async function hydrate() {
  // Determine if any of the initial routes are lazy
  const lazyMatches = matchRoutes(routes, window.location)?.filter(m => m.route.lazy);

  // Load the lazy matches and update the routes before creating your router
  // so we can hydrate the SSR-rendered content synchronously
  if (lazyMatches && lazyMatches?.length > 0) {
    await Promise.all(
      lazyMatches.map(async m => {
        const lazy = m.route.lazy;
        if (typeof lazy !== 'function') return;
        const routeModule = await lazy();
        Object.assign(m.route, { ...routeModule, lazy: undefined });
      }),
    );
  }

  const router = createBrowserRouter(routes);

  hydrateRoot(
    document.getElementById('root')!,
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}

hydrate();
