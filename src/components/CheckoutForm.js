import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Navigate } from "react-router-dom";

import axios from "axios";

const CheckoutForm = ({ product_name, product_price }) => {
  // Called in Payment.js, props passed in the same file.
  // Payment.js is in SRC. There's the Payment page container to modify marging/padding if needed.

  // Setup Stripe

  const stripe = useStripe();
  const elements = useElements();

  // 0.8 and 0.4 is the shipping fees and the protection buyer fees
  // We can make it dynamic later.

  const totalPrice = (product_price + 0.8 + 0.4).toFixed();

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: "userId",
      });
      console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;

      const response = await axios.post(
        " https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: product_name,
          amount: totalPrice,
        }
      );
      console.log(response.data);

      if (response.data.status === "succeeded") {
        setCompleted(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="checkout-container">
      <h2>Résumé de la commande</h2>

      <div className="checkout-payment-resume">
        <div className="checkout-order">
          <div className="checkout-order-label">Commande</div>
          <div className="checkout-order-price">{product_price} €</div>
        </div>
        <div className="checkout-protection-buyer-fees">
          <div className="checkout-buyer-fees-label">
            Frais protection acheteurs
          </div>
          <div className="checkout-buyer-fees-price">0.40 €</div>
        </div>
        <div className="checkout-shipping-fees">
          <div className="checkout-shipping-label">Frais de port</div>
          <div className="checkout-shipping-price">0.80 €</div>
        </div>
      </div>

      <div className="checkout-total">
        <div className="checkout-total-label">Total</div>
        <div className="checkout-total-price">{totalPrice} €</div>
      </div>

      <p className="checkout-paragraph">
        Il ne vous reste plus qu'une étape pour vous offrir l'article
        {product_name}. Vous allez payer {totalPrice} (frais de protection et
        frais de port inclus).
      </p>

      {!completed ? (
        <form onSubmit={handleSubmit}>
          <div className="card-element-wrapper">
            <CardElement />
          </div>
          <button className="checkout-atc" type="submit">
            Pay
          </button>
        </form>
      ) : (
        <Navigate to="/success" />
      )}
    </div>
  );
};

export default CheckoutForm;
