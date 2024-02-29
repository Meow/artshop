import React, { useState } from 'react';

export default function Artist({name, folder, filekey, keymax, extension, showid}) {
  const [scrolling, setScrolling] = useState(false);
  const [scrollState, setScrollState] = useState(1);
  const artistId = folder.split('/').slice(-1);

  const handleScroll = (dir) => {
    if (scrolling) return;

    setScrolling(true);

    const scrollFactor = window.screen.width > 1280 ? 1280 : window.screen.width;
    let el = document.getElementById(artistId);
    el.targetleft = el.scrollLeft + scrollFactor * 0.75 * dir;

    if (el.targetleft <= 0) {
      setScrollState(1);
      el.targetleft = 0;
    } else if (el.targetleft >= el.scrollWidth - el.clientWidth) {
      setScrollState(-1);
      el.targetleft = el.scrollWidth - el.clientWidth;
    } else {
      setScrollState(0);
    }

    const scrollEl = () => {
      if (Math.abs(el.scrollLeft - el.targetleft) >= 10) {
        el.scrollLeft += (el.targetleft - el.scrollLeft) * 0.1;
      } else {
        setScrolling(false);
        return;
      }

      window.requestAnimationFrame(scrollEl);
    };

    window.requestAnimationFrame(scrollEl);
  };

  return (
    <div className="artist">
      <div className="artist__title">
        <img className="artist__avatar" src={`https://files.nighty.cloud/artshop/avatars/${artistId}.png`} alt={`${name}'s Avatar`} />
        <span>{name}</span>
      </div>
      <div className="artist__gallery" id={artistId}>
        {[...Array(keymax)].map((_, i) => (
          <img key={i} src={`https://files.nighty.cloud/artshop/${folder}/${filekey}_${i + 1}.${extension || 'png'}`} alt={`Art ID ${filekey}_${i + 1}`} />
        ))}
      </div>
      <div className="overlay_container">
        <div className={`artist__gallery__overlay artist__gallery__overlay--right ${keymax < 3 || scrollState === -1 ? 'hidden' : ''}`}>
          <button onClick={() => handleScroll(1)}>›</button>
        </div>
        <div className={`artist__gallery__overlay artist__gallery__overlay--left ${keymax < 3 || scrollState === 1 ? 'hidden' : ''}`}>
          <button onClick={() => handleScroll(-1)}>‹</button>
        </div>
      </div>
    </div>
  );
};
