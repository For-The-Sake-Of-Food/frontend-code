"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const Groceryshopping = () => {
  const [grocery, setGrocery] = useState([]);
  const [newGrocery, setNewGrocery] = useState({});

  async function handleAddGrocery() {
    setGrocery([newGrocery, ...grocery]);
  }

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
            />
            <button className="-ml-8" onClick={handleAddGrocery}>
              <FaPlus />
            </button>
          </div>
          <div className="space-y-4 pt-4">
            {grocery?.map((item, index) => {
              <div key={index} className="flex flex-row space-x-2 items-center">
                <input
                  type="checkbox"
                  className="rounded-none p-8 "
                  name={item?.name}
                  value={item?.name}
                />
                <label htmlFor={item?.name} className="text-gray-500">
                  {item?.name}
                </label>
              </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groceryshopping;
