import { useOutlet, useLocation, Link } from 'react-router';
import LandingPage from './landing';

export default function Root() {
  const outlet = useOutlet();
  const loc = useLocation();

  const renderSecondaryNav = () => {
    if (loc.pathname.includes('catalogue'))
      return (
        <div className="secondary_nav">
          <Link to="/catalogue">Prints</Link>
          <Link to="/catalogue/pins">Buttons/Pins</Link>
          <Link to="/catalogue/stickers">Stickers</Link>
          <Link to="/catalogue/other">Other Stuff</Link>
        </div>
      );
    else return <></>;
  };

  return (
    <>
      <div className="navigation">
        <h1>
          <Link to="/">Nighty's Art Shop</Link>
        </h1>
        <div className="main_nav">
          <Link to="/artists">Our Artists</Link>
          <Link to="/catalogue">Catalogue</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        {renderSecondaryNav()}
      </div>
      <main>{outlet || <LandingPage />}</main>
    </>
  );
}
