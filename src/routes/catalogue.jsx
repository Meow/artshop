import CatalogueFurrySFW from './components/catalogue_furry_sfw';
import CatalogueFurryNSFW from './components/catalogue_furry_nsfw';
import CatalogueMlpSFW from './components/catalogue_mlp_sfw';
import CatalogueMlpNSFW from './components/catalogue_mlp_nsfw';
import NsfwWarning from './components/nsfw_warning';
import { Link } from "react-router-dom";

export default function Catalogue({pony, nsfw}) {
  const renderSelected = () => {
    if (pony)
      if (nsfw)
        return (<CatalogueMlpNSFW />);
      else
        return (<CatalogueMlpSFW />);
    else
      if (nsfw)
        return (<CatalogueFurryNSFW />);
      else
        return (<CatalogueFurrySFW />);
  }

  const renderNsfwWarning = () => {
    if (!nsfw || localStorage.getItem('nsfw_allowed') == 'yes')
      return (<></>);
    else
      return (<NsfwWarning />);
  }

  return (
    <div className="catalogue">
      <h1>The Catalogue</h1>
      <span>Below you can find most of the stuff we sell (we might bring some extra random goodies to specific cons). This catalogue doesn't include prices. Ask about prices at the convention itself.</span>
      <br />
      <br />
      <strong>Categories:</strong>
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
