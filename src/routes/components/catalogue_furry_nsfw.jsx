import Artist from "./artist";

export default function CatalogueFurryNSFW() {
  return (
    <div className="artists">
      <h2>NSFW Furry Prints</h2>
      <Artist name={"Hioshiru"} folder={"nsfw/hioshiru"} filekey={"hnf"} keymax={56} showid={true} />
      <Artist name={"Airfly-Pony"} folder={"nsfw/airfly-pony"} filekey={"anf"} keymax={10} showid={true} />
      <Artist name={"Hority"} folder={"nsfw/hority"} filekey={"honf"} keymax={5} showid={true} />
      <Artist name={"Lightly-San"} folder={"nsfw/lightly"} filekey={"lnf"} keymax={8} showid={true} />
      <Artist name={"PunkPega"} folder={"nsfw/punkpega"} filekey={"pnf"} keymax={13} extension={"jpg"} showid={true} />
      <Artist name={"Twiren"} folder={"nsfw/twiren"} filekey={"tnf"} keymax={12} showid={true} />
      <Artist name={"Vistamage"} folder={"nsfw/vistamage"} filekey={"vnf"} keymax={3} showid={true} />
    </div>
  );
}
