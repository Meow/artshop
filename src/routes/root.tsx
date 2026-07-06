import { useOutlet, useLocation, Link } from 'react-router';
import LandingPage from './landing';
import { LightboxProvider } from './components/lightbox';

export default function Root() {
  const outlet = useOutlet();
  const loc = useLocation();
  const path = loc.pathname;
  const linkClass = (active: boolean) => (active ? 'active' : undefined);
  const isPrints =
    path === '/catalogue' || path === '/catalogue/nsfw' || path === '/catalogue/pony' || path === '/catalogue/ponynsfw';

  const renderSecondaryNav = () => {
    if (loc.pathname.includes('catalogue'))
      return (
        <div className="secondary_nav">
          <Link to="/catalogue" className={linkClass(isPrints)}>
            <i className="fa-solid fa-image nav_icon" aria-hidden="true"></i>Prints
          </Link>
          <Link to="/catalogue/pins" className={linkClass(path.startsWith('/catalogue/pins'))}>
            <i className="fa-solid fa-certificate nav_icon" aria-hidden="true"></i>Buttons/Pins
          </Link>
          <Link to="/catalogue/stickers" className={linkClass(path.startsWith('/catalogue/stickers'))}>
            <i className="fa-solid fa-note-sticky nav_icon" aria-hidden="true"></i>Stickers
          </Link>
          <Link to="/catalogue/other" className={linkClass(path === '/catalogue/other')}>
            <i className="fa-solid fa-box-open nav_icon" aria-hidden="true"></i>Other Stuff
          </Link>
        </div>
      );
    else return <></>;
  };

  return (
    <LightboxProvider>
      <div className="navigation">
        <h1>
          <Link to="/">Nighty's Art Shop</Link>
        </h1>
        <div className="main_nav">
          <Link to="/artists" className={linkClass(path.startsWith('/artists'))}>
            <i className="fa-solid fa-palette nav_icon" aria-hidden="true"></i>Our Artists
          </Link>
          <Link to="/catalogue" className={linkClass(path.startsWith('/catalogue'))}>
            <i className="fa-solid fa-images nav_icon" aria-hidden="true"></i>Catalogue
          </Link>
          <Link to="/about" className={linkClass(path.startsWith('/about'))}>
            <i className="fa-solid fa-circle-info nav_icon" aria-hidden="true"></i>About Us
          </Link>
          <Link to="/contact" className={linkClass(path.startsWith('/contact'))}>
            <i className="fa-solid fa-envelope nav_icon" aria-hidden="true"></i>Contact
          </Link>
        </div>
        {renderSecondaryNav()}
      </div>
      <main>{outlet || <LandingPage />}</main>
    </LightboxProvider>
  );
}
