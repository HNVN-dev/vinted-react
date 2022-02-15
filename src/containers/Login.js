import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        {
          email: email,
          password: password,
        }
      );

      console.log(response.data);
      if (response.data.token) {
        setUser(response.data.token);
        // redirection
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.response);
      if (error.response.status === 400 || error.response.status === 401) {
        setErrorMessage("Mauvais email et/ou mot de passe");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login-form-container-nofix">
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
      </div>
    </form>
  );
};

export default Login;
