import logo from "../assets/img/Vinted_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="primary-nav">
        <div className="left-nav">
          <Link to="/">
            <img src={logo} alt="vinted logo" className="header-logo" />{" "}
          </Link>
          <input className="searchbar" type="text" />
        </div>
        <div className="right-nav">
          <button className="signup">S'inscrire</button>
          <button className="login">Se connecter</button>
          <button className="create-offer">Vends tes articles</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
