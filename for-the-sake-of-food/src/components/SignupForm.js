"use client";
import React, { useState } from "react";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/send-email", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ email: email }),
    });
    const data = await res.json();
    console.log(data);
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <div className="bg-[#E7F9FD]">
      {/* The blue background container */}
      <div className="p-4 max-w-md mx-auto">
      {loading ? ( // Display loader if loading is true
          <div className="text-center">
            <p className="text-2xl font-semibold mb-4">Please Wait </p>
            {/* <div className="loader ease-linear border-4 border-t-4 border-gray-200 rounded-full h-10 w-10 ml-20"></div> */}
          </div>
        ) : submitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Thank you for subscribing!
            </h2>
            <p className="text-black">
              You will receive news and updates at{" "}
              <span className="text-sm text-blue-500">{email}</span>.
            </p>
            <p className="text-black">
              In case you do not see the notification, check your spam folder.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            {/* <h1 className="text-5xl py-10 pt-60 text-black font-bold">
              Simple and tasty recipes
            </h1> */}
            <h2 className="text-2xl font-bold text-center mb-4">
              Deliciousness to your inbox
            </h2>
            <p className="text-black mb-8">
            Sign up to receive news and updates.
            </p>
            
            <form onSubmit={handleSubmit} className="w-full">
              <div className="text-sm flex md:mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email address..."
                  value={email}
                  onChange={handleEmailChange}
                  className="w-3/4 p-2 border text-black border-gray-300 rounded-md focus:ring mr-8"
                  required
                />
                <button
                  type="submit"
                  className="w-1/2 bg-black text-white rounded-md hover:bg-black"
                >
                  Subscribe
                </button>
              </div>
                <p className="text-sm text-center">
                <span className="font-bold">Disclaimer:</span> We&apos;re not nutritionists. Please verify health claims independently.For The Sake Of Food is not liable for decisions based on our content.
                </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupForm;
