import axios from "axios";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: username,
          email: email,
          password: password,
          newsletter: newsletter,
        }
      );
      Cookies.set("userToken", response.data.token, { expires: 30 });
      console.log(Cookies.get("userToken"));
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleUsernameTyping = (event) => {
    const value = event.target.value;
    setUsername(value);
  };
  const handleEmailTyping = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordTyping = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleCheckBox = () => {
    setNewsletter(true);
  };

  return (
    <>
      <Header />
      <form className="signup-form" action="" onSubmit={handleSubmit}>
        <div className="signup-form-container">
          <h1>S'inscrire</h1>
          <input
            className="signup-user-input"
            value={username}
            type="text"
            placeholder="Nom d'utilisateur"
            onChange={handleUsernameTyping}
          />

          <input
            className="signup-email-input"
            type="email"
            value={email}
            placeholder="Email"
            onChange={handleEmailTyping}
          />
          <input
            className="signup-password-input"
            type="password"
            value={password}
            placeholder="Mot de passe"
            onChange={handlePasswordTyping}
          />

          <div className="newsletter-container">
            <input
              className="signup-checkbox-input"
              type="checkbox"
              onChange={handleCheckBox}
            />
            <h3>S'inscrire à notre newsletter</h3>
          </div>

          <div className="gdpr-container">
            <input className="gdpr-checkbox-input" type="checkbox" />
            <p>
              En m'inscrivant je confirme que j'ai accepté les Termes &
              Conditions et les Conditions de vente Pro de Vinted, avoir lu la
              Politique de Confidentialité, et que j'ai plus de 18 ans.
            </p>
          </div>

          <input className="signup-submit-input" type="submit" />
          <div className="already-registered">Besoin d'aide ?</div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Signup;
