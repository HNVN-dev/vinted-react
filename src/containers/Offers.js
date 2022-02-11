import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <section className="offers-container">
      {data.offers.map((elem) => {
        return (
          <div key={elem._id} className="offer-container">
            <div className="user-offer">
              <img
                src={elem.owner.account.avatar.secure_url}
                alt={`avatar de ${elem.owner.account}`}
              />
              <div className="offer-account-username">
                {elem.owner.account.username}
              </div>
            </div>
            <Link to={`/offer/${elem._id}`}>
              {" "}
              <img
                className="offer-product-img"
                src={elem.product_pictures[0].secure_url}
                alt={`${elem.product_name}`}
              />{" "}
            </Link>
            <div className="offer-product-infos">
              <div className="offer-product-price">
                {`${Number(elem.product_price).toFixed(2).replace(".", ",")}`} €
              </div>
              <div className="offer-product-size">
                {elem.product_details[1]["TAILLE"]}
              </div>
              <div className="offer-product-brand">
                {elem.product_details[0]["MARQUE"]}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Offer;
