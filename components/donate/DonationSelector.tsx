"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const amounts = [25, 50, 100, 500];

export default function DonationSelector() {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");

  const handleDonate = async () => {
    const amount = customAmount !== "" ? Number(customAmount) : selectedAmount;

    trackEvent("donation_click", {
      amount,
      location: "donation_selector",
    });

    const response = await fetch("/api/create-donation-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
      }),
    });

    const data = await response.json();

    window.location.href = data.url;
  };

  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-black">Choose Your Contribution</h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {amounts.map((amount) => (
            <button
              key={amount}
              onClick={() => {
                setSelectedAmount(amount);
                setCustomAmount("");
              }}
              className={`border p-4 font-bold text-xl ${
                selectedAmount === amount && customAmount === ""
                  ? "bg-red-600 text-white"
                  : "bg-white"
              }`}>
              ${amount}
            </button>
          ))}
        </div>

        <input
          type="number"
          min="5"
          placeholder="Custom Amount"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          className="mt-6 w-full border p-4"
        />

        <button
          onClick={handleDonate}
          className="mt-6 w-full bg-red-600 py-4 font-black uppercase text-white">
          Donate Now
        </button>
      </div>
    </section>
  );
}
