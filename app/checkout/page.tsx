"use client";

import axios from "axios";

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
// );

export default function CheckoutPage() {
  const handleCheckout = async () => {
    try {
      // const stripe = await stripePromise;
      // 1. Call backend endpoint with dynamic payload
      const res = await axios.post(
        "http://localhost:5143/api/payments/create-checkout-session",
        {
          amount: 100, // 👈 in cents ($1.00)
          productName: "Starter Plan",
          customerEmail: "test@example.com",
        }
      );

      // 2. Redirect to Stripe Checkout
      if (res.data.url) {
        window.location.href = res.data.url;
      } else {
        console.error("No checkout URL returned from server");
      }
    } catch (error) {
      console.error("Error starting checkout:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handleCheckout}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Checkout with Stripe
      </button>
      <div className="flex items-center justify-center h-screen">
        <a
          href="https://buy.stripe.com/test_8x23cw7tmahC1B369keUU00" // Replace with your Payment Link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Checkout with Stripe
        </a>
      </div>
    </div>
  );
}
