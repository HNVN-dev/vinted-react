import logo from "../assets/img/Vinted_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="primary-nav">
        <div className="header-wrapper">
          <div className="left-nav">
            <Link to="/">
              <img src={logo} alt="vinted logo" className="header-logo" />{" "}
            </Link>
            <input className="searchbar" type="text" />
          </div>
          <div className="right-nav">
            <Link to="/signup">
              <button className="signup">S'inscrire</button>
            </Link>
            <Link to="/login">
              <button className="login">Se connecter</button>
            </Link>
            <button className="create-offer">Vends tes articles</button>
          </div>
        </div>
      </nav>
      <nav className="secondary-nav">
        <div className="header-wrapper">
          <ul>
            <li>Femmes</li>
            <li>Hommes</li>
            <li>Enfants</li>
            <li>Maison</li>
            <li>À propos</li>
            <li>Notre plateforme</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
