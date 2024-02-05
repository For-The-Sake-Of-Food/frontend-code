"use client";
import Dessertcard from "@/components/Dessertcard";
import Foodcard from "@/components/Foodcard";
import Juicecard from "@/components/Juicecard";
import Food from "@/app/food/page";
import Image from "next/image";

const Welcome = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-0 pt-24 pb-5  px-4 md:px-6">
        <div className="my-auto text-md px-10 pl-4 bg-[#E7FAFE]">
          <h1 className="text-5xl py-10 text-black font-bold">
            Cook with food straight from the source
          </h1>
          <div className="text-black pb-4 md:pb-5 lg:pb-20 xl:pb-40">
            <p>Welcome to &lsquo;For the Sake of Food&rsquo;</p>
            <p>
              Are you ready to embark on a delicious journey towards a healthier
              and more vibrant you, with a delightful Ugandan twist? Look no
              further! Our &lsquo;For the Sake of Food&rsquo; Ugandan-inspired
              recipes are here to make nutrition both effortless and enjoyable.
            </p>
            <p>
              Join us in savoring the rich flavors of fresh, wholesome Ugandan
              ingredients and learn how to make nutrition a delightful part of
              your daily routine. &lsquo;For the Sake of Food&rsquo; is more
              than an app &lsquo; it&apos;s a commitment to your well-being, a
              community of food lovers, and your personal guide to a healthier
              and happier life with a Ugandan flair.
            </p>
          </div>
        </div>
        <div className="md:hidden">
          <img
            src="/hero-image.jpg"
            alt="hero image"
            className="w-full h-48 rounded-lg object-cover"
          />
        </div>
        <div className="hidden md:block bg-[url('/hero-image.jpg')] bg-cover w-full h-full rounded-lg" />
      </div>

      <div className="flex flex-col  items-center justify-center">
        <h1 className="text-5xl pl-5 py-10 pt-20 md:pt-35 text-black font-bold">
          Meal Categories
        </h1>
        <div className="flex flex-col pb-5 items-center gap-8 md:flex-row md:justify-evenly md:gap-8">
          <div className="w-full md:w-1/3 lg:w-3/4 max-w-screen-md">
            <Foodcard />
          </div>
          <div className="w-full md:w-1/3 lg:w-3/4 max-w-screen-md">
            <Juicecard />
          </div>
          <div className="w-full md:w-1/3 lg:w-3/4 max-w-screen-md">
            <Dessertcard />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center ">
        <div className="w-full md:w-1/2 p-6 md:order-1">
          <Image
            src="/user.jpg"
            alt="user image"
            width={700}
            height={500}
            className="rounded-md" // Using rounded-md for slightly rounded corners
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
      </div>

      <div className="mt-5">
        <Food />
      </div>
    </div>
  );
};

export default Welcome;
