import CatalogueFurrySFW from './components/catalogue_furry_sfw';
import CatalogueFurryNSFW from './components/catalogue_furry_nsfw';
import CatalogueMlpSFW from './components/catalogue_mlp_sfw';
import CatalogueMlpNSFW from './components/catalogue_mlp_nsfw';
import NsfwWarning from './components/nsfw_warning';
import { Link } from 'react-router';

export default function Catalogue({ pony, nsfw }) {
  const renderSelected = () => {
    if (pony)
      if (nsfw) return <CatalogueMlpNSFW />;
      else return <CatalogueMlpSFW />;
    else if (nsfw) return <CatalogueFurryNSFW />;
    else return <CatalogueFurrySFW />;
  };

  const renderNsfwWarning = () => {
    if (!nsfw || import.meta.env.SSR || localStorage.getItem('nsfw_allowed') == 'yes') return <></>;
    else return <NsfwWarning />;
  };

  return (
    <div className="catalogue">
      <h1>Prints</h1>
      <p>
        <strong>We manufacture prints in three different sizes - A5 (small), A4 (medium) and A3 (large).</strong> Our
        prints are produced on high quality paper, which ensures the colors are transferred as faithfully to the
        original digital artwork as possible. Regardless of your choice in size, you can be assured that the quality of
        your prints will always be top notch. Due to us not operating in the US, we do not (yet) produce our prints in
        US letter or 11x17 sizes. This might change in the future.
      </p>
      <p>
        <strong>Sizes A4 and A3 are printed on high density semi-glossy satin pearl paper</strong>, which gives them a
        unique effect when light is reflected off them, making the reflection far less distracting than normal glossy
        paper, and work much better in a frame behind additional (and reflective) glass. Our satin pearl paper is also
        quite resilient to bending, and will return to a flat shape even if rolled into a tube.
      </p>
      <p>
        <strong>Size A5 is printed on high density fully glossy paper</strong>, since paper of such small size is not
        typically manufactured in satin pearl finish. Our glossy A5 paper is just as resilient to bending as our larger
        satin pearl offerings. Being a glossy paper, the reflections of light would be more noticeable on it.
      </p>
      <div className="catalogue__navigation">
        <Link to="/catalogue">Furry Prints</Link>
        <Link to="/catalogue/pony">Pony Prints</Link>
        <Link to="/catalogue/nsfw">Furry Prints (NSFW, 18+)</Link>
        <Link to="/catalogue/ponynsfw">Pony Prints (NSFW, 18+)</Link>
      </div>
      {renderNsfwWarning()}
      {renderSelected()}
    </div>
  );
}
