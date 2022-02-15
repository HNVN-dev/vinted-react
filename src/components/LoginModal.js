import { useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios";

const LoginModal = ({ setUser, closeAndClose, openOrClose }) => {
  // called in Guest.js, props passed in Header.js

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleEmailTyping = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordTyping = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        { email, password }
        // email: email, password: password
      );
      if (response.data.token) {
        setUser(response.data.token);
        closeAndClose();
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.response); // going deeper in the error message
      if (error.response.status === 400 || error.response.status === 401) {
        setErrorMessage("Identifiant ou mot de passe incorrect");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login-form-container">
        <h1>Se connecter</h1>
        <span className="error-message">{errorMessage}</span>
        <input
          className="login-email-input"
          type="email"
          placeholder="Adresse email"
          onChange={handleEmailTyping}
        />
        <input
          className="login-password-input"
          type="password"
          placeholder="Mot de passe"
          onChange={handlePasswordTyping}
        />
        <input className="login-submit-input" type="submit" />

        <div className="password-forgotten">J'ai oublié mon mot de passe</div>

        <div className="a-problem">Un problème ?</div>
        <button className="close-btn-absolute" onClick={closeAndClose}>
          X
        </button>
        {/* the button is here because the nearest button will hold the keypress
 So the user can validate the form by pressing "Enter". 
 If we let the button in the top of the html page, pressing "Enter" close the form
 With the multiple case we hold with this modal, its the simplier way to do this
 without breaking the code or complexify it too much. */}
      </div>
    </form>
  );
};

export default LoginModal;
