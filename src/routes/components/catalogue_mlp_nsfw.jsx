import Artist from "./artist";

export default function CatalogueMlpSFW() {
  return (
    <div className="artists">
      <h2>NSFW Pony Prints</h2>
      <Artist name={"Hioshiru"} folder={"nsfw/hioshiru"} filekey={"hnp"} keymax={87} showid={true} />
      <Artist name={"Airfly-Pony"} folder={"nsfw/airfly-pony"} filekey={"anp"} keymax={8} showid={true} />
      <Artist name={"Lightly-San"} folder={"nsfw/lightly"} filekey={"lnp"} keymax={4} showid={true} />
      <Artist name={"Nevobaster"} folder={"nsfw/nevobaster"} filekey={"nnp"} keymax={23} showid={true} />
      <Artist name={"PunkPega"} folder={"nsfw/punkpega"} filekey={"pnp"} keymax={6} extension={"jpg"} showid={true} />
    </div>
  );
}
