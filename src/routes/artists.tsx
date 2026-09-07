import Artist from './components/artist';

export default function Artists() {
  return (
    <div className="artists">
      <span>
        <h3>We constantly seek new artists to work with!</h3>
        We work with many wonderful artists to bring you only the best stuff at conventions. Here are just some of the
        furry artists we work with!
      </span>
      <span className="disclaimer">
        (Many more artists available in the full catalogue, as well as many more arts from these artists)
      </span>
      <Artist name={'Hioshiru'} artistid={'hioshiru'} filekey={'hsf'} keymax={57} />
      <Artist name={'Yakovlev-Vad'} artistid={'yakovlev-vad'} filekey={'ysf'} keymax={49} />
      <Artist name={'Tatujapa'} artistid={'tatujapa'} filekey={'tasf'} keymax={7} />
      <Artist name={'Nevobaster'} artistid={'nevobaster'} filekey={'nsf'} keymax={6} />
      <Artist name={'Airfly-Pony'} artistid={'airfly-pony'} filekey={'asf'} keymax={10} />
      <Artist name={'PunkPega'} artistid={'punkpega'} filekey={'psf'} keymax={14} />
      <Artist name={'Lightly-San'} artistid={'lightly'} filekey={'lsf'} keymax={4} />
      <Artist name={'UP1TER'} artistid={'upiter'} filekey={'usf'} keymax={4} />
      <Artist name={'Twiren'} artistid={'twiren'} filekey={'tsf'} keymax={2} />
      <Artist name={'Hority'} artistid={'hority'} filekey={'hosf'} keymax={5} />
      <Artist name={'Vistamage'} artistid={'vistamage'} filekey={'vsf'} keymax={1} />
      <h2>Pony-only artists (not present at furry conventions):</h2>
      <Artist name={'JedaySkayVoker'} artistid={'jedayskayvoker'} filekey={'jsp'} keymax={23} />
      <Artist name={'Setharu'} artistid={'setharu'} filekey={'ssp'} keymax={14} />
    </div>
  );
}
