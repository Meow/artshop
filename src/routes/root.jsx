import { useOutlet, Link } from "react-router-dom";
import LandingPage from './landing';

export default function Root() {
  const outlet = useOutlet();

  return (
    <>
      <div className="navigation">
        <h1><Link to="/">Nighty's Art Shop</Link></h1>
        <div className="subnav">
          <Link to="/artists">Our Artists</Link>
          <Link to="/catalogue">Catalogue</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <main>
        {outlet || <LandingPage />}
      </main>
    </>
  );
}
