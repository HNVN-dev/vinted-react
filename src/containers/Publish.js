import axios from "axios";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const Publish = ({ token }) => {
  const [picture, setPicture] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);
  const [exchange, setExchange] = useState(false);

  /* const navigate = useNavigate(); */
  // useNavigate will works only in my back end, need to fix something

  console.log(token);
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const offerData = new FormData();

      offerData.append("picture", picture);
      offerData.append("title", title);
      offerData.append("description", description);
      offerData.append("brand", brand);
      offerData.append("size", size);
      offerData.append("color", color);
      offerData.append("condition", condition);
      offerData.append("city", city);
      offerData.append("price", price);
      offerData.append("exchange", exchange);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        offerData,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      /* response.data && navigate(`/offer${response.data._id}`); */
      alert(JSON.stringify(response.data));
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return token ? (
    <div className="publish-container">
      <h2>Vends ton article</h2>
      <form onSubmit={handleSubmit}>
        <div className="file-select">
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            id="file"
            onChange={(event) => setPicture(event.target.files[0])}
          />
        </div>

        <div className="title-description-container">
          <div className="publish-title">
            <h4>Titre</h4>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="ex: Chemise Sézane verte"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="publish-description">
            <h4>Décris ton article</h4>
            <textarea
              type="text"
              id="publish-description"
              name="publish-description"
              placeholder="ex: porté quelques fois, taille correctement "
              rows={5}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="brand-to-cityO-container">
          <div className="publish-brand">
            <h4>Marque</h4>
            <input
              type="text"
              id="publish-brand"
              name="publish-brand"
              placeholder="ex: Gucci"
              value={brand}
              onChange={(event) => setBrand(event.target.value)}
            />
          </div>
          <div>
            <h4>Taille</h4>
            <input
              type="text"
              id="article-size"
              name="article-size"
              placeholder="ex: XS "
              value={size}
              onChange={(event) => setSize(event.target.value)}
            />
          </div>
          <div className="publish-color">
            <h4>Couleur</h4>
            <input
              type="text"
              id="publish-color"
              name="publish-color"
              placeholder="ex: jaune et or"
              value={color}
              onChange={(event) => setColor(event.target.value)}
            />
          </div>
          <div className="publish-condition">
            <h4>Etat</h4>
            <input
              type="text"
              id="publish-condition"
              name="publish-condition"
              placeholder="ex: Neuf sans étiquette"
              value={condition}
              onChange={(event) => setCondition(event.target.value)}
            />
          </div>
          <div>
            <h4>Lieu</h4>
            <input
              type="text"
              id="publish-city"
              name="publish-city"
              placeholder="ex: Paris"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
        </div>

        <div className="publish-price">
          <h4>Prix</h4>
          <div>
            <input
              type="text"
              id="publish-price"
              name="publish-price"
              placeholder="0,00€"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
            <div>
              <input
                type="checkbox"
                id="publish-exchange"
                name="publish-exchange"
                onChange={(event) => setExchange(event.target.checked)}
              />
              <span>Je suis intéressé(e) par les échanges</span>
            </div>
          </div>
        </div>

        <button type="submit">Ajouter</button>
      </form>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
