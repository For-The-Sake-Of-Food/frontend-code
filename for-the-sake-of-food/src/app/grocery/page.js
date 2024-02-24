"use client";
import { useState, useEffect } from "react";
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
        const response = await fetch("http://localhost:5000/api/groceries");
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

  // Add a new grocery item
  const handleAddGrocery = async () => {
    if (newGrocery.name.trim() === "") return; // Prevent empty items
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/groceries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newGrocery,user),
      });

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
        `http://localhost:5000/api/groceries/${itemId}`,
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
        `http://localhost:5000/api/groceries/${itemId}`,
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
      `http://localhost:5000/api/groceries/${itemId}`,
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
    <div
      style={{
        backgroundImage: "url('/cloudy background.JPG')",
        backgroundSize: "cover",
      }}
    >
      <div className="pt-20 flex  flex-col min-h-[90vh]">
        <div>
          <h1 className="!text-center text-black text-4xl font-semibold">
            Grocery Shopping
          </h1>
        </div>
        <div className="px-28 pt-16">
          <div className="relative w-[500px]">
            <input
              className="border-b w-full focus:outline-none p-3 "
              placeholder="Add New"
              onChange={(e) => setNewGrocery({ name: e.target.value })}
              value={newGrocery.name} // Controlled input value
            />
            <button type="button" className="-ml-8" onClick={handleAddGrocery}>
              <FaPlus />
            </button>
            {/* Loading and Error Messages */}
            {isLoading && <p className="pt-4">Loading groceries...</p>}
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
    </div>
  );
};

export default Groceryshopping;
