import Header from "../components/Header";
import Offer from "./Offers";
import herobanner from "../assets/img/vinted-home-baner-wide.jpeg";

const Home = () => {
  return (
    <>
      <Header />
      <section className="hero-banner">
        <img src={herobanner} alt="" />
        <div className="hero-card">
          <h1>Prêt à faire du tri dans vos placards ?</h1>
          <button>Commencer à vendre</button>
        </div>
      </section>
      <Offer />
    </>
  );
};

export default Home;
