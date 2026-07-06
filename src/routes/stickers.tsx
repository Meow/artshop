import { LightboxImage } from './components/lightbox';

const FURRY_SHEETS = ['red', 'blue', 'yellow', 'green', 'cyan', 'pink'];

export default function Stickers(_props: { pony?: boolean }) {
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
        {FURRY_SHEETS.map(color => {
          const label = color.charAt(0).toUpperCase() + color.slice(1);
          const caption = `${label} (design by hioshiru)`;
          return (
            <div key={color} className="catalogue__imgcard">
              <LightboxImage
                src={`https://data.nighty.cloud/artshop/stickers/${color}.jpg`}
                alt={`${label} sticker sheet (design by hioshiru)`}
                caption={caption}
                loading="lazy"
              />
              <span>{caption}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
