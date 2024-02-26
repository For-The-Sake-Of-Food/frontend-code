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
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const Card = ({
  image,
  id,
  category,
  title,
  onFavoriteChange,
}) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const { user } = useUser();
  const pathName = usePathname();
  
 
  if (!user) {
    return null;
  }

  const toggleFavorite = async () => {
    // Toggle the local state
    setIsFavorited(!isFavorited);

    // Make a request to the API to add or remove the recipe from favorites
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/Favorites`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user.id,
            recipesId: id,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update favorites");
      }

      // Notify parent component about the change in favorites
      onFavoriteChange(id, !isFavorited);
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };

  return (
    <div className="max-w-lg rounded-lg overflow-hidden bg-[#E7F9FD] shadow-lg m-4">
      <div style={{ position: "relative" , width: "100%", height: "200px" }}>
        <Image
          layout="fill"
          objectFit="cover"
          src={image}
          alt="Card Image"
          className="rounded-t-lg"
        />
      </div>
      <div className="px-6 py-2 md:py-4">
        <p className="text-black pl-0 pb-0 md:pb-2 text-sm md:text-lg">{title}</p>
      </div>
      <div className="flex justify-between px-6 py-4">
        <Link
          className="bg-black hover:bg-[#858684] text-white text-sm md:text-base py-2 px-3 md:px-4 rounded-full mb-4"
          href={`/${category}/${id}`}
        >
          Read More
        </Link>
        {pathName == "/favorites" ? null : (
          <button
            className="bg-transparent p-2 rounded-full mb-4 relative"
            onClick={() => toggleFavorite()}
          >
            <Image
              src={isFavorited ? "/black-heart.png" : "/white-heart.png"}
              alt={isFavorited ? "Unfavorite" : "Favorite"}
              className="object-contain h-10 w-10"
              fill
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
