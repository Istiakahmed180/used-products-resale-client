import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const data = useLoaderData();
  return (
    <div>
      <h1 className="text-2xl font-seimibold">
        Payment Product for {data.productName} Laptop
      </h1>
      <p className="text-lg">
        Please Pay{" "}
        <span className="font-bold text-green-600">${data.productPrice}</span>{" "}
        for your Laptop{" "}
      </p>
      <div className="w-96 mt-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm BookingInformation={data} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
