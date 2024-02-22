// pages/foodInput.js
"use client";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Select from "react-select";
import axios from "axios";

const FoodInput = () => {
  const [foodName, setFoodName] = useState([]);
  const [mealType, setMealType] = useState({});
  const [foodCategory, setFoodCategory] = useState([]);
  const [cookingMethod, setCookingMethod] = useState([]);
  const [freshness, setFreshness] = useState({});
  const [error, setError] = useState("");
  const { user } = useUser();

  const {
    data,
    error: fetchError,
    isLoading,
  } = useQuery("foodData", async () => {
    const response = await axios.get("http://localhost:5000/api/all-foods");
    return response.data;
  });

  // const fetchData = async () => {
  //   const response = await axios.get("http://localhost:5000/api/all-foods");
  //   return response.data;
  // };

  console.log({ data });

  if (!user) {
    return null;
  }

  const handleSubmit = async (e) => {
    const date = new Date().toLocaleDateString();
    console.log(date);
    e.preventDefault();

    // Basic form validation
    if (
      !foodName ||
      !mealType ||
      !cookingMethod ||
      !freshness
    ) {
      setError("All fields are required");
      return;
    }
    const foodhistory = {
      foodName: foodName.map((item) => ({ label: item.label, value: item.value })),
      mealType: mealType.value,
      cookingMethod: cookingMethod.map((item) => ({ label: item.label, value: item.value })),
      freshness: freshness.value,
    };

    console.log("foodhistory", foodhistory);

    try {
      const response = await fetch("http://localhost:5000/api/foodhistory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...foodhistory, id: user.id, date: date }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      setFoodName("");
      setMealType("");
      setCookingMethod("");
      setFreshness("");
      setError("");
      console.log("Data submitted successfully");
    } catch (error) {
      setError("Failed to submit data");
      console.error("Error submitting data:", error);
    }
  };

  const foodData = [
    {
      label: "Apple  Fruit",
      value: 1,
    },
    {
      label: "Apple Juice",
      value: 2,
    },
    {
      label: "Avocado Fruit",
      value: 3,
    },
    {
      label: "Avocado Salad",
      value: 4,
    },
    {
      label: "Banana Cake",
      value: 5,
    },
    {
      label: "Banana Crisps",
      value: 6,
    },
    {
      label: "Banana Fruit",
      value: 7,
    },
    {
      label: "Banana Pancakes",
      value: 8,
    },
    {
      label: "Banana Smoothie",
      value: 9,
    },
    {
      label: "Oatmeal",
      value: 70,
    },
    {
      label: "Orange Fruit",
      value: 71,
    },
    {
      label: "Beef meat pie",
      value: 16,
    },
    {
      label: "Beef Muchomo",
      value: 17,
    },
    {
      label: "Beef Samosas",
      value: 18,
    },
    {
      label: "Beef Sandwich",
      value: 19,
    },
    {
      label: "Beef stew",
      value: 20,
    },
    {
      label: "Biscuits",
      value: 21,
    },
    {
      label: "Brown Bread",
      value: 22,
    },
    {
      label: "Buga",
      value: 23,
    },
    {
      label: "Cabbage",
      value: 24,
    },
    {
      label: "Bean Stew",
      value: 10,
    },
    {
      label: "Carrot Juice",
      value: 25,
    },
    {
      label: "Cassava Crisps",
      value: 26,
    },
    {
      label: "Cassava Katogo",
      value: 27,
    },
    {
      label: "Cassava",
      value: 28,
    },
    {
      label: "Chapati",
      value: 29,
    },
    {
      label: "Chicken meat pie",
      value: 30,
    },
    {
      label: "Chicken Samosas",
      value: 31,
    },
    {
      label: "Chicken Sandwich",
      value: 32,
    },
    {
      label: "Chicken Stew",
      value: 33,
    },
    {
      label: "Cocktail Juice",
      value: 34,
    },
    {
      label: "Coconut Milk",
      value: 35,
    },
    {
      label: "Coconut Water",
      value: 36,
    },
    {
      label: "Coleslaw",
      value: 37,
    },
    {
      label: "Cornflakes",
      value: 38,
    },
    {
      label: "Daddies",
      value: 39,
    },
    {
      label: "Deviled eggs",
      value: 40,
    },
    {
      label: "Dodo",
      value: 41,
    },
    {
      label: "Egg Sandwich",
      value: 42,
    },
    {
      label: "Egged rice",
      value: 43,
    },
    {
      label: "Eggs",
      value: 44,
    },
    {
      label: "Fish",
      value: 45,
    },
    {
      label: "Fried Rice",
      value: 46,
    },
    {
      label: "Goat Muchomo",
      value: 47,
    },
    {
      label: "Goat Stew",
      value: 48,
    },
    {
      label: "Orange Juice",
      value: 72,
    },
    {
      label: "Grapes",
      value: 49,
    },
    {
      label: "Grasshoppers",
      value: 50,
    },
    {
      label: "Groundnut Sauce",
      value: 51,
    },
    {
      label: "Groundnuts",
      value: 52,
    },
    {
      label: "Guava Fruit",
      value: 53,
    },
    {
      label: "Guava Juice",
      value: 54,
    },
    {
      label: "Hard Corn",
      value: 55,
    },
    {
      label: "Kachumbari",
      value: 56,
    },
    {
      label: "Lemonade",
      value: 57,
    },
    {
      label: "Maize",
      value: 58,
    },
    {
      label: "Maize or Stiff Porridge",
      value: 59,
    },
    {
      label: "Mandazi",
      value: 60,
    },
    {
      label: "Mango  Fruit",
      value: 61,
    },
    {
      label: "Matooke",
      value: 63,
    },
    {
      label: "Matooke Katogo",
      value: 64,
    },
    {
      label: "Milk Tea",
      value: 65,
    },
    {
      label: "Millet Porridge",
      value: 66,
    },
    {
      label: "Mango Juice",
      value: 62,
    },
    {
      label: "Mixed Berry Juice",
      value: 67,
    },
    {
      label: "Nakati",
      value: 68,
    },
    {
      label: "Nyama Choma",
      value: 69,
    },
    {
      label: "Passion Fruit",
      value: 73,
    },
    {
      label: "Passion Fruit Juice",
      value: 74,
    },
    {
      label: "Pawpaw Fruit",
      value: 75,
    },
    {
      label: "Pawpaw Juice",
      value: 76,
    },
    {
      label: "Peas",
      value: 77,
    },
    {
      label: "Pilau",
      value: 78,
    },
    {
      label: "Pineapple Fruit",
      value: 79,
    },
    {
      label: "Pineapple Juice",
      value: 80,
    },
    {
      label: "Plantain",
      value: 81,
    },
    {
      label: "Pomegrante",
      value: 82,
    },
    {
      label: "Posho",
      value: 83,
    },
    {
      label: "Potato Crisps",
      value: 84,
    },
    {
      label: "Potato Wedges",
      value: 85,
    },
    {
      label: "Potatoes",
      value: 86,
    },
    {
      label: "Pumpkin",
      value: 87,
    },
    {
      label: "Rolex",
      value: 88,
    },
    {
      label: "Scrambled Eggs",
      value: 89,
    },
    {
      label: "Sorghum Porridge",
      value: 90,
    },
    {
      label: "Soya Porridge",
      value: 91,
    },
    {
      label: "Spiced Tea",
      value: 92,
    },
    {
      label: "Strawberry Juice",
      value: 93,
    },
    {
      label: "Sukuma Wiki",
      value: 94,
    },
    {
      label: "Sweet Potatoes",
      value: 95,
    },
    {
      label: "Tamarind Juice",
      value: 96,
    },
    {
      label: "Vanilla Cake",
      value: 97,
    },
    {
      label: "Vegetable Samosa",
      value: 98,
    },
    {
      label: "Vegetable Sandwich",
      value: 99,
    },
    {
      label: "Watermelon Fruit",
      value: 100,
    },
    {
      label: "Watermelon Juice",
      value: 101,
    },
    {
      label: "White Ants",
      value: 102,
    },
    {
      label: "White Milk bread",
      value: 103,
    },
    {
      label: "Yams",
      value: 104,
    },
    {
      label: "Donuts",
      value: 105,
    },
    {
      label: "Vegetable Rice",
      value: 106,
    },
  ];

  const cookingMethodOptions = [
    { value: "baked", label: "Baked" },
    { value: "boiled", label: "Boiled" },
    { value: "broiled", label: "Broiled" },
    { value: "deepfried", label: "Deep Fried" },
    { value: "fried", label: "Fried" },
    { value: "grilled", label: "Grilled" },
    { value: "marinated", label: "Marinated" },
    { value: "microwaved", label: "Microwaved" },
    { value: "poached", label: "Poached" },
    { value: "pressurecooked", label: "Pressure cooked" },
    { value: "sauted", label: "Sauted" },
    { value: "simmered", label: "Simmered" },
    { value: "sliced", label: "Sliced" },
    { value: "smoked", label: "Smoked" },
    { value: "starfried", label: "Star Fried" },
    { value: "steamed", label: "Steamed" },
    { value: "toasted", label: "Toasted" },
  ];
  const freshnessOptions = [
    { value: "fresh", label: "Fresh" },
    { value: "processed", label: "Processed" },
    { value: "refridgerated", label: "Refridgerated" },
  ];
  const mealtypeOpttions = [
    { value: "breakfast", label: "Breakfast" },
    { value: "lunch", label: "Lunch" },
    { value: "supper", label: "Supper" },
  ];

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: 'url("./signin.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Optional: Set a minimum height to cover the entire viewport
      }}
    >
      <div className="bg-white p-4 rounded shadow-md sm:w-96 w-full">
        <h1 className="text-2xl mb-4 text-center">Food Input Form</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ... (unchanged code for text input fields) */}
          <div>
            <label htmlFor="foodName">Food Name:</label>
            <Select
              id="foodName"
              value={foodName}
              onChange={(selectedOptions) => setFoodName(selectedOptions)}
              options={foodData}
              isMulti
            />
          </div>

          <div>
            <label htmlFor="cookingMethod">Cooking Method:</label>
            <Select
              id="cookingMethod"
              value={cookingMethod}
              onChange={(selectedOptions) => setCookingMethod(selectedOptions)}
              options={cookingMethodOptions}
              isMulti
            />
          </div>

          <div>
            <label htmlFor="freshness">Fresh or Processed:</label>

            <Select
              id="freshness"
              value={freshness}
              onChange={(selectedOptions) => setFreshness(selectedOptions)}
              options={freshnessOptions}
            />
          </div>

          <div>
            <label htmlFor="mealType">Meal Type:</label>
            <Select
              id="mealtype"
              value={mealType}
              onChange={(selectedOptions) => setMealType(selectedOptions)}
              options={mealtypeOpttions}
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FoodInput;

/**
 * get results form the
 *
 *
 */
