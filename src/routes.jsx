import Root from './routes/root';
import Artists from './routes/artists';
import Catalogue from './routes/catalogue';
import Gallery from './routes/gallery';
import About from './routes/about';
import Contact from './routes/contact';

export const routes = [
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
