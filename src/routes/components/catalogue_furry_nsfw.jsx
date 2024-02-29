import Artist from "./artist";

export default function CatalogueFurryNSFW() {
  return (
    <div className="artists">
      <h2>NSFW Furry Prints</h2>
      <Artist name={"Hioshiru"} folder={"furry/hioshiru"} filekey={"hsf"} keymax={21} showid={true} />
      <Artist name={"Airfly-Pony"} folder={"furry/airfly-pony"} filekey={"asf"} keymax={10} showid={true} />
      <Artist name={"PunkPega"} folder={"furry/punkpega"} filekey={"psf"} keymax={18} extension={"jpg"} showid={true} />
      <Artist name={"Lightly-San"} folder={"furry/lighty"} filekey={"lsf"} keymax={4} showid={true} />
      <Artist name={"Twiren"} folder={"furry/twiren"} filekey={"tsf"} keymax={2} showid={true} />
      <Artist name={"Hority"} folder={"furry/hority"} filekey={"hosf"} keymax={5} showid={true} />
    </div>
  );
}
