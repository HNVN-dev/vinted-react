import "./App.css";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./components/CheckoutForm";
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

    // Stripe

    const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>;
  };
  return (
    <Router>
      <Header setUser={setUser} token={token} setToken={setToken} />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path={"/publish"} element={<Publish token={token} />} />
        <Route path="/payment" element={<Payment token={token} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
