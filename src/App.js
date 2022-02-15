import "./App.css";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cookies from "js-cookie";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Signup from "./containers/Signup";
import Publish from "./containers/Publish";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import Payment from "./Payment";
import Success from "./containers/Success";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);

  // User authentification

  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 30 });
    } else {
      Cookies.remove("userToken");
    }

    setToken(token);
  };
  return (
    <Router>
      <Header setUser={setUser} token={token} setToken={setToken} />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home token={token} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path={"/publish"} element={<Publish token={token} />} />
        <Route path="/payment" element={<Payment token={token} />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
