import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Isloggin = ({ token, setUser }) => {
  return token ? (
    <>
      <FontAwesomeIcon icon="envelope" />
      <FontAwesomeIcon icon="bell" />
      <FontAwesomeIcon icon="heart" />
      <FontAwesomeIcon icon="user" />
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
