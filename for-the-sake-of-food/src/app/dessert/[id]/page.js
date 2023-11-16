"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
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
      <div className="h-screen flex items-center justify-center">
        <p className="text-4xl font-bold">Loading...</p>
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
            alt="Company Logo"
            width={400} // Adjust the image width as needed
            height={50} // Adjust the image height as needed
          />
        </div>
      </div>

      <div className="w-1/2 mx-auto">
        {/* Description of the image */}
        {/* <p>{recipes.desc}</p> */}

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
      <div className="flex justify-between mt-4">
        <Link href="/drinks-recipes/drinks-recipe-6">
          <button className="flex items-center">
            <FaArrowLeft className="mr-2" />
            Previous
          </button>
        </Link>
        <Link href="/dessert-recipes/dessert-recipe-2">
          <button className="flex items-center">
            Next
            <FaArrowRight className="ml-2" />
          </button>
        </Link>
      </div>

      {/* SignupForm with full-width background */}
      <div className="bg-gray-200">
        <SignupForm />
      </div>
    </div>
  );
};

export default MyPage;
