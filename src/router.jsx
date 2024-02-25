import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import Artists from "./routes/artists";
import Catalogue from "./routes/catalogue";
import Gallery from "./routes/gallery";

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/artists",
        element: <Artists />,
      },
      {
        path: "/catalogue",
        element: <Catalogue />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
    ]
  },
]);
