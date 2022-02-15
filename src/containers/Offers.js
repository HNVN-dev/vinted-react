import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Offers = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span></span>
  ) : (
    <section className="offers-container">
      {data.offers.map((elem) => {
        return (
          elem.product_details[1]["TAILLE"] &&
          /* we only wants to return elem with TAILLE name.
             Some elem doesn't have it and we wants a harmonious feed */

          /* It works with elem.owner.account.avatar too
           maybe we need to switch to hold more cases (?) */

          elem.owner.account.avatar?.secure_url && (
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
              <Link key={elem._id} to={`/offer/${elem._id}`}>
                <img
                  className="offer-product-img"
                  src={elem.product_image.secure_url}
                  alt={`${elem.product_name}`}
                />
              </Link>
              <div className="offer-product-infos">
                <div className="offer-product-price">
                  {`${Number(elem.product_price).toFixed(2).replace(".", ",")}`}
                  €
                </div>
                <div className="offer-product-size">
                  {elem.product_details[1]["TAILLE"]}
                </div>
                <div className="offer-product-brand">
                  {elem.product_details[0]["MARQUE"]}
                </div>
              </div>
            </div>
          )
        );
      })}
    </section>
  );
};

export default Offers;
