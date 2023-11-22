"use client";
import Image from "next/image";
import Link from "next/link";

const Card = ({ image, timestamp, description, link, id, category, title }) => {
  return (
    <div className="max-w-lg rounded-lg overflow-hidden bg-[#E7F9FD] shadow-lg m-4">
      <div style={{ position: "relative", width: "100%", height: "500px" }}>
        <Image
          layout="fill"
          objectFit="cover"
          src={image}
          alt="Card Image"
          className="rounded-t-lg"
        />
      </div>
      <div className="px-6 py-4">
        {/* <div className="font-bold text-xl mb-2">{timestamp}</div> */}
        <p className="text-gray-700 font-bold text-xl">{title}</p>
      </div>
      <div className="px-6 py-4">
        <Link href={`/${category}/${id}`}>
          <button className="bg-black hover:bg-[#858684] text-white font-bold py-2 px-4 rounded-full">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
