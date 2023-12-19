import logo from '../assets/logo.png';
// importing CSS module for styling.
import classes from './Header.module.css'

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {/* Using a css module on P */}
      <p className={classes.paragraph}>A community of artists and art-lovers.</p>
    </header>
  );
}
