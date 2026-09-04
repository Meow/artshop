import Artist from './artist';

export default function CatalogueMlpSFW() {
  return (
    <div className="artists">
      <h2>Pony Prints</h2>
      <Artist name={'Yakovlev-Vad'} artistid={'yakovlev-vad'} filekey={'ysp'} keymax={65} showid={true} />
      <Artist name={'JedaySkayVoker'} artistid={'jedayskayvoker'} filekey={'jsp'} keymax={23} showid={true} />
      <Artist name={'Nevobaster'} artistid={'nevobaster'} filekey={'nsp'} keymax={29} showid={true} />
      <Artist name={'Setharu'} artistid={'setharu'} filekey={'ssp'} keymax={14} showid={true} />
      <Artist name={'Hioshiru'} artistid={'hioshiru'} filekey={'hsp'} keymax={17} showid={true} />
      <Artist name={'Airfly-Pony'} artistid={'airfly-pony'} filekey={'asp'} keymax={4} showid={true} />
      <Artist name={'Lightly-San'} artistid={'lightly'} filekey={'lsp'} keymax={4} showid={true} />
      <Artist name={'PunkPega'} artistid={'punkpegasus'} filekey={'psp'} keymax={6} showid={true} />
      <Artist name={'Vistamage'} artistid={'vistamage'} filekey={'vsp'} keymax={3} showid={true} />
    </div>
  );
}
