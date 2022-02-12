import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsletter,
        }
      );
      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 409) {
        setErrorMessage(
          "Cette adresse email est déjà utilisée sur Vinted. S'il s'agit de ton compte, identifie-toi."
        );
      }
    }
  };

  const handleUsernameTyping = (event) => {
    setUsername(event.target.value);
  };
  const handleEmailTyping = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordTyping = (event) => {
    setPassword(event.target.value);
  };
  const handleCheckBox = (event) => {
    setNewsletter(event.target.checked);
  };

  return (
    <form className="signup-form" action="" onSubmit={handleSubmit}>
      <div className="signup-form-container">
        <h1>S'inscrire</h1>
        <span>{errorMessage}</span>

        <input
          className="signup-email-input"
          type="email"
          value={email}
          placeholder="Email"
          onChange={handleEmailTyping}
        />

        <input
          className="signup-user-input"
          value={username}
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={handleUsernameTyping}
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
            En m'inscrivant je confirme que j'ai accepté les Termes & Conditions
            et les Conditions de vente Pro de Vinted, avoir lu la Politique de
            Confidentialité, et que j'ai plus de 18 ans.
          </p>
        </div>

        <input className="signup-submit-input" type="submit" />
        <div className="already-registered">Besoin d'aide ?</div>
      </div>
    </form>
  );
};

export default Signup;
