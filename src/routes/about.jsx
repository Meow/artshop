export default function About() {
  return (
    <div className="about">
      <h1>So who are we?</h1>
      <p>
        We're nerds who are friends with a lot of really nice artists, that's who we are! We do not really operate for
        profit, anything we make over the amount absolutely required to cover our costs (con, travel, hotel, materials,
        etc) 100% goes to the artists who made the art. So by buying from us you directly support your favorite artists!
      </p>
      <h2>Our founders</h2>
      <div className="about__person">
        <img className="artist__avatar" src={`https://data.nighty.cloud/artshop/avatars/nighty.png`} />
        <span>Nighty</span>
      </div>
      <p>
        The founder and the owner of Nighty's Art Shop. The shop is named after her namesake. She is who you'll likely
        see if you encounter us at any European convention. Some of her arts are thrown into the physical catalogues as
        easter eggs and aren't available on this site. May be bribed with pets and/or booze.
      </p>
      <div className="about__person">
        <img className="artist__avatar" src={`https://data.nighty.cloud/artshop/avatars/fletch.jpg`} />
        <span>Fletch</span>
      </div>
      <p>
        Nighty's loyal enfield wolf! Usually is around to help out with the business, sometimes mysteriously absent and
        replaced with other friends of Nighty. He's also very smol and should be <s>bullied about this</s> given pets at
        all times too!
      </p>
      <h2>Our people</h2>
      <span className="about__title">The artists</span>
      <div className="about__artist_list">
        <img className="artist__avatar" src={`https://data.nighty.cloud/artshop/avatars/airfly-pony.png`} />
        <img className="artist__avatar" src={`https://data.nighty.cloud/artshop/avatars/hioshiru.png`} />
        <img className="artist__avatar" src={`https://data.nighty.cloud/artshop/avatars/hority.png`} />
        <img className="artist__avatar" src={`https://data.nighty.cloud/artshop/avatars/jedayskayvoker.png`} />
        <img className="artist__avatar" src={`https://data.nighty.cloud/artshop/avatars/lightly.png`} />
        <img className="artist__avatar" src={`https://data.nighty.cloud/artshop/avatars/nevobaster.png`} />
        <img className="artist__avatar" src={`https://data.nighty.cloud/artshop/avatars/punkpega.png`} />
        <img className="artist__avatar" src={`https://data.nighty.cloud/artshop/avatars/setharu.png`} />
        <img className="artist__avatar" src={`https://data.nighty.cloud/artshop/avatars/twiren.png`} />
        <img className="artist__avatar" src={`https://data.nighty.cloud/artshop/avatars/upiter.png`} />
        <img className="artist__avatar" src={`https://data.nighty.cloud/artshop/avatars/vistamage.png`} />
        <img className="artist__avatar" src={`https://data.nighty.cloud/artshop/avatars/yakovlev-vad.png`} />
      </div>
      <p>
        Every single one of the artists we work with is our friend, and all of them enable our art shop to live and
        prosper. The effort they put into making their wonderful art is our most cherished value. We are fully committed
        to supporting them, so that they may continue to create the works of art that bring many people joy!
      </p>
      <span className="about__title">The friends</span>
      <p>
        Nighty <s>coerces with tickles</s> employs the help of friends who happen to go to the conventions with her
        sometimes. You may see them around time to time, or maybe not, who knows! Or maybe you will become one of them.
        Or maybe you ARE one of them!
      </p>
      <h2>...and you!</h2>
      <p>
        But the most important person at our stall is obviously you, our client! We're always delighted to see you check
        our stuff out and buy it, and we're committed to bringing you the highest quality stuff from many artists.
      </p>
      <p>
        Our commitment extends beyond just words, however. If you spot anything wrong with the products we sell, you're
        entitled to a replacement of any print, pin or sticker sheet we sell for an entire year after you purchase it
        (proof of purchase required)!
      </p>
    </div>
  );
}
