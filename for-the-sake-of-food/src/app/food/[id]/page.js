"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SignupForm from "@/components/SignupForm";
import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";

const MyPage = () => {
  const params = useParams();
  const [recipe, setRecipe] = useState({
    id: "",
    title: "",
    description: "",
    timestamp: "",
    image: "",
    category: "",
    ingredients: [""],
  });
  const [loading, setLoading] = useState(false);

  console.log(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `http://localhost:5000/api/get-recipe/${parseInt(params.id)}`
        );
        console.log(response.data);
        setRecipe(response.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params]);

  if (loading) {
    return (
      <div className="h-screen flex flex-col  items-center justify-center">
        <p className="text-2xl font-semibold mb-4">Please Wait </p>
        <div className="loader ease-linear border-4 border-t-4 border-gray-200 rounded-full h-10 w-10"></div>
      </div>
    );
  }

  return (
    <div className="pt-20 relative">
      {/* Large font size title */}
      <h1 className="text-3xl text-black text-center">{recipe.title}</h1>

      {/* Small font size description */}
      <p className="text-sm text-black text-center">
        Written by me on {recipe.timestamp}
      </p>

      <div className="flex items-center justify-center mt-4 ">
        <div className="rounded-lg overflow-hidden">
          <Image
            src={recipe.image}
            alt="Dessert"
            width={300} // Adjust the image width as needed
            height={5} // Adjust the image height as needed
          />
        </div>
      </div>

      <div className="w-1/2 mx-auto">
      <div className="flex items-center mt-4">
          <div className="ml-20 px-6 py-4 flex items-center">
            <Image src="/timer.png" alt="timer" width={18} height={18} />
          </div>
          <div>
            <p className="text-xs font-bold text-black">COOK TIME </p>
            <p className="text-xs text-black ">30 minutes</p>
          </div>

          <div className="ml-4 flex items-center">
            <div className="ml-30 mr-1 px-6 py-4">
              <Image
                src="/knife-and-fork.png"
                alt="knife and fork"
                width={18}
                height={18}
              />
            </div>
            <div>
              <p className="text-xs font-bold text-black">RECOMMENDED FOR </p>
              <p className="text-xs text-black">Diabetes</p>
            </div>
          </div>
        </div>
        {/* Thin black horizontal line */}
        <hr className="w-full border-t border-black my-4" />

        {/* Title for Ingredients */}
        <h2 className="text-2xl">Ingredients</h2>

        {/* List of Ingredients */}
        <ul className="list-disc pl-10">
          {recipe.ingredients.map((item) => (
            <li>{item}</li>
          ))}
        </ul>

        {/* Another thin black horizontal line */}
        <hr className="w-full border-t border-black my-4" />

        {/* Description below the line */}
        <p>
          {recipe.description}
        </p>
      </div>

      {/* Previous and Next buttons */}
      <div className="flex justify-between mt-20 mb-20">
      <Link href="/drinks-recipes/drinks-recipe-6">
        <button className="flex items-center pl-20 pr-2">
          <img src="/left-arrow.png" alt="Previous" className="arrow-icon mr-2" />
          <span className="text-lg font-bold">Previous</span>
        </button>
      </Link>
      <Link href="/dessert-recipe/dessert-recipe-2">
        <button className="flex items-center pl-2 pr-20">
        <span className="text-lg font-bold">Next</span>
          <img src="/right-arrow.png" alt="Next" className="arrow-icon ml-2" />
        </button>
      </Link>
      <style jsx>{`
        .arrow-icon {
          max-width: 20px; /* Set the maximum width of the arrow icon */
          height: auto; /* Maintain aspect ratio */
        }
      `}</style>
    </div>

      {/* SignupForm with full-width background */}
      <div className="bg-gray-200">
        <SignupForm />
      </div>
    </div>
  );
};

export default MyPage;
