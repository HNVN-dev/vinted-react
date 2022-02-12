import bell from "../assets/img/bell.svg";
import heart from "../assets/img/heart.svg";
import envelope from "../assets/img/envelope.svg";
import user from "../assets/img/user.svg";

import { Link } from "react-router-dom";

const Isloggin = ({ token, setUser }) => {
  return token ? (
    <div className="icons-container">
      <img className="envelope-svg" src={envelope} fill="red" alt="" />

      <img className="bell-svg" src={bell} alt="" />

      <img className="heart-svg" src={heart} alt="" />

      <img className="user-svg" src={user} alt="" />
    </div>
  ) : (
    <>
      <Link to="/*">
        <button className="signup">S'inscrire | Se connecter</button>
      </Link>
    </>
  );
};

export default Isloggin;
