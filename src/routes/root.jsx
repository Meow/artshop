import { useOutlet } from "react-router-dom";
import LandingPage from './landing';

export default function Root() {
  const outlet = useOutlet();

  return (
    <>
      <div className="navigation">
        <h1><a href="/">Nighty's Art Shop</a></h1>
        <div className="subnav">
          <a href="/artists">Our Artists</a>
          <a href="/catalogue">Stuff We Sell</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <main>
        {outlet || <LandingPage />}
      </main>
    </>
  );
}
