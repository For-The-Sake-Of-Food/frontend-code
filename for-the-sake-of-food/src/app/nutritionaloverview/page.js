// pages/foodInput.js
"use client";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import Select from "react-select";

const FoodInput = () => {
  const [foodName, setFoodName] = useState([]);
  const [mealType, setMealType] = useState({});
  const [foodCategory, setFoodCategory] = useState([]);
  const [cookingMethod, setCookingMethod] = useState([]);
  const [freshness, setFreshness] = useState({});
  const [error, setError] = useState("");
  const { user } = useUser();

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
        body: JSON.stringify({ ...foodhistory, id: user.id, date: date }),
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
  const foodNameOptions = [{ value: "posho", label: "Posho" }];
  const foodCategoryOptions = [
    { value: "antioxidants", label: "Antioxidants" },
    { value: "calcium", label: "Calcium" },
    { value: "carbohydrates", label: "Carbohydrates" },
    { value: "fats", label: "Fats" },
    { value: "dietaryfiber", label: "Dietary Fiber" },
    { value: "iron", label: "Iron" },
    { value: "magnesium", label: "Magnesium" },
    { value: "minerals", label: "Minerals" },
    { value: "omega-3 fatty acids ", label: "Omega-3 Fatty Acids" },
    { value: "potassium", label: "Potassium" },
    { value: "proteins", label: "Proteins" },
    { value: "vitamins", label: "Vitamins" },
    { value: "vitaminA", label: "Vitamin A" },
    { value: "vitaminB", label: "Vitamin B" },
    { value: "vitaminB1", label: "Vitamin B1 (Thiamine)" },
    { value: "vitaminB2", label: "Vitamin B2 (Riboflavin)" },
    { value: "vitaminB3", label: "Vitamin B3 (Niacin)" },
    { value: "vitaminB6", label: "Vitamin B6" },
    { value: "vitaminB9", label: "Vitamin B9 (Folate)" },
    { value: "vitaminB12", label: "Vitamin B12" },
    { value: "vitaminC", label: "Vitamin C" },
    { value: "vitaminD", label: "Vitamin D" },
    { value: "vitaminE", label: "Vitamin E" },
    { value: "vitaminK", label: "Vitamin K" },
    { value: "water", label: "Water" },
    { value: "zinc", label: "Zinc" },
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
      // style={{
      //   backgroundImage: 'url("./signin.jpg")',
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   minHeight: "100vh", // Optional: Set a minimum height to cover the entire viewport
      // }}
    >
      <div className="pt-20 items-center justify-center">
        <div className="text-center">
          <h1 className="font-bold mb-2">Visualize Your Health Journey</h1>
          <p className="text-lg pr-20 pl-20">
            "Our data visualization tool helps you track and understand your
            eating patterns. Input your daily meals and gauge
            your nutrition choices. Take control of your health with insightful
            charts. Knowledge is power, embrace it!"
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow-md sm:w-96 w-full mt-8 pr-20">
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
              options={foodNameOptions}
              isMulti
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

      
    </div>
  );
};

export default FoodInput;

/**
 * get results form the
 *
 *
 */
