import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import "react-multi-carousel";
import Carousel from "react-multi-carousel";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  console.log(data);

  const responsive = {
    desktop: {
      breakpoint: { max: 300, min: 300 },
      items: 3,
    },
  };

  useEffect(() => {
    const { id } = useParams();
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
  }, []);

  return isLoading ? (
    <div></div>
  ) : (
    <>
      <Header />
      <main className="offer">
        <div className="product-page-container">
          <img
            src={data.product_image.secure_url}
            alt=""
            className="product-page-img"
          />
          <Carousel responsive={responsive}>
            {data.product_pictures.map((picture, index) => {
              return (
                <div className="product-page-carousel">
                  <img src={picture.secure_url} alt="" />
                </div>
              );
            })}
          </Carousel>
          <div className="product-page-left-container">
            <div className="product-page-price">{data.product_price} €</div>
            <div className="product-page-product-infos">
              <div className="product-info-brand">
                <div className="info-brand">MARQUE</div>
                {data.product_details[0]["MARQUE"]}
              </div>
              <div className="product-info-size">
                <div className="info-size">TAILLE</div>
                {data.product_details[1]["TAILLE"]}
              </div>
              <div className="product-info-condition">
                <div className="info-condition">ÉTAT</div>
                {data.product_details[2]["ÉTAT"]}
              </div>
              <div className="product-info-color">
                <div className="info-color">COULEUR</div>
                {data.product_details[3]["COULEUR"]}
              </div>
              <div className="product-info-location">
                <div className="info-location">EMPLACEMENT</div>
                {data.product_details[4]["EMPLACEMENT"]}
              </div>
            </div>
            <div className="bottom-page-product">
              <div className="product-page-name">{data.product_name}</div>
              <div className="product-page-description">
                {data.product_description}
              </div>
              <div className="product-page-user">
                <img
                  src={data.owner.account.avatar.secure_url}
                  alt=""
                  className="product-user-avatar"
                />
                <div className="product-user-username">
                  {data.owner.account.username}
                </div>
              </div>
              <button className="product-page-atc">Acheter</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Offer;
