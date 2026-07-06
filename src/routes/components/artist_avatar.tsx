interface ArtistAvatarProps {
  name: string;
  artistid: string;
}

export default function ArtistAvatar({ name, artistid }: ArtistAvatarProps) {
  return (
    <div className="artist">
      <div className="artist__title--column">
        <img
          className="artist__avatar"
          src={`https://data.nighty.cloud/artshop/avatars/${artistid}.png`}
          alt={`${name}'s Avatar`}
        />
        <span>{name}</span>
      </div>
    </div>
  );
}
