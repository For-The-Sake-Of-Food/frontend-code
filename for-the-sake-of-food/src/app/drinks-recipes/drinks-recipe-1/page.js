"use client";
import React from "react";
import Image from "next/image";
import SignupForm from "@/components/SignupForm";
import Link from "next/link";

const MyPage = () => {
  return (
    <div className="pt-20 relative">
      {/* Large font size title */}
      <h1 className="text-3xl font-bold text-black text-center">
        Juice
      </h1>

      {/* Small font size description */}
      {/* <p className="text-sm text-black text-center">
        Written by me on 27/10/2023
      </p> */}

      <div className="flex items-center justify-center mt-4 ">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/drinks.jpg"
            alt="juice"
            width={300} // Adjust the image width as needed
            height={5} // Adjust the image height as needed
          />
        </div>
      </div>

      <div className="w-1/2 mx-auto">
        <div className="flex items-center mt-4">
          <div className="ml-20 px-6 py-4 flex items-center">
            <Image src="/timer.png" alt="timer" width={18} height={18} />
          </div>
          <div>
            <p className="text-xs font-bold text-black">COOK TIME </p>
            <p className="text-xs text-black ">30 minutes</p>
          </div>

          <div className="ml-4 flex items-center">
            <div className="ml-30 mr-1 px-6 py-4">
              <Image
                src="/knife-and-fork.png"
                alt="knife and fork"
                width={18}
                height={18}
              />
            </div>
            <div>
              <p className="text-xs font-bold text-black">RECOMMENDED FOR </p>
              <p className="text-xs text-black">Diabetes</p>
            </div>
          </div>
        </div>

        {/* Thin black horizontal line */}
        <hr className="w-full border-t border-black my-12" />

        {/* Title for Ingredients */}
        <h2 className="text-2xl font-bold">Ingredients</h2>

        {/* List of Ingredients */}
        <ol className="list-disc pl-10">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
          <li>Ingredient 4</li>
          <li>Ingredient 5</li>
        </ol>

        {/* Another thin black horizontal line */}
        <hr className="w-full border-t border-black my-12" />

        {/* Description below the line */}
        <p>
        <h2 className="text-2xl font-bold">Directions</h2>
        Be clear, be confident and dont overthink it. The beauty of your
          story is that its going to continue to evolve and your site can
          evolve with it. Your goal should be to make it feel right for right
          now. Later will take care of itself. It always does. It all begins
          with an idea. Maybe you want to launch a business. Maybe you want to
          turn a hobby into something more. Or maybe you have a creative project
          to share with the world. Whatever it is the way you tell your story
          online can make all the difference.
        </p>
      </div>

      {/* Previous and Next buttons */}
      <div className="flex justify-between mt-20 mb-20">
      <Link href="/food-recipes/food-recipe-6">
        <button className="flex items-center pl-20 pr-2">
          <Image src="/left-arrow.png" alt="Previous" width={20} height={10} className="arrow-icon mr-2" />
          <span className="text-lg font-bold">Previous</span>
        </button>
      </Link>
      <Link href="/drinks-recipes/drinks-recipe-2">
        <button className="flex items-center pl-2 pr-20">
        <span className="text-lg font-bold">Next</span>
          <Image src="/right-arrow.png" alt="Next" width={20} height={10} className="arrow-icon ml-2" />
        </button>
      </Link>
      <style jsx>{`
        .arrow-icon {
          max-width: 20px; /* Set the maximum width of the arrow icon */
          height: auto; /* Maintain aspect ratio */
        }
      `}</style>
    </div>

      {/* SignupForm with full-width background */}
      <div className="bg-gray-200">
        <SignupForm />
      </div>
    </div>
  );
};

export default MyPage;
