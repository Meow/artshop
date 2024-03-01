import Artist from "./artist";

export default function CatalogueMlpSFW() {
  return (
    <div className="artists">
      <h2>Pony Prints</h2>
      <Artist name={"Hioshiru"} folder={"pony/hioshiru"} filekey={"hsp"} keymax={17} showid={true} />
      <Artist name={"JedaySkayVoker"} folder={"pony/jedayskayvoker"} filekey={"jsp"} keymax={13} showid={true} />
      <Artist name={"Yakovlev-Vad"} folder={"pony/yakovlev-vad"} filekey={"ysp"} keymax={68} showid={true} />
      <Artist name={"Airfly-Pony"} folder={"pony/airfly-pony"} filekey={"asp"} keymax={4} showid={true} />
      <Artist name={"Lightly-San"} folder={"pony/lighty"} filekey={"lsp"} keymax={4} showid={true} />
      <Artist name={"Nevobaster"} folder={"pony/nevobaster"} filekey={"nsp"} keymax={27} showid={true} />
      <Artist name={"PunkPega"} folder={"pony/punkpegasus"} filekey={"psp"} keymax={6} extension={"jpg"} showid={true} />
      <Artist name={"Setharu"} folder={"pony/setharu"} filekey={"ssp"} keymax={14} showid={true} />
      <Artist name={"Vistamage"} folder={"pony/vistamage"} filekey={"vsp"} keymax={2} showid={true} />
    </div>
  );
}
