"use client";
import Link from 'next/link';
import Image from 'next/image';

const Juicecard = () => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <Image src="/drinks.jpg" alt="Juice" width= {300} height={200}className="w-full h-32 object-cover" />
      <div className="p-4 bg-[#E7F9FD] rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-black">Juice</h2>
        <Link href="/drinks">
        <button className="block mt-2 bg-white hover:bg-[#d6e8cc] text-black font-semibold text-center px-4 py-2 rounded-full cursor-pointer">
          View all recipes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Juicecard;