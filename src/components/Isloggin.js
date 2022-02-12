import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Isloggin = ({ token, setUser }) => {
  return token ? (
    <>
      <FontAwesomeIcon icon="fa-regular fa-envelope" />
      <FontAwesomeIcon icon="fa-regular fa-bell" />
      <FontAwesomeIcon icon="fa-regular fa-heart" />
      <FontAwesomeIcon icon="fa-regular fa-user" />
    </>
  ) : (
    <>
      <Link to="/*">
        <button className="signup">S'inscrire | Se connecter</button>
      </Link>
    </>
  );
};

export default Isloggin;
