import successicon from "../assets/img/success-icon.png";
import { Link } from "react-router-dom";

const Sucess = () => {
  return (
    <div className="success-container">
      <div className="success-wrapper">
        <img src={successicon} alt="" />
        <h2>Le paiement est confirmé</h2>
        <p>Commande validée. Ton paiement a bien été accepté.</p>
        <Link to="/">
          <button className="success-continue">Continuer</button>
        </Link>
      </div>
    </div>
  );
};

export default Sucess;
