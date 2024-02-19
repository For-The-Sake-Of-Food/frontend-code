"use client";
import Dessertcard from "@/components/Dessertcard";
import Foodcard from "@/components/Foodcard";
import Juicecard from "@/components/Juicecard";
import Food from "@/app/food/page";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";

const Welcome = () => {
  const { user } = useUser();
  return (
    <div>
      <div className="relative rounded-lg overflow-hidden pl-4">
        <div className="px-4 md:px-6">
          <div className="relative">
            <img
              src="/heroimage2.jpg"
              alt="hero image"
              className="w-full h-32 md:h-80 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-black to-transparent opacity-40 rounded-lg" />
            <div className="absolute top-3/4 left-0 transform -translate-y-1/2 p-4 pl-8 text-white text-left">
              {user ? (
                <p className="text-5xl font-bold mb-2">
                  Hello, {user.fullName}.
                </p>
              ) : (
                <p className="text-5xl font-bold mb-2">
                  Hey There!
                </p>
              )}
              <p className="text-lg">
                Welcome to{" "}
                <span className="text-orange-500">For the Sake of Food!</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col pl-4">
        <h1 className="text-5xl pl-4 py-10 pt-20 md:pt-35 text-black font-bold">
          Meal Categories
        </h1>
        <div className="flex flex-col pb-5 items-center gap-8 md:flex-row md:justify-evenly md:gap-8">
          <div className="w-full md:w-1/3 lg:w-3/4 max-w-screen-md max-h-55">
            <Foodcard />
          </div>
          <div className="w-full md:w-1/3 lg:w-3/4 max-w-screen-md">
            <Juicecard />
          </div>
          <div className="w-full md:w-1/3 lg:w-3/4 max-w-screen-md">
            <Dessertcard />
          </div>
        </div>
      </div> */}

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

      {/* <div className="flex flex-col md:flex-row items-center ">
        <div className="w-full md:w-1/2 p-6 md:order-1">
          <Image
            src="/user.jpg"
            alt="user image"
            width={700}
            height={500}
            className="rounded-md"
          />
        </div>
        <div className="w-full pl-10 md:w-1/2 p-4 md:order-2">
          <h1 className="text-2xl pl-10 pr-5 font-bold relative">
            <span className="text-black">Why </span>
            <span className="text-[#3A8700] font-bold">Our Recipes</span>
            <span className="text-black"> Are The Best</span>
            <span className="absolute top-[-2.5rem] left-[-3rem] text-gray-300 text-9xl ml-4">
              “
            </span>
          </h1>
          <p className="pl-10 pr-5">
            At 65 its become more important than ever to make healthy food
            choices. This app has opened a world of delicious nutritious meals
            that keep me feeling vibrant and energized. Its not just an app its
            a companion on my journey to a healthier happier life. The recipes
            are easy to follow and I have never had so much fun experimenting in
            the kitchen. Thank you for making healthy eating a joy!
          </p>
          <p className="pl-10 pr-5">~Carol Lynn</p>
        </div>
      </div> */}

      <div className="mt-5">
        <Food />
      </div>
    </div>
  );
};

export default Welcome;
// "use-client";
// const Home=()=>{
//   return(
//     <h1 className="text-black pt-40 mt-40 text-center justify-center">this is home</h1>
//   )
// }
// export default Home;
