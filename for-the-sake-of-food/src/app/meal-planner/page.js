"use client";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import React from "react";
import Footer from "@/components/Footer";
import { Calendar } from "@/components/ui/calendar";
import { formatDate } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { format } from "date-fns";
const Mealplanner = () => {
  const { user } = useUser();
  const [breakfastMeals, setBreakfastMeals] = useState([]);
  const [newBreakfastMeal, setNewBreakfastMeal] = useState("");
const [loading, setLoading] = useState(false)
  const [lunchmeals, setLunchMeals] = useState([]);
  const [newLunchMeal, setNewLunchMeal] = useState("");

  const [dinnermeals, setDinnerMeals] = useState([]);
  const [newDinnerMeal, setNewDinnerMeal] = useState("");
  const [date, setDate] = useState(new Date());
  async function getmeals(date) {
    setLoading(true)
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/mealplanner/?userId=${user?.id}&date=${date}`
      );

      const data = await response?.json();
      console.log(data);
      const lunch = [];
      const breakfast = [];
      const dinner = [];
      data?.forEach((meal) => {
        switch (meal?.meal) {
          case "breakfast":
            breakfast?.push(meal);
            break;
          case "lunch":
            lunch?.push(meal);
            break;
          default:
            dinner.push(meal);
            break;
        }
      });

      setLunchMeals([...lunch]);
      setBreakfastMeals([...breakfast]);
      setDinnerMeals([...dinner]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }
  async function handleAddBreakfastMeal() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/mealplanner`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          meal: "breakfast",
          name: newBreakfastMeal,
          date:format(date, "dd/MM/yyyy")
        }),
      });

      const data = response?.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setNewBreakfastMeal("");
    getmeals(format(date, "dd/MM/yyyy"));
  }

  async function handleAddLunchMeal() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/mealplanner`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          meal: "lunch",
          name: newLunchMeal,
          date:format(date, "dd/MM/yyyy")
        }),
      });

      const data = response?.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setNewLunchMeal("");
    getmeals(format(date, "dd/MM/yyyy"));
  }

  async function handleAddDinnerMeal() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/mealplanner`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          meal: "supper",
          name: newDinnerMeal,date:format(date, "dd/MM/yyyy")
        }),
      });

      const data = response?.json();
      console.log(data);
      setNewDinnerMeal("");
    } catch (error) {
      console.log(error);
    }
    setNewDinnerMeal("");
    getmeals(format(date, "dd/MM/yyyy"));
  }

  useEffect(() => {
    if (user?.id) {
      getmeals(format(date, "dd/MM/yyyy"));
    }
  }, [user, date]);
 
  if (!user) {
    return null;
  }
  return (
    <div className="relative overflow-x-hidden">
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: -1,
          backgroundImage: "url('/Back-ground.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100%",
        }}
      >
       
      </div> */}
      <div className="pt-10 flex flex-col min-h-[90vh]">
        <div className="space-y-4">
          <h1 className="text-center text-black text-lg md:text-4xl font-semibold">
            Meal Planner.
          </h1>
          
          <p className="text-sm text-center pt-5 pl-8 md:pl-0 px-4 md:px-20 ">
            Welcome to your Meal Planner! Plan your breakfast, lunch, and dinner
            with ease. Simply add your meal ideas, and let&apos;s get cooking!
          </p>
        </div>
      <div className="flex flex-col lg:flex-row justify-around pl-6 md:pl-40 pt-8">
      <div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
       <span className="ml-24 text-sm"> {date ? format(date, "dd/MM/yyyy") : <span>Pick a date</span>}</span>
      </div>
      <div className="px-4 md:px-28 pt-10 md:pt-6 grid grid-cols-1 gap-4 pl-10 md:pl-25 mb-5 md:mb-20">
          {/* Breakfast */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-sm md:text-base font-semibold">Breakfast</h3>
            <div className="relative w-full sm:w-64 md:w-80">
              <input
                className="border-b w-full text-xs md:text-base focus:outline-none p-3 "
                placeholder="Add New"
                onChange={(e) => setNewBreakfastMeal(e.target.value)}
                value={newBreakfastMeal}
              />
              <button className="-ml-8" onClick={handleAddBreakfastMeal}>
                <FaPlus />
              </button>
            </div>
            <div className="space-y-4 pt-4">
              {loading ? <span>Loading...</span> :breakfastMeals?.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row space-x-2 items-center"
                >
                  <label htmlFor={item?.name} className="text-gray-500">
                    {item?.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* Lunch */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-sm md:text-base font-semibold">Lunch</h3>
            <div className="relative w-full md:w-80">
              <input
                className="border-b w-full text-xs md:text-base focus:outline-none p-3 "
                placeholder="Add New"
                onChange={(e) => setNewLunchMeal(e.target.value)}
                value={newLunchMeal}
              />
              <button className="-ml-8" onClick={handleAddLunchMeal}>
                <FaPlus />
              </button>
            </div>
            <div className="space-y-4 pt-4">
              {loading ? <span>Loading...</span> : lunchmeals?.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row space-x-2 items-center"
                >
                  <label htmlFor={item?.name} className="text-gray-500">
                    {item?.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* Dinner */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-sm md:text-base font-semibold">Dinner</h3>
            <div className="relative w-full md:w-80">
              <input
              value={newDinnerMeal}
                className="border-b w-full text-xs md:text-base focus:outline-none p-3 "
                placeholder="Add New"
                onChange={(e) => setNewDinnerMeal(e.target.value)}
              />
              <button className="-ml-8" onClick={handleAddDinnerMeal}>
                <FaPlus />
              </button>
            </div>
            <div className="space-y-4 pt-4">
              {loading ? <span>Loading...</span> :dinnermeals?.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row space-x-2 items-center"
                >
                  <label htmlFor={item?.name} className="text-gray-500">
                    {item?.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="bg-[#E7F9FD] w-full">
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="w-full">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mealplanner;