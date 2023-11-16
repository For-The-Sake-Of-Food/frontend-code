"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import SignupForm from "@/components/SignupForm";
import axios from "axios";


const Home = () => {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get("http://localhost:5000/api/dessert");
        console.log(response.data);
        setCardData(response.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex flex-col  items-center justify-center">
        <p className="text-2xl font-semibold mb-4">Please Wait </p>
        <div className="loader ease-linear border-4 border-t-4 border-gray-200 rounded-full h-10 w-10"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Snack Recipes</h1>
      <h1 className="text-2xl font-bold mb-4">For any time of the day!</h1>
      <div className="mb-8">
        {" "}
        {/* Added margin for spacing */}
        <p className="text-lg">Cooking has never been so fun, right?!.</p>
      </div>
      <div className="flex flex-wrap">
        {cardData.map((card, index) => (
          <div className="w-full sm:w-1/2 md:w-1/3 mb-8" key={index}>
            <Card key={index} {...card} />
          </div>
        ))}
      </div>
      <div className="bg-[#E7F9FD] w-full">
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="w-full">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
