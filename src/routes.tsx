import Root from './routes/root';
import Artists from './routes/artists';
import Catalogue from './routes/catalogue';
import Gallery from './routes/gallery';
import About from './routes/about';
import Contact from './routes/contact';
import Pins from './routes/pins';
import Stickers from './routes/stickers';
import Other from './routes/other';
import type { RouteObject } from 'react-router';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/artists',
        element: <Artists />,
      },
      {
        path: '/catalogue',
        element: <Catalogue />,
      },
      {
        path: '/catalogue/nsfw',
        element: <Catalogue nsfw={true} />,
      },
      {
        path: '/catalogue/pony',
        element: <Catalogue pony={true} />,
      },
      {
        path: '/catalogue/ponynsfw',
        element: <Catalogue pony={true} nsfw={true} />,
      },
      {
        path: '/catalogue/pins',
        element: <Pins />,
      },
      {
        path: '/catalogue/pins/pony',
        element: <Pins pony={true} />,
      },
      {
        path: '/catalogue/stickers',
        element: <Stickers />,
      },
      {
        path: '/catalogue/stickers/pony',
        element: <Stickers pony={true} />,
      },
      {
        path: '/catalogue/other',
        element: <Other />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
];
