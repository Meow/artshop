import Artist from './artist';

export default function CatalogueMlpSFW() {
  return (
    <div className="artists">
      <h2>NSFW Pony Prints</h2>
      <Artist name={'Hioshiru'} artistid={'hioshiru'} filekey={'hnp'} keymax={88} showid={true} />
      <Artist name={'Yakovlev-Vad'} artistid={'yakovlev-vad'} filekey={'ynp'} keymax={22} showid={true} />
      <Artist name={'Airfly-Pony'} artistid={'airfly-pony'} filekey={'anp'} keymax={8} showid={true} />
      <Artist name={'Lightly-San'} artistid={'lightly'} filekey={'lnp'} keymax={4} showid={true} />
      <Artist name={'Nevobaster'} artistid={'nevobaster'} filekey={'nnp'} keymax={23} showid={true} />
      <Artist name={'PunkPega'} artistid={'punkpega'} filekey={'pnp'} keymax={6} showid={true} />
    </div>
  );
}
