// "use client";
// import { useState } from "react";
// import { FaPlus } from "react-icons/fa6";

// const Groceryshopping = () => {
//   const [grocery, setGrocery] = useState([]);
//   const [newGrocery, setNewGrocery] = useState({});

//   async function handleAddGrocery() {
//     setGrocery([newGrocery, ...grocery]);
//   }

//   return (
//     <div
//       // style={{
//       //   backgroundImage: "url('/Bground.JPG')",
//       //   backgroundSize: "fit",
//       // }}
//      className=" relative z-10 absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url('/Bground2.JPG')` }}>

//       <div className="pt-20 flex  flex-col min-h-[90vh]">
//         <div>
//           <h1 className="text-center text-black text-lg md:text-4xl md:font-semibold">
//             Grocery Shopping
//           </h1>
//         </div>
//         <div className="px-28 pt-16">
//           <div className="relative w-[500px]">
//             <input
//               className="border-b w-full focus:outline-none p-3 "
//               placeholder="Add New"
//               onChange={(e) => setNewGrocery({ name: e.target.value })}
//             />
//             <button className="-ml-8" onClick={handleAddGrocery}>
//               <FaPlus />
//             </button>
//           </div>
//           <div className="space-y-4 pt-4">
//             {grocery?.map((item, index) => {
//               <div key={index} className="flex flex-row space-x-2 items-center">
//                 <input
//                   type="checkbox"
//                   className="rounded-none p-8 "
//                   name={item?.name}
//                   value={item?.name}
//                 />
//                 <label htmlFor={item?.name} className="text-gray-500">
//                   {item?.name}
//                 </label>
//               </div>;
//             })}
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default Groceryshopping;

"use client";
import { useState, useEffect } from "react";
import Footer from "Footer";
import { FaPlus } from "react-icons/fa6";
import { useUser } from "@clerk/nextjs";

const Groceryshopping = () => {
  const [grocery, setGrocery] = useState([]);
  const [newGrocery, setNewGrocery] = useState({ name: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [markedForDeletion, setMarkedForDeletion] = useState(null);
  const { user } = useUser();
  // console.log(userId);

  // Fetch groceries on component mount
  useEffect(() => {
    const fetchGroceries = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/groceries`
        );
        const data = await response.json();
        setGrocery(data);
      } catch (error) {
        console.error("Error fetching groceries:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGroceries();
  }, []);

  if(!user) {
    return null
  }

  // Add a new grocery item
  const handleAddGrocery = async () => {
    if (newGrocery.name.trim() === "") return; // Prevent empty items
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/groceries`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({...newGrocery, userId:user.id}),
        }
      );

      if (response.ok) {
        const newGroceryItem = await response.json();
        console.log(newGroceryItem);
        const updatedGroceryItem = {
          id: newGroceryItem.id,
          name: newGroceryItem.name,
          checked: false, // Start unchecked by default
        };
        setGrocery([updatedGroceryItem, ...grocery]);
        setNewGrocery({ name: "" });
      } else {
        throw new Error("Error adding item");
      }
    } catch (error) {
      setError("Error adding item. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  // // Update checked status
  // const handleCheckboxChange = async (itemId, newCheckedValue) => {
  //   console.log(handleCheckboxChange);
  //   const response = await fetch(
  //     `http://localhost:5000/api/groceries/${itemId}`,
  //     {
  //       method: "PATCH",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ checked: newCheckedValue }),
  //     }
  //   );
  //   if (response.ok) {
  //     if (newCheckedValue) {
  //       // Remove checked items from display
  //       setGrocery(grocery.filter((item) => item.id !== itemId));
  //     } else {
  //       const updatedGroceryItem = await response.json();
  //       setGrocery(
  //         grocery.map((item) =>
  //           item.id === itemId ? updatedGroceryItem : item
  //         )
  //       );
  //     }
  //   } else {
  //     console.error("Error updating item:", response.status);
  //   }
  // };
  const handleCheckboxChange = async (itemId, newCheckedValue) => {
    console.log(handleCheckboxChange);
    setMarkedForDeletion(newCheckedValue ? itemId : null);
    if (newCheckedValue) {
      // If the checkbox is checked, send a DELETE request to delete the item
      const deleteResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/groceries/${itemId}`,
        {
          method: "DELETE",
        }
      );
      if (deleteResponse.ok) {
        setGrocery(grocery.filter((item) => item.id !== itemId));
      } else {
        console.error("Error deleting item:", deleteResponse.status);
      }
    } else {
      // If the checkbox is unchecked, send a PATCH request to update the checked status
      const patchResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/groceries/${itemId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ checked: newCheckedValue }),
        }
      );
      if (patchResponse.ok) {
        const updatedGroceryItem = await patchResponse.json();
        setGrocery(
          grocery.map((item) =>
            item.id === itemId ? updatedGroceryItem : item
          )
        );
      } else {
        console.error("Error updating item:", patchResponse.status);
      }
    }
  };
  // Delete an item
  const handleDeleteGrocery = async (itemId) => {
    console.log(handleDeleteGrocery);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/groceries/${itemId}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      setGrocery(grocery.filter((item) => item.id !== itemId));
    } else {
      console.error("Error deleting item:", response.status);
    }
  };

  return (
    <div className="relative overflow-x-hidden">
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: -1,
          backgroundImage: "url('/Back-ground.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100%",
        }}
      ></div>
      <div className="pt-20 flex flex-col min-h-[90vh]">
        <div>
          <h1 className="text-center text-black text-lg md:text-4xl font-semibold">
            Grocery Shopping.
          </h1>
          <p className="text-sm text-center pt-5 pl-10 pr-5 md:px-20 ">
            Welcome to our Grocery Shopping Page! Here, you can easily manage
            your shopping list. Simply add items you need, and check them off as
            you go. Happy shopping!
          </p>
        </div>
        <div className="px-4 md:px-28 pt-16">
          <div className="relative pl-10 md:pl-5 pr-8 md:pr-0">
            <input
              className="border-b w-full md:w-120 text-xs md:text-base focus:outline-none p-3"
              placeholder="Add New"
              onChange={(e) => setNewGrocery({ name: e.target.value })}
              value={newGrocery.name} // Controlled input value
            />
            <button type="button" className="-ml-8" onClick={handleAddGrocery}>
              <FaPlus />
            </button>
            {/* Loading and Error Messages */}
            {isLoading && <p className="pt-4 text-sm">Loading groceries...</p>}
            {error && <p className="pt-4 text-red-500">{error}</p>}
            {/* {newGrocery.name && (
              <div className="flex flex-row space-x-2 items-center">
                <input
                  type="checkbox"
                  className="rounded-none p-8 "
                  name={newGrocery.name}
                  checked={false} // Newly added items are unchecked by default
                  onChange={() => {}}
                />
                <label htmlFor={newGrocery.name} className="text-gray-500">
                  {newGrocery.name}
                </label>
              </div>
            )} */}
          </div>

          <div className="space-y-4 pt-4">
            {grocery.map((item) => (
              <div
                key={item.id}
                className="flex flex-row space-x-2 items-center"
              >
                <input
                  type="checkbox"
                  className="rounded-none p-8 "
                  name={item.name}
                  checked={item.checked}
                  onChange={() => handleCheckboxChange(item.id, !item.checked)}
                />
                <label htmlFor={item?.name} className="text-gray-500">
                  {markedForDeletion === item.id && (
                    <span className="ml-2 text-red-500">&#10003;</span>
                  )}
                  {item.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#E7F9FD] w-full">
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="w-full">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groceryshopping;
