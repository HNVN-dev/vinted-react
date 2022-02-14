import SignupOrLoginModal from "./SignupOrLoginModal";
import Cookies from "js-cookie";

import bell from "../assets/img/bell.svg";
import heart from "../assets/img/heart.svg";
import envelope from "../assets/img/envelope.svg";
import user from "../assets/img/user.svg";

const Logged = ({ setToken, isOpen, setIsOpen }) => {
  // <Logged /> is actually in Header.js, here you can pass props.

  return (
    <div className="icons-container">
      <img className="envelope-svg" src={envelope} fill="red" alt="" />

      <img className="bell-svg" src={bell} alt="" />

      <img className="heart-svg" src={heart} alt="" />
      <div className="user-menu">
        <img
          className="user-svg"
          src={user}
          alt=""
          onClick={() => setIsOpen(!isOpen)}
        />
        <SignupOrLoginModal open={isOpen}>
          <div className="connexion-modal">
            <div className="menu-items">
              <span className="my-account">Mon compte</span>
              <ul>
                <li>Mon profil</li>
                <li>Mes paramètres</li>
                <li>Personnalisation</li>
                <li>Mon porte-monnaie</li>
                <li>Invite tes amis</li>
                <li
                  className="disconnect-btn"
                  onClick={() => {
                    setToken(Cookies.remove("userToken"));
                    setIsOpen(false);
                  }}
                >
                  Se déconnecter
                </li>
              </ul>
            </div>
          </div>
        </SignupOrLoginModal>
      </div>
    </div>
  );
};

export default Logged;
