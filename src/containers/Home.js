import Offer from "./Offers";
import { Link } from "react-router-dom";
import herobanner from "../assets/img/vinted-home-baner-wide.jpeg";

const Home = ({ token }) => {
  return (
    <>
      {/*  {!token && (
        <section className="hero-banner">
          <img src={herobanner} alt="" />
          <div className="hero-card">
            <h1>Prêt à faire du tri dans vos placards ?</h1>
            <Link to="/publish">
              <button>Vends maintenant</button>
            </Link>
            <div className="discover">Découvrir comment ça marche</div>
          </div>
        </section>
      )} */}

      <Offer />
    </>
  );
};

export default Home;
