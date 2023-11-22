"use client";
import Link from 'next/link';
import Image from 'next/image';

const Dessertcard = () => {
  return (
    <Link href="/dessert">
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-110">
      <Image src="/dessert.jpg" alt="Snacks" width= {100} height={100}className="w-full h-32 object-cover" />
      <div className="p-4 bg-[#E7F9FD] rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-black">Snacks</h2>
        
        <button className="block mt-2 bg-white hover:bg-[#d6e8cc] text-black font-semibold text-center px-4 py-2 rounded-full cursor-pointer">
          View all recipes
          </button>
        
      </div>
    </div>
    </Link>
  );
};

export default Dessertcard;