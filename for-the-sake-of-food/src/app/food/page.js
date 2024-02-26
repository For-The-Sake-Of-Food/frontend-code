"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import axios from "axios";
import { useRecipes } from "@/components/MyContext";

const Home = () => {
  const { setFoodData } = useRecipes();
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
          `${process.env.NEXT_PUBLIC_API_URL}/api/food`
        );
       
        setCardData(response.data);
        const idsArray = extractIds(response.data);
        console.log(idsArray); // Log the array of ids
        setFoodData(idsArray)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setFoodData]);
  if (loading) {
    return (
      <div className="h-screen flex flex-col  items-center justify-center">
        <p className="text-sm md:font-semibold mb-4">Please Wait </p>
        <div className="loader ease-linear border-4 border-t-4 border-gray-200 rounded-full h-10 w-10"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen py-5 pl-3 md:pl-8 pr-2 ">
      {/* <h1 className="text-lg md:text-4xl pl-4 text-center font-semibold py-2">Food Recipes</h1> */}
      {/* <h1 className="text-2xl pl-5 py-2"></h1> */}
      <div className="flex flex-wrap mt-0 pr-1">
        {cardData.map((card, index) => (
          <div className="w-full sm:w-1/2 md:w-1/3 mb-8" key={index}>
            <Card key={index} {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
