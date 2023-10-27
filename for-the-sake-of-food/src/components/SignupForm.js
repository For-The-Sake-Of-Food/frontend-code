"use client";
import React, { useState } from "react";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api/send-email", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ email: email }),
    });
    const data = await res.json();
    console.log(data);
    setSubmitted(true);
  }

  return (
    <div className="bg-gray-200 ">
      {/* The gray background container */}
      <div className="p-4 max-w-md mx-auto">
        {submitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              Thank you for signing up!
            </h2>
            <p className="text-gray-700">
              You will receive news and updates at{" "}
              <span className="text-blue-500">{email}</span>.
            </p>
            <p className="text-gray-700">
              In case you do not see the notification, check your spam folder.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-center mb-4">
              Sign up to receive news and updates.
            </h2>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-4 flex">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email address"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-1/2 p-2 border text-black border-gray-300 rounded-md focus:ring mr-8"
                  required
                />
                <button
                  type="submit"
                  className="w-1/2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupForm;
