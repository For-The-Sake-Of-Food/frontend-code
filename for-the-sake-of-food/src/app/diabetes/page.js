// "use client";
// import Dessertcard from "@/components/Dessertcard";
// import Foodcard from "@/components/Foodcard";
// import Juicecard from "@/components/Juicecard";
// import Image from "next/image";
// const Diabetes = () => {
//   return (
//     <div>
//       <div className="relative rounded-lg overflow-hidden pl-4">
//         <div className="px-4 md:px-6">
//           <div className="relative">
//             <Image
//               src="/diabetes.jpg"
//               alt="diabetes image"
//               className="w-full h-32 md:h-80 object-cover rounded-lg"
//             />
//             <div className="h-full absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-65 rounded-lg" />
//             <div className="absolute top-3/4 left-0 transform -translate-y-1/2 p-4 pl-8 text-[#1E1E1E] text-left">
//               <h1 className="text-4xl font-bold">
//                 Diabetes Type2 Recipes Hub!
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="pt-20 items-center justify-center">
//         <div className="text-center">
//           <h1 className="font-bold mb-2">
//             <p className="text-lg">
//               Explore{" "}
//               <span className="text-orange-500">
//                 Delicious and Nutritious recipes tailored for YOU!
//               </span>
//             </p>
//           </h1>
//           <p className="text-lg pr-20 pl-20">
//             `&quot;`Scroll through to discover tasty recipes, and embark on a journey
//             of flavor. Whether you`&apos;`re a seasoned chef or a kitchen beginner,
//             there&apos;s something delightful waiting for you. Enjoy the
//             experience!`&quot;`
//           </p>
//         </div>
//       </div>

//       <div className="flex flex-col pl-8 pr-2">
//         <h1 className="text-4xl pl-4 py-10 pt-20 md:pt-35 text-black font-bold">
//           Meal Categories
//         </h1>
//         <div className="flex flex-col pb-5 items-center gap-8 md:flex-row md:justify-evenly md:gap-8">
//           <div className="w-full md:w-1/3 lg:w-3/4 max-w-screen-md">
//             <Foodcard className="max-h-24" />
//           </div>
//           <div className="w-full md:w-1/3 lg:w-3/4 max-w-screen-md">
//             <Juicecard className="max-h-24" />
//           </div>
//           <div className="w-full md:w-1/3 lg:w-3/4 max-w-screen-md">
//             <Dessertcard className="max-h-24" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Diabetes;

"use client";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import FoodRecipesTabs from "@/components/tabs/food-recipes";
import JuiceRecipesTabs from "@/components/tabs/juice-recipes";
import SnackRecipesTabs from "@/components/tabs/snack-recipes";
const Diabetes = () => {
  return (
    <div>
        <div className="flex items-center mt-10 flex-col pr-10 md:pr-0">
          <h1 className="text-lg md:text-4xl font-semibold text-center mb-4">
          Diabetes Recipes.
          </h1>
          <p className="text-sm text-center pt-5 pl-8 md:pl-10 md:px-20">
          Scroll through to discover tasty recipes, and embark on a
            journey of flavor. Whether you&apos;re a seasoned chef or a
            kitchen beginner, there&apos;s something delightful waiting for
            you. Enjoy the experience!
          </p>
        </div>

      <div className="md:pl-4 md:pr-8 md:mt-8">
        <Tab.Group>
          <Tab.List className={"flex flex-row justify-between px-10 md:px-20 py-16 pr-10 md:pr-0"}>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? "bg-black text-white rounded-full px-6 py-2 text-sm md:text-lg"
                      : "bg-white text-black rounded px-4 py-2 md:font-bold text-sm md:text-lg"
                  }
                >
                  Food
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? "bg-black text-white rounded-full px-6 py-2 text-sm md:text-lg"
                      : "bg-white text-black rounded px-4 py-2 md:font-bold text-sm md:text-lg"
                  }
                >
                  Juice
                </button>
              )}
            </Tab>{" "}
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? "bg-black text-white rounded-full px-6 py-2 text-sm md:text-lg"
                      : "bg-white text-black rounded px-4 py-2 md:font-bold text-sm md:text-lg"
                  }
                >
                  Snacks
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div>
                {" "}
                <FoodRecipesTabs />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div>
                {" "}
                <JuiceRecipesTabs />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div>
                {" "}
                <SnackRecipesTabs />
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Diabetes;
