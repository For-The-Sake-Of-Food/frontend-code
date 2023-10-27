"use client";
import React from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SignupForm from "@/components/SignupForm";
import Link from "next/link";
const MyPage = () => {
  return (
    <div className="pt-20 relative">
      {/* Large font size title */}
      <h1 className="text-3xl text-black text-center">Food Recipe 5</h1>

      {/* Small font size description */}
      <p className="text-sm text-black text-center">
        Written by me on 27/10/2023
      </p>

      <div className="flex items-center justify-center mt-4 ">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/hero-image.jpg"
            alt="Company Logo"
            width={400} // Adjust the image width as needed
            height={50} // Adjust the image height as needed
          />
        </div>
      </div>

      <div className="w-1/2 mx-auto">
        {/* Description of the image */}
        <p>
          It all begins with an idea. Maybe you want to launch a business. Maybe
          you want to turn a hobby into something more. Or maybe you have a
          creative project to share with the world. Whatever it is, the way you
          tell your story online can make all the difference. Don’t worry about
          sounding professional. Sound like you. There are over 1.5 billion
          websites out there, but your story is what’s going to separate this
          one from the rest. If you read the words back and don’t hear your own
          voice in your head, that’s a good sign you still have more work to do.
        </p>

        {/* Thin black horizontal line */}
        <hr className="w-full border-t border-black my-4" />

        {/* Title for Ingredients */}
        <h2 className="text-2xl">Ingredients</h2>

        {/* List of Ingredients */}
        <ul className="list-disc pl-10">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
          <li>Ingredient 4</li>
          <li>Ingredient 5</li>
        </ul>

        {/* Another thin black horizontal line */}
        <hr className="w-full border-t border-black my-4" />

        {/* Description below the line */}
        <p>
          Be clear, be confident and don’t overthink it. The beauty of your
          story is that it’s going to continue to evolve and your site can
          evolve with it. Your goal should be to make it feel right for right
          now. Later will take care of itself. It always does. It all begins
          with an idea. Maybe you want to launch a business. Maybe you want to
          turn a hobby into something more. Or maybe you have a creative project
          to share with the world. Whatever it is, the way you tell your story
          online can make all the difference.
        </p>
      </div>

      {/* Previous and Next buttons */}
      <div className="flex justify-between mt-4">
        <Link href="/dessert-recipes/dessert-recipe-4">
        <button className="flex items-center">
          <FaArrowLeft className="mr-2" />
          Previous
        </button>
        </Link>
        <Link href="/dessert-recipes/dessert-recipe-6">
        <button className="flex items-center">
          Next
          <FaArrowRight className="ml-2" />
        </button>
        </Link>
      </div>

      {/* SignupForm with full-width background */}
      <div className="bg-gray-200">
        <SignupForm />
      </div>
    </div>
  );
};

export default MyPage;
