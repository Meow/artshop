export default function Stickers() {
  return (
    <div className="catalogue">
      <h1>Stickers</h1>
      <p>
        First of all, to answer the most commonly asked question we get at every convention -{' '}
        <strong>
          yes, these are <em>those</em> Telegram stickers which everyone uses.
        </strong>{' '}
        With that out of the way...
      </p>
      <p>
        Our stickers are manufactured in sheets on a vinyl-based sticker paper. They're glossy and somewhat resistant to
        scratching.
      </p>
      <h3>Furry sticker sheets</h3>
      <div className="catalogue__gallery">
        <div className="catalogue__imgcard">
          <img src="https://data.nighty.cloud/artshop/stickers/red.jpg"></img>
          <span>Red (design by hioshiru)</span>
        </div>
        <div className="catalogue__imgcard">
          <img src="https://data.nighty.cloud/artshop/stickers/blue.jpg"></img>
          <span>Blue (design by hioshiru)</span>
        </div>
        <div className="catalogue__imgcard">
          <img src="https://data.nighty.cloud/artshop/stickers/yellow.jpg"></img>
          <span>Yellow (design by hioshiru)</span>
        </div>
        <div className="catalogue__imgcard">
          <img src="https://data.nighty.cloud/artshop/stickers/green.jpg"></img>
          <span>Green (design by hioshiru)</span>
        </div>
        <div className="catalogue__imgcard">
          <img src="https://data.nighty.cloud/artshop/stickers/cyan.jpg"></img>
          <span>Cyan (design by hioshiru)</span>
        </div>
        <div className="catalogue__imgcard">
          <img src="https://data.nighty.cloud/artshop/stickers/pink.jpg"></img>
          <span>Pink (design by hioshiru)</span>
        </div>
      </div>
    </div>
  );
}
