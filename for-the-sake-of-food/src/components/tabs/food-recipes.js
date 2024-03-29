import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import SignupForm from "@/components/Footer";
import axios from "axios";
import { useRecipes } from "@/components/MyContext";

export default function FoodRecipesTabs(){
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
          <p className="text-sm md:text-2xl md:font-semi-bold mb-4">Please Wait </p>
          <div className="loader ease-linear border-4 border-t-4 border-gray-200 rounded-full h-10 w-10"></div>
        </div>
      );
    }
    return (
      <div className="flex flex-col min-h-screen py-5 pl-8 pr-2 mt-0">
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
}