"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

import { Calendar } from "@/components/ui/calendar";
import { formatDate } from "@/lib/utils";

const Mealplanner = () => {
  const [breakfastMeals, setBreakfastMeals] = useState([]);
  const [newBreakfastMeal, setNewBreakfastMeal] = useState({});

  const [lunchmeals, setLunchMeals] = useState([]);
  const [newLunchMeal, setNewLunchMeal] = useState({});

  const [dinnermeals, setDinnerMeals] = useState([]);
  const [newDinnerMeal, setNewDinnerMeal] = useState({});

  async function handleAddBreakfastMeal() {
    setBreakfastMeals([newBreakfastMeal, ...breakfastMeals]);
  }

  async function handleAddLunchMeal() {
    setLunchMeals([newLunchMeal, ...lunchmeals]);
  }

  async function handleAddDinnerMeal() {
    setDinnerMeals([newDinnerMeal, ...dinnermeals]);
  }

  return (
    <div
      style={{
        backgroundImage: "url('/cloudy background.JPG')",
        backgroundSize: "cover",
      }}
    >
      <div className="pt-20 flex  flex-col min-h-[90vh]">
        <div className="space-y-4">
          <h1 className="!text-center text-black text-4xl font-semibold">
            Meal Planner
          </h1>
          <p className="text-center text-gray-500">{formatDate(new Date())}</p>
        </div>
        <div className="px-28 pt-16 flex justify-between">
          <div>
            {/* breakfast */}
            <div>
              <div className="flex items-center space-x-6">
                <h3 className="text-lg font-semibold">Breakfast</h3>

                <div className="relative w-[500px]">
                  <input
                    className="border-b w-full focus:outline-none p-3 "
                    placeholder="Add New"
                    onChange={(e) =>
                      setNewBreakfastMeal({ name: e.target.value })
                    }
                  />
                  <button className="-ml-8" onClick={handleAddBreakfastMeal}>
                    <FaPlus />
                  </button>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                {breakfastMeals?.map((item, index) => {
                  return (
                    <div key={index} className="flex flex-row space-x-2 items-center">
                      {/* <input type="checkbox" className="rounded-none p-8 " name={item?.name} value={item?.name} /> */}
                      <label htmlFor={item?.name} className="text-gray-500">
                        {item?.name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* lunch */}
            <div>
              <div className="flex items-center space-x-6">
                <h3 className="text-lg font-semibold">Lunch</h3>

                <div className="relative w-[500px]">
                  <input
                    className="border-b w-full focus:outline-none p-3 "
                    placeholder="Add New"
                    onChange={(e) => setNewLunchMeal({ name: e.target.value })}
                  />
                  <button className="-ml-8" onClick={handleAddLunchMeal}>
                    <FaPlus />
                  </button>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                {lunchmeals?.map((item, index) => {
                  return (
                    <div key={index} className="flex flex-row space-x-2 items-center">
                      {/* <input type="checkbox" className="rounded-none p-8 " name={item?.name} value={item?.name} /> */}
                      <label htmlFor={item?.name} className="text-gray-500">
                        {item?.name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* supper  */}
            <div>
              <div className="flex items-center space-x-6">
                <h3 className="text-lg font-semibold">Dinner</h3>

                <div className="relative w-[500px]">
                  <input
                    className="border-b w-full focus:outline-none p-3 "
                    placeholder="Add New"
                    onChange={(e) => setNewDinnerMeal({ name: e.target.value })}
                  />
                  <button className="-ml-8" onClick={handleAddDinnerMeal}>
                    <FaPlus />
                  </button>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                {dinnermeals?.map((item, index) => {
                  return (
                    <div key={index} className="flex flex-row space-x-2 items-center">
                      {/* <input type="checkbox" className="rounded-none p-8 " name={item?.name} value={item?.name} /> */}
                      <label htmlFor={item?.name} className="text-gray-500">
                        {item?.name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Mealplanner;
