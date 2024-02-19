// pages/foodInput.js
"use client";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import Select from "react-select";

const FoodInput = () => {
  const [foodName, setFoodName] = useState("");
  const [mealType, setMealType] = useState({});
  const [foodCategory, setFoodCategory] = useState([]);
  const [cookingMethod, setCookingMethod] = useState([]);
  const [freshness, setFreshness] = useState({});
  const [error, setError] = useState("");
  const {
    user: { id },
  } = useUser();

  const handleSubmit = async (e) => {
    const date = new Date().toLocaleDateString();
    console.log(date);
    e.preventDefault();

    // Basic form validation
    if (
      !foodName ||
      !mealType ||
      !foodCategory ||
      !cookingMethod ||
      !freshness
    ) {
      setError("All fields are required");
      return;
    }
    const foodhistory = {
      foodName,
      mealType: mealType.value,
      foodCategory: foodCategory.map((item) => item.value),
      cookingMethod: cookingMethod.map((item) => item.value),
      freshness: freshness.value,
    };
    //   {
    //     "foodName": "matooke and beans",
    //     "mealType": {
    //         "value": "breakfast",
    //         "label": "Breakfast"
    //     },
    //     "foodCategory": [
    //         {
    //             "value": "fruits",
    //             "label": "Fruits"
    //         }
    //     ],
    //     "cookingMethod": [
    //         {
    //             "value": "grilled",
    //             "label": "Grilled"
    //         }
    //     ],
    //     "freshness": {
    //         "value": "fresh",
    //         "label": "Fresh"
    //     }
    // }
    console.log("foodhistory", foodhistory);

    try {
      const response = await fetch("http://localhost:5000/api/foodhistory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...foodhistory, id: id, date: date }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      setFoodName("");
      setMealType("");
      setFoodCategory("");
      setCookingMethod("");
      setFreshness("");
      setError("");
      console.log("Data submitted successfully");
    } catch (error) {
      setError("Failed to submit data");
      console.error("Error submitting data:", error);
    }
  };

  const foodCategoryOptions = [
    { value: "vitamins", label: "Vitamins" },
    { value: "fiber", label: "Fiber" },
    { value: "proteins", label: "Proteins" },
    { value: "carbohydrates", label: "Carbohydrates" },
    { value: "water", label: "Water" },
    { value: "iron", label: "Iron" },
    { value: "zinc", label: "Zinc" },
    { value: "calcium", label: "Calcium" },
    { value: "potassium", label: "Potassium" },
    { value: "fats", label: "Fats" },
    { value: "magnesium", label: "Magnesium" },
    { value: "omega-3 fatty acids ", label: "Fats" },
    { value: "antioxidants", label: "Antioxidants" },
    
  ];
  const cookingMethodOptions = [
    { value: "grilled", label: "Grilled" },
    { value: "fried", label: "Fried" },
    { value: "steamed", label: "Steamed" },
    { value: "boiled", label: "Boiled" },
    { value: "starfried", label: "Star Fried" },
    { value: "deepfried", label: "Deep Fried" },
    { value: "sauted", label: "Sauted" },
    { value: "poached", label: "Poached" },
    { value: "simmered", label: "Simmered" },
    { value: "toasted", label: "Toasted" },
    { value: "microwaved", label: "Microwaved" },
    { value: "baked", label: "Baked" },
    { value: "pressurecooked", label: "Pressure cooked" },
    { value: "smoked", label: "Smoked" },
    { value: "broiled", label: "Broiled" },
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
            <input
              type="text"
              id="foodName"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              required
              className="border p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="foodCategory">Food Category:</label>

            <Select
              id="foodCategory"
              value={foodCategory}
              onChange={(selectedOptions) => setFoodCategory(selectedOptions)}
              options={foodCategoryOptions}
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
