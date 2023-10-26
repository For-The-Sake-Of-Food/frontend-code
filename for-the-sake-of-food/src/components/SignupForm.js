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
    <div className="p-4 max-w-md mx-auto">
      {submitted ? ( // Conditional rendering of the thank you message
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Thank you for signing up!
          </h2>
          <p className="text-gray-700">
            You will receive news and updates at <span className="text-blue-500">{email}</span>.
          </p>
          <p className="text-gray-700">Incase you do not see the notification,check your spam folder.</p>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold text-center mb-4">
            Sign up with your email address to receive news and updates.
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-900">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full p-2 border text-black border-gray-300 rounded-md focus:ring "
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Sign up
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignupForm;
