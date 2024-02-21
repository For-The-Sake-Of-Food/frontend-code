"use client";
import Link from "next/link";
import Image from "next/image";

const Diabetescard = () => {
  return (
    <Link href="/diabetes">
      <div className="w-full md:w-1/2 lg:w-11/12 max-w-screen-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-110">
        <Image
          src="/food3.jpg"
          alt="Food"
          width={500}
          height={300}
          className="w-full h-56 md:h-64 lg:h-72 object-cover"
        />

        <div className="p-4 text-center bg-[#E7F9FD] rounded-lg">
          <h2 className="text-2xl font-semibold text-black">
          Diabetes
          </h2>
          <div className="md:text-center">
          <button className=" block  mx-auto md:inline-block mt-2 bg-black hover:bg-[#858684] text-white  px-4 py-2 rounded-full cursor-pointer">
            View all recipes
          </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Diabetescard;
