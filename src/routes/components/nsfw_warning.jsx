import { Link } from "react-router-dom";

export default function NsfwWarning() {
  return (
    <div className="nsfw_warning" id="nsfwwarning">
      <h1>You are about to view adult content!</h1>
      <span>You must legally be able to view adult (NSFW, Not Safe For Work, Pornographic, Erotic) content in your country, and be at least 18 years of age to access this page.</span>
      <span>By pressing the 'Proceed' button you certify that you are legally allowed to view adult (pornographic, erotic) content in your country/jurisdiction, and are at least 18 years of age.</span>
      <br />
      <div className="nsfw_warning__buttons">
        <Link to="/catalogue">‹ Go back</Link>
        <button onClick={
          () => {
            localStorage.setItem('nsfw_allowed', 'yes');
            let el = document.getElementById('nsfwwarning');
            if (el) { el.classList.add('hidden'); }
          }
        }>Proceed ✔</button>
      </div>
    </div>
  );
}
