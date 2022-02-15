import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div></div>
  ) : (
    <main className="offer">
      <div className="product-page-container">
        <img
          src={data.product_image.secure_url}
          alt=""
          className="product-page-img"
        />

        <div className="product-page-left-container">
          <div className="product-page-price">{data.product_price} €</div>
          <div className="product-page-product-infos">
            {data.product_details.map((elem, index) => {
              const keys = Object.keys(elem);
              return (
                <div className="product-info-line" key={index}>
                  <div className="product-info-key">{keys[0]}</div>
                  <div className="product-info-value">{elem[keys[0]]}</div>
                </div>
              );
            })}
          </div>
          <div className="bottom-page-product">
            <div className="product-page-name">{data.product_name}</div>
            <div className="product-page-description">
              {data.product_description}
            </div>
            <div className="product-page-user">
              {console.log(data)}
              <img
                src={data.owner.account.avatar.secure_url}
                alt=""
                className="product-user-avatar"
              />
              <div className="product-user-username">
                {data.owner.account.username}
              </div>
            </div>
            <Link
              to="/payment"
              state={{
                product_name: data.product_name,
                product_price: data.product_price,
              }}
            >
              <button className="product-page-atc">Acheter</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Offer;
