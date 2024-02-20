
'use client'
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";


const Groceryshopping = () => {
  const [grocery, setGrocery] = useState([])
  const [newGrocery, setNewGrocery] = useState({})

  async function handleAddGrocery() {
    setGrocery([newGrocery, ...grocery])
  }

  return (
    <div className="pt-20 flex justify-center flex-col ">
      <div>
        <h1 className="text-center text-black text-4xl font-semibold">
          Grocery Shopping
        </h1>
      </div>
      <div className="relative w-[500px]">
        <input className="border-b w-full focus:outline-none p-3 " placeholder="Add New" onChange={(e) => setNewGrocery({ name: e.target.value })} />
        <button className="-ml-8" onClick={handleAddGrocery}><FaPlus /></button>
      </div>
      <div>
        {grocery?.map((item, index) => {
          return <div className="flex flex-row space-x-2 items-center">
            <input type="checkbox" className="rounded-none p-8 " name={item?.name} value={item?.name} />
            <label for={item?.name} className="text-gray-500">{item?.name}</label></div>
        })}
      </div>
    </div>
  );
};

export default Groceryshopping;
