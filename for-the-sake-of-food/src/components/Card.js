// "use client";
// import Image from "next/image";
// import Link from "next/link";

// const Card = ({
//   image,
//   timestamp,
//   description,
//   link,
//   id,
//   category,
//   title,
  
// }) => {
//   return (
//     <div className="max-w-lg rounded-lg overflow-hidden bg-[#E7F9FD] shadow-lg m-4">
//       <div style={{ position: "relative", width: "100%", height: "300px" }}>
//         <Image
//           layout="fill"
//           objectFit="cover"
//           src={image}
//           alt="Card Image"
//           className="rounded-t-lg"
//         />
//       </div>
//       <div className="px-6 py-4">
//         <p className="text-black font-bold  pb-2 text-xl">{title}</p>
//         {/* {recommended === null ? null : (
//           <p className="text-black text-sm">Recommended for: {recommended}</p>
//         )} */}
//       </div>
//       <div className="px-6 py-4">
//         <Link
//           className="bg-black hover:bg-[#858684] text-white font-bold py-2 px-4 rounded-full mb-4"
//           href={`/${category}/${id}`}
//         >
//           Read More
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Card;

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// const Card = ({
//   image,
//   timestamp,
//   description,
//   link,
//   id,
//   category,
//   title,
// }) => {
//   const [isFavorited, setIsFavorited] = useState(false);

//   const toggleFavorite = () => {
//     setIsFavorited(!isFavorited);
//   };

//   return (
//     <div className="max-w-lg rounded-lg overflow-hidden bg-[#E7F9FD] shadow-lg m-4">
//       <div style={{ position: "relative", width: "100%", height: "300px" }}>
//         <Image
//           layout="fill"
//           objectFit="cover"
//           src={image}
//           alt="Card Image"
//           className="rounded-t-lg"
//         />
//       </div>
//       <div className="px-6 py-4">
//         <p className="text-black font-bold  pb-2 text-xl">{title}</p>
//       </div>
//       <div className="flex justify-between px-6 py-4">
//         <button
//           className="bg-transparent p-2 rounded-full mb-4"
//           onClick={toggleFavorite}
//         >
//           <img
//             src={isFavorited ? '/black-heart.png' : '/white-heart.png'}
//             alt={isFavorited ? "Unfavorite" : "Favorite"}
//             className="h-8"
//           />
//         </button>
//         <Link
//           className="bg-black hover:bg-[#858684] text-white font-bold py-2 px-4 rounded-full mb-4"
//           href={`/${category}/${id}`}
//         >
//           Read More
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Card;

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Card = ({
  image,
  timestamp,
  description,
  link,
  id,
  category,
  title,
}) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="max-w-lg rounded-lg overflow-hidden bg-[#E7F9FD] shadow-lg m-4">
      <div style={{ position: "relative", width: "100%", height: "300px" }}>
        <Image
          layout="fill"
          objectFit="cover"
          src={image}
          alt="Card Image"
          className="rounded-t-lg"
        />
      </div>
      <div className="px-6 py-4">
        <p className="text-black font-bold  pb-2 text-xl">{title}</p>
      </div>
      <div className="flex justify-between px-6 py-4">
        <Link
          className="bg-black hover:bg-[#858684] text-white py-2 px-4 rounded-full mb-4"
          href={`/${category}/${id}`}
        >
          Read More
        </Link>
        <button
          className="bg-transparent p-2 rounded-full mb-4"
          onClick={toggleFavorite}
        >
          <img
            src={isFavorited ? '/black-heart.png' : '/white-heart.png'}
            alt={isFavorited ? "Unfavorite" : "Favorite"}
            className="h-8"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;





