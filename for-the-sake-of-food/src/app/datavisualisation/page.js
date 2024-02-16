// pages/foodInput.js
'use client'
import React, { useState } from 'react';

const FoodInput = () => {
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [servingSize, setServingSize] = useState('');
  const [mealType, setMealType] = useState('');
  const [foodCategory, setFoodCategory] = useState('');
  const [cookingMethod, setCookingMethod] = useState('');
  const [freshness, setFreshness] = useState('');
  const [waterIntake, setWaterIntake] = useState('');
  const [physicalActivity, setPhysicalActivity] = useState('');
  const [dietSatisfaction, setDietSatisfaction] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!foodName || !quantity || !servingSize || !mealType || !foodCategory || !cookingMethod || !freshness || !waterIntake || !physicalActivity || !dietSatisfaction) {
      setError('All fields are required');
      return;
    }

    // Backend API integration (replace <YourBackendAPI> with your actual API endpoint)
    try {
      const response = await fetch('<YourBackendAPI>', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          foodName,
          quantity,
          servingSize,
          mealType,
          foodCategory,
          cookingMethod,
          freshness,
          waterIntake,
          physicalActivity,
          dietSatisfaction,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      // Clear form and error on successful submission
      setFoodName('');
      setQuantity('');
      setServingSize('');
      setMealType('');
      setFoodCategory('');
      setCookingMethod('');
      setFreshness('');
      setWaterIntake('');
      setPhysicalActivity('');
      setDietSatisfaction('');
      setError('');
      console.log('Data submitted successfully');
    } catch (error) {
      setError('Failed to submit data');
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen"
    style={{
      backgroundImage: 'url("./signin.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh', // Optional: Set a minimum height to cover the entire viewport
    }}>
      <div className="bg-white p-4 rounded shadow-md sm:w-96 w-full">
        <h1 className="text-2xl mb-4 text-center">Food Input Form</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ... (unchanged code for text input fields) */}
          <div>
            <label htmlFor="foodCategory">Food Category:</label>
            <select
              id="foodCategory"
              value={foodCategory}
              onChange={(e) => setFoodCategory(e.target.value)}
              required
              className="border p-2 w-full"
            >
              <option value="">Select Food Category</option>
              <option value="fruits">Fruits</option>
              <option value="vegetables">Vegetables</option>
              <option value="proteins">Proteins</option>
              <option value="carbohydrates">Carbohydrates</option>
              <option value="sugarySnacks">Sugary Snacks</option>
              <option value="fastFood">Fast Food</option>
            </select>
          </div>

          <div>
            <label htmlFor="cookingMethod">Cooking Method:</label>
            <select
              id="cookingMethod"
              value={cookingMethod}
              onChange={(e) => setCookingMethod(e.target.value)}
              required
              className="border p-2 w-full"
            >
              <option value="">Select Cooking Method</option>
              <option value="grilled">Grilled</option>
              <option value="fried">Fried</option>
              <option value="steamed">Steamed</option>
              <option value="boiled">Boiled</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div>
            <label htmlFor="freshness">Fresh or Processed:</label>
            <select
              id="freshness"
              value={freshness}
              onChange={(e) => setFreshness(e.target.value)}
              required
              className="border p-2 w-full"
            >
              <option value="">Select Freshness</option>
              <option value="fresh">Fresh</option>
              <option value="processed">Processed</option>
            </select>
          </div>

          <div>
            <label htmlFor="mealType">Meal Type:</label>
            <select
              id="mealType"
              value={mealType}
              onChange={(e) => setMealType(e.target.value)}
              required
              className="border p-2 w-full"
            >
              <option value="">Select Meal Type</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">Snack</option>
            </select>
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
