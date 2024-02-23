"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import SignupForm from "@/components/SignupForm";
import axios from "axios";
import { useRecipes } from "@/components/MyContext";

const Home = () => {
  const {setDrinksData}= useRecipes();
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const extractIds = (data) => {
    return data.map((item) => item.id);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/drinks`
        );
        console.log(response.data);
        setCardData(response.data);
        const idsArray = extractIds(response.data);
        console.log(idsArray); // Log the array of ids
        setDrinksData(idsArray)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setDrinksData]);

  if (loading) {
    return (
      <div className="h-screen flex flex-col  items-center justify-center">
        <p className="text-2xl font-semibold mb-4">Please Wait </p>
        <div className="loader ease-linear border-4 border-t-4 border-gray-200 rounded-full h-10 w-10"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-14 min-h-screen">
      {/* <h1 className="text-3xl font-bold py-2">Juice Recipes</h1>
      <h1 className="text-2xl font-bold py-2">Blend Sip Repeat!</h1> */}
      <div className="py-4">
        {/* Added margin for spacing */}
        {/* <p className="text-lg">
          Explore our nutritious selection of juices and find your next
          favourite blend.
        </p> */}
      </div>
      <div className="flex flex-wrap">
        {cardData.map((card, index) => (
          <div className="w-full sm:w-1/2 md:w-1/3 mb-8" key={index}>
            <Card key={index} {...card} />
          </div>
        ))}
      </div>
      {/* <div className="bg-[#E7F9FD] w-full">
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="w-full">
            <SignupForm />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
