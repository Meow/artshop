import Artist from "./artist";

export default function CatalogueMlpSFW() {
  return (
    <div className="artists">
      <h2>Pony Prints</h2>
      <Artist name={"Hioshiru"} folder={"furry/hioshiru"} filekey={"hsf"} keymax={21} />
      <Artist name={"Airfly-Pony"} folder={"furry/airfly-pony"} filekey={"asf"} keymax={10} />
      <Artist name={"PunkPega"} folder={"furry/punkpega"} filekey={"psf"} keymax={18} extension={"jpg"} />
      <Artist name={"Lightly-San"} folder={"furry/lighty"} filekey={"lsf"} keymax={4} />
      <Artist name={"Twiren"} folder={"furry/twiren"} filekey={"tsf"} keymax={2} />
      <Artist name={"Hority"} folder={"furry/hority"} filekey={"hosf"} keymax={5} />
    </div>
  );
}
