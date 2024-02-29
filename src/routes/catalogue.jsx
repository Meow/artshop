import CatalogueFurrySFW from './components/catalogue_furry_sfw';
import CatalogueFurryNSFW from './components/catalogue_furry_nsfw';
import CatalogueMlpSFW from './components/catalogue_mlp_sfw';
import CatalogueMlpNSFW from './components/catalogue_mlp_nsfw';
import NsfwWarning from './components/nsfw_warning';

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
    if (!nsfw || document.cookie.includes('nsfw=1'))
      return (<></>);
    else
      return (<NsfwWarning />);
  }

  return (
    <div className="catalogue">
      <h1>Full Catalogue</h1>
      <span>Below you can find most of the stuff we sell (we might bring some extra random goodies to specific cons). This catalogue doesn't include prices. Ask about prices at the convention itself.</span>
      <div class="catalogue__navigation">
        <a href="/catalogue">Furry Prints</a>
        <a href="/catalogue/pony">Pony Prints</a>
        <a href="/catalogue/nsfw">Furry Prints (NSFW, 18+)</a>
        <a href="/catalogue/ponynsfw">Pony Prints (NSFW, 18+)</a>
      </div>
      {renderNsfwWarning()}
      {renderSelected()}
    </div>
  );
}
