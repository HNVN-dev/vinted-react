import logo from "../assets/img/Vinted_logo.png";

import { useState } from "react";
import { Link } from "react-router-dom";
import Guest from "./Guest";
import Logged from "./Logged";
import PriceRange from "./PriceRange";

const Header = ({ token, setToken, setUser }) => {
  // <Header /> is actually in app.js, here you can pass props.

  const [isOpen, setIsOpen] = useState(false);
  // State for the login modal SignupOrLoginModal.js

  const [wantToLog, setWantToLog] = useState(false);
  // State for the modal comportment

  const openOrClose = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

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
            {token ? (
              <Logged
                setToken={setToken}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                openOrClose={openOrClose}
              />
            ) : (
              <Guest
                setToken={setToken}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                openOrClose={openOrClose}
                wantToLog={wantToLog}
                setWantToLog={setWantToLog}
                setUser={setUser}
                token={token}
              />
            )}
            <Link to="/publish">
              <button className="publish">Vends tes articles</button>{" "}
            </Link>
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
