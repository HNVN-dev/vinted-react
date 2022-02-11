import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleEmailTyping = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordTyping = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        { email: email, password: password }
      );
      Cookies.set("userToken", response.data.token, { expires: 30 });
      console.log(Cookies.get("userToken"));
    } catch (error) {
      alert(error.response);
    }
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="login-form-container">
          <h1>Se connecter</h1>

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

          <Link to="/signup" className="link-signup">
            <div className="password-forgotten">
              J'ai oublié mon mot de passe
            </div>
            <div className="a-problem">Un problème ?</div>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Login;
