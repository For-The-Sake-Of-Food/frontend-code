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

        const response = await axios.get("http://localhost:5000/api/drinks");
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
      <div className="h-screen flex items-center justify-center">
        <p className="text-4xl font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-3 mt-[60px]">
        {cardData.map((recipe) => (
          <Card key={recipe.id} {...recipe} />
        ))}
      </div>
      <div className="bg-gray-200">
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="flex justify-center">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
