"use client";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import React from "react";
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
      <div
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
       
      </div>
      <div className="pt-20 flex flex-col min-h-[90vh]">
        <div className="space-y-4">
          <h1 className="text-center text-black text-lg md:text-4xl font-semibold">
            Meal Planner.
          </h1>
          
          <p className="text-sm text-center pt-5 px-4 md:px-20 ">
            Welcome to your Meal Planner! Plan your breakfast, lunch, and dinner
            with ease. Simply add your meal ideas, and let&apos;s get cooking!
          </p>
        </div>
      <div className="flex justify-around">
      <div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
        {date ? format(date, "dd/MM/yyyy") : <span>Pick a date</span>}
      </div>
      <div className="px-4 md:px-28 pt-16 grid grid-cols-1 lg:grid-cols-2 gap-4 pl-10 md:pl-25 ">
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

// "use client";
// import { useState } from "react";
// import { FaPlus } from "react-icons/fa6";
// import React from "react";
// import { Calendar } from "@/components/ui/calendar";
// import { formatDate } from "@/lib/utils";
// const Mealplanner = () => {
//   const [breakfastMeals, setBreakfastMeals] = useState([]);
//   const [newBreakfastMeal, setNewBreakfastMeal] = useState({});
//   const [selectedBreakfastDate, setSelectedBreakfastDate] = useState(
//     new Date()
//   );

//   const [lunchMeals, setLunchMeals] = useState([]);
//   const [newLunchMeal, setNewLunchMeal] = useState({});
//   const [selectedLunchDate, setSelectedLunchDate] = useState(new Date());

//   const [dinnerMeals, setDinnerMeals] = useState([]);
//   const [newDinnerMeal, setNewDinnerMeal] = useState({});
//   const [selectedDinnerDate, setSelectedDinnerDate] = useState(new Date());
//   const { user } = useUser();
//   const [isLoading, setIsLoading] = useState(false);
//   useEffect(() => {
//     const fetchMeals = async (mealType, setState, selectedDate) => {
//       setIsLoading(true);
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/api/${mealType}`,
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               date: formatDate(selectedDate, "dd/MM/yyyy"),
//               userId: user?.id,
//             }),
//           }
//         );
//         const data = await response.json();
//         setState(data);
//       } catch (error) {
//         console.error(`Error fetching ${mealType}:`, error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (user) {
//       fetchMeals("breakfast", setBreakfastMeals, selectedBreakfastDate);
//       fetchMeals("lunch", setLunchMeals, selectedLunchDate);
//       fetchMeals("supper", setDinnerMeals, selectedDinnerDate);
//     }
//   }, [user, selectedBreakfastDate, selectedLunchDate, selectedDinnerDate]);

//   // Add a new meal
//   const handleAddMeal = async (endpoint, newMeal, setSelectedDate) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/${endpoint}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             ...newMeal,
//             userId: user?.id,
//             date: formatDate(setSelectedDate, "dd/MM/yyyy"),
//           }),
//         }
//       );

//       if (response.ok) {
//         const newMealItem = await response.json();
//         const updatedMealItem = {
//           id: newMealItem.id,
//           name: newMealItem.name,
//           checked: false,
//         };
//         switch (endpoint) {
//           case "breakfast":
//             setBreakfastMeals([updatedMealItem, ...breakfastMeals]);
//             setNewBreakfastMeal({ name: "" });
//             break;
//           case "lunch":
//             setLunchMeals([updatedMealItem, ...lunchMeals]);
//             setNewLunchMeal({ name: "" });
//             break;
//           case "supper":
//             setDinnerMeals([updatedMealItem, ...dinnerMeals]);
//             setNewDinnerMeal({ name: "" });
//             break;
//           default:
//             break;
//         }
//       } else {
//         throw new Error(`Error adding ${endpoint} meal`);
//       }
//     } catch (error) {
//       console.error(`Error adding ${endpoint} meal:`, error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle checkbox change
//   const handleCheckboxChange = async (endpoint, itemId, newCheckedValue) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/${endpoint}/${itemId}`,
//         {
//           method: "PATCH",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ checked: newCheckedValue }),
//         }
//       );

