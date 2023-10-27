"use client";
import Link from 'next/link';
import Image from 'next/image';

const Foodcard = () => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <Image src="/hero-image.jpg" alt="Food" width= {100} height={100}className="w-full h-32 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800">Food</h2>
        <Link href="/food">
          <button className="block mt-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold text-center px-4 py-2 rounded cursor-pointer">
            View all recipes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Foodcard;
