"use client";
import Link from 'next/link';
import Image from 'next/image';

const Dessertcard = () => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <Image src="/dessert-category.jpg" alt="Dessert" width= {100} height={100}className="w-full h-32 object-cover" />
      <div className="p-4 bg-[#E7F9FD] rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-black">Dessert</h2>
        <Link href="/dessert">
        <button className="block mt-2 bg-white hover:bg-[#a0e8f7] text-black font-semibold text-center px-4 py-2 rounded-full cursor-pointer">
          View all recipes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dessertcard;