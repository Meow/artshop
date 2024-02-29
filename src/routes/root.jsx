import { useOutlet } from "react-router-dom";
import LandingPage from './landing';

export default function Root() {
  const outlet = useOutlet();

  return (
    <>
      <div className="navigation">
        <h1>Nighty's Art Shop</h1>
        <div className="subnav">
          <a href="/artists">Our Artists</a>
          <a href="/catalogue">Stuff We Sell</a>
          <a href="/gallery">Gallery</a>
          <a href="/about">About Us</a>
        </div>
      </div>
      <main>
        {outlet || <LandingPage />}
      </main>
    </>
  );
}
