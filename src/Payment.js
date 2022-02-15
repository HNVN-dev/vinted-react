import { useLocation, Navigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./components/CheckoutForm";

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = ({ token }) => {
  // Route page, called in App.js
  // You can find CheckoutForm on component folder

  const location = useLocation();
  const { product_name, product_price } = location.state;

  return token ? (
    <main className="payment-container">
      <Elements stripe={stripePromise}>
        <CheckoutForm
          product_name={product_name}
          product_price={product_price}
        />
      </Elements>
    </main>
  ) : (
    <Navigate to="/login" />
  );
};

export default Payment;
