"use client";
import Dessertcard from "@/components/Dessertcard";
import Foodcard from "@/components/Foodcard";
import Juicecard from "@/components/Juicecard";

const Highbloodpressure = () => {
  
  return (
    <div>
      <div className="relative rounded-lg overflow-hidden pl-4">
        <div className="px-4 md:px-6">
          <div className="relative">
            <img
              src="/highbp.jpg"
              alt="highbp image"
              className="w-full h-32 md:h-80 object-cover rounded-lg"
            />
            <div className="h-full absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-65 rounded-lg" />
            <div className="absolute top-3/4 left-0 transform -translate-y-1/2 p-4 pl-8 text-[#1E1E1E] text-left">
              <h1 className="text-4xl font-bold">High Blood Pressure Recipes Hub!</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 items-center justify-center">
        <div className="text-center">
          <h1 className="font-bold mb-2">
            <p className="text-lg">
              Explore{" "}
              <span className="text-orange-500">
                Delicious and Nutritious recipes tailored for YOU!
              </span>
            </p>
          </h1>
          <p className="text-lg pr-20 pl-20">
            "Scroll through to discover tasty recipes, and embark on a journey
            of flavor. Whether you're a seasoned chef or a kitchen beginner,
            there's something delightful waiting for you. Enjoy the experience!"
          </p>
        </div>
      </div>

      <div className="flex flex-col pl-8 pr-2">
        <h1 className="text-4xl pl-4 py-10 pt-20 md:pt-35 text-black font-bold">
          Meal Categories
        </h1>
        <div className="flex flex-col pb-5 items-center gap-8 md:flex-row md:justify-evenly md:gap-8">
          <div className="w-full md:w-1/3 lg:w-3/4 max-w-screen-md">
            <Foodcard className="max-h-24" />
          </div>
          <div className="w-full md:w-1/3 lg:w-3/4 max-w-screen-md">
            <Juicecard className="max-h-24" />
          </div>
          <div className="w-full md:w-1/3 lg:w-3/4 max-w-screen-md">
            <Dessertcard className="max-h-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highbloodpressure;
