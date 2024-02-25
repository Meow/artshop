export default function Artist({name, folder, filekey, keymax, extension}) {
  return (
    <div className="artist">
      <div className="artist__title">
        <img className="artist__avatar" src={`https://files.nighty.cloud/artshop/avatars/${folder.split('/').slice(-1)}.png`}></img>
        <span>{name}</span>
      </div>
      <div className="artist__gallery" data-pos="0">
        {[...Array(keymax)].map((_, i) => (<img src={`https://files.nighty.cloud/artshop/${folder}/${filekey}_${i + 1}.${extension || 'png'}`}></img>))}
      </div>
      <div className="overlay_container">
        <div className="artist__gallery__overlay--right">›</div>
        <div className="artist__gallery__overlay--left hidden">‹</div>
      </div>
    </div>
  );
}
