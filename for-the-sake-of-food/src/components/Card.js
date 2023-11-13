"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Card = ({ image, timestamp, description,link }) => {
  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg m-4">
      <Image width={300} height={200} src={image} alt="Card Image" className="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{timestamp}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <Link href={link}>
        <button className="bg-white hover:bg-[#d6e8cc] text-black font-bold py-2 px-4 rounded-full">
          Read More
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
