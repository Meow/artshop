export default function Pins(_props: { pony?: boolean }) {
  return (
    <div className="catalogue">
      <h1>Pins</h1>
      <p>
        We offer enamel pins of various designs at our table. While they are not our primary focus, we nevertheless save
        no expense at making sure they are the highest possible quality they can be. Our enamel pins are made of 2D hard
        enamel, meaning their appearance is flat and smooth. The locks are made of the same metal as the pin itself, and
        uses a secure locking mechanism resistant to slipping out. Our enamel pins are roughly{' '}
        <strong>two inches (five centimeters) in diameter.</strong>
      </p>
      <h4>Enamel pin examples</h4>
      <div className="catalogue__gallery">
        <div className="catalogue__imgcard">
          <img src="https://data.nighty.cloud/artshop/pins/hio_enfields.jpg"></img>
          <span>Enfields (design by hioshiru)</span>
        </div>
        <div className="catalogue__imgcard">
          <img src="https://data.nighty.cloud/artshop/pins/hio_dragons.jpg"></img>
          <span>Dragons (design by hioshiru)</span>
        </div>
      </div>
      <h1>Buttons</h1>
      <p>
        We put some of the artwork we sell on button pins. They're manufactured of the same high quality paper as our
        prints. We use metal body and plastic backing for our pins to ensure they don't rust if exposed to moisture or
        water. Each button backing contains a needle to provide attachment to materials such as clothes. The artwork is
        covered by a layer of protective plastic. Our button pins come in three different sizes, determined by the
        diameter: <strong>25mm (small), 32mm (medium) and 58mm (large)</strong>.
      </p>
      <p>
        <strong>Please note that our selection of pins shifts as we make them.</strong> We try to diversify our
        inventory as much as possible. Examples here are provided merely as samples of pin quality.
      </p>
      <h4>Button pin examples</h4>
      <div className="catalogue__gallery">
        <div className="catalogue__imgcard">
          <img src="https://data.nighty.cloud/artshop/pins/buttons.jpg"></img>
          <span>Various buttons (designs by hioshiru, Hority, PunkPega, Lightly-San)</span>
        </div>
      </div>
    </div>
  );
}
