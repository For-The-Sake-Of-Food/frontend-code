"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SignupForm from "@/components/SignupForm";
import { useParams } from "next/navigation";
import axios from "axios";
import { useRecipes } from "@/components/MyContext";
import { useRouter } from "next/navigation";
const MyPage = () => {
  const router = useRouter();
  const { foodData } = useRecipes();
  const params = useParams();
  const [recipe, setRecipe] = useState({
    id: "",
    title: "",
    description: [""],
    timestamp: "",
    image: "",
    category: "",
    ingredients: [""],
    recommended: "",
    cooktime:"",
  });
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(
    foodData.indexOf(parseInt(params.id))
  );
  console.log(params);
  console.log("food data here", foodData);
  console.log("current index", currentIndex);
  // Function to handle moving to the next index

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % foodData.length;
    const nextId = foodData[nextIndex];
    navigateToRecipe(nextId, nextIndex);
  };

  // Function to handle moving to the previous index
  const handlePrevious = () => {
    const prevIndex =
      currentIndex === 0 ? foodData.length - 1 : currentIndex - 1;
    const prevId = foodData[prevIndex];
    navigateToRecipe(prevId, prevIndex);
  };
  // Function to navigate to a specific recipe based on its index in the foodData array
  const navigateToRecipe = (id, index) => {
    // Use the router to navigate to the recipe page with the provided id
    setCurrentIndex(index);
    router.push(`/food/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/get-recipe/${parseInt(
            params.id
          )}`
        );
        console.log("Recipe Data:", response.data);
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

      <div className="flex items-center justify-center pt-10 ">
        <div className="rounded-lg overflow-hidden">
          <Image
            src={recipe.image}
            alt="Dessert"
            width={300} // Adjust the image width as needed
            height={5} // Adjust the image height as needed
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 mx-auto mt-4 flex flex-col">
        <div className="flex items-center justify-center">
          <div className="ml-3 mr-1 px-6 py-4">
            <Image src="/timer.png" alt="timer" width={18} height={18} />
          </div>
          <div className="text-center">
            <p className="text-xs font-bold text-black">COOK TIME </p>
            <p className="text-xs text-black ">{recipe.cooktime}</p>
          </div>

          <div className="ml-4 flex items-center justify-center">
            <div className="ml-3 mr-1 px-6 py-4">
              <Image
                src="/knife-and-fork.png"
                alt="knife and fork"
                width={18}
                height={18}
              />
            </div>
            <div className="text-center">
              <p className="text-xs font-bold text-black ">RECOMMENDED FOR </p>
              <p className="text-xs text-black ">{recipe.recommended}</p>
            </div>
          </div>
        </div>
        {/* Thin black horizontal line */}
        <hr className="w-full border-t border-black my-4" />

        {/* Title for Ingredients */}
        <h2 className="text-2xl font-bold">Ingredients</h2>

        {/* List of Ingredients */}
        <ul className="list-disc pl-10">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Another thin black horizontal line */}
        <hr className="w-full border-t border-black my-4" />

        {/* Description below the line */}
        <h2 className="text-2xl font-bold">Directions</h2>
        <ul className="list-decimal pl-10">
          {recipe.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {/* Previous and Next buttons */}
      <div className="flex justify-between mt-20 mb-20">
        <button
          onClick={handlePrevious}
          className="flex items-center pl-10 pr-2"
        >
          <Image
            src="/left-arrow.png"
            alt="Previous"
            width={20}
            height={10}
            className="arrow-icon mr-2"
          />
          <span className="text-lg font-bold">Previous</span>
        </button>
        <button onClick={handleNext} className="flex items-center pl-2 pr-10">
          <span className="text-lg font-bold">Next</span>
          <Image
            src="/right-arrow.png"
            alt="Next"
            width={20}
            height={10}
            className="arrow-icon ml-2"
          />
        </button>

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