//       if (response.ok) {
//         const updatedMealItem = await response.json();
//         switch (endpoint) {
//           case "breakfast":
//             setBreakfastMeals(
//               breakfastMeals.map((item) =>
//                 item.id === itemId ? updatedMealItem : item
//               )
//             );
//             break;
//           case "lunch":
//             setLunchMeals(
//               lunchMeals.map((item) =>
//                 item.id === itemId ? updatedMealItem : item
//               )
//             );
//             break;
//           case "supper":
//             setDinnerMeals(
//               dinnerMeals.map((item) =>
//                 item.id === itemId ? updatedMealItem : item
//               )
//             );
//             break;
//           default:
//             break;
//         }
//       } else {
//         throw new Error(`Error updating ${endpoint} meal`);
//       }
//     } catch (error) {
//       console.error(`Error updating ${endpoint} meal:`, error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle delete meal
//   const handleDeleteMeal = async (endpoint, itemId) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/${endpoint}/${itemId}`,
//         {
//           method: "DELETE",
//         }
//       );

//       if (response.ok) {
//         switch (endpoint) {
//           case "breakfast":
//             setBreakfastMeals(
//               breakfastMeals.filter((item) => item.id !== itemId)
//             );
//             break;
//           case "lunch":
//             setLunchMeals(lunchMeals.filter((item) => item.id !== itemId));
//             break;
//           case "supper":
//             setDinnerMeals(
//               dinnerMeals.filter((item) => item.id !== itemId)
//             );
//             break;
//           default:
//             break;
//         }
//       } else {
//         throw new Error(`Error deleting ${endpoint} meal`);
//       }
//     } catch (error) {
//       console.error(`Error deleting ${endpoint} meal:`, error);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   return (
//     <div className="relative">
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           right: 0,
//           bottom: 0,
//           left: 0,
//           zIndex: -1,
//           backgroundImage: "url('/Back-ground.JPG')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           width: "100vw",
//           height: "100%",
//         }}
//       ></div>
//       <div className="pt-20 flex flex-col min-h-[90vh]">
//         <div className="space-y-4">
//           <h1 className="text-center text-black text-lg md:text-4xl font-semibold">
//             Meal Planner
//           </h1>
//           <p className="text-center text-gray-700 text-sm">
//             {formatDate(new Date())}
//           </p>
//           <p className="text-sm text-center pt-5 px-4 md:px-20 ">
//             Welcome to your Meal Planner! Plan your breakfast, lunch, and dinner
//             with ease. Simply add your meal ideas, and let&apos;s get cooking!
//           </p>
//         </div>
//         <div className="px-4 md:px-28 pt-16 flex flex-wrap justify-between pl-10 md:pl-25 ">
//           {/* Breakfast */}
//           <div className="w-full sm:w-1/3">
//             <h3 className="text-base md:text-lg font-semibold">Breakfast</h3>
//             <div className="relative w-full md:w-80">
//               <input
//                 className="border-b w-full text-xs md:text-base focus:outline-none p-3 "
//                 placeholder="Add New"
//                 onChange={(e) => setNewBreakfastMeal({ name: e.target.value })}
//               />
//               <button className="-ml-8" onClick={handleAddBreakfastMeal}>
//                 <FaPlus />
//               </button>
//             </div>
//             <div className="space-y-4 pt-4">
//               {breakfastMeals?.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-row space-x-2 items-center"
//                 >
//                   <label htmlFor={item?.name} className="text-gray-500">
//                     {item?.name}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* Lunch */}
//           <div className="w-full sm:w-1/3">
//             <h3 className="text-base md:text-lg font-semibold">Lunch</h3>
//             <div className="relative w-full md:w-80">
//               <input
//                 className="border-b w-full text-xs md:text-base focus:outline-none p-3 "
//                 placeholder="Add New"
//                 onChange={(e) => setNewLunchMeal({ name: e.target.value })}
//               />
//               <button className="-ml-8" onClick={handleAddLunchMeal}>
//                 <FaPlus />
//               </button>
//             </div>
//             <div className="space-y-4 pt-4">
//               {lunchmeals?.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-row space-x-2 items-center"
//                 >
//                   <label htmlFor={item?.name} className="text-gray-500">
//                     {item?.name}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* Dinner */}
//           <div className="w-full sm:w-1/3">
//             <h3 className="text-base md:text-lg font-semibold">Dinner</h3>
//             <div className="relative w-full md:w-80">
//               <input
//                 className="border-b w-full text-xs md:text-base focus:outline-none p-3 "
//                 placeholder="Add New"
//                 onChange={(e) => setNewDinnerMeal({ name: e.target.value })}
//               />
//               <button className="-ml-8" onClick={handleAddDinnerMeal}>
//                 <FaPlus />
//               </button>
//             </div>
//             <div className="space-y-4 pt-4">
//               {dinnermeals?.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-row space-x-2 items-center"
//                 >
//                   <label htmlFor={item?.name} className="text-gray-500">
//                     {item?.name}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mealplanner;
