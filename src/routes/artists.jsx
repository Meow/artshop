import Artist from "./components/artist";
import ArtistAvatar from "./components/artist_avatar";

export default function Artists() {
  return (
    <div className="artists">
      <span>We work with many wonderful artists to bring you only the best stuff at conventions. Here are just some of the furry artists we work with!</span>
      <span className="disclaimer">(Many more artists available in the full catalogue, as well as many more arts from these artists)</span>
      <Artist name={"Hioshiru"} folder={"furry/hioshiru"} filekey={"hsf"} keymax={21} />
      <Artist name={"Airfly-Pony"} folder={"furry/airfly-pony"} filekey={"asf"} keymax={10} />
      <Artist name={"PunkPega"} folder={"furry/punkpega"} filekey={"psf"} keymax={18} extension={"jpg"} />
      <Artist name={"Lightly-San"} folder={"furry/lighty"} filekey={"lsf"} keymax={4} />
      <Artist name={"Twiren"} folder={"furry/twiren"} filekey={"tsf"} keymax={2} />
      <Artist name={"Hority"} folder={"furry/hority"} filekey={"hosf"} keymax={5} />
      <p><strong>...and many more!</strong> Visit <a href="/catalogue">our catalogue</a> to see the wonderful creations from many more artists, such as:</p>
      <div className="artists__other">
        <ArtistAvatar name={"JedaySkayVoker"} artistid="jedayskayvoker" />
        <ArtistAvatar name={"Yakovlev-Vad"} artistid="yakovlev-vad" />
        <ArtistAvatar name={"Setharu"} artistid="setharu" />
        <ArtistAvatar name={"Vistamage"} artistid="vistamage" />
      </div>
    </div>
  );
}
