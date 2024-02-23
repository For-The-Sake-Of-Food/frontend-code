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
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const Groceryshopping = () => {
  const [grocery, setGrocery] = useState([]);
  const [newGrocery, setNewGrocery] = useState({});

  async function handleAddGrocery() {
    setGrocery([newGrocery, ...grocery]);
  }

  return (
    <div className="relative">
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
        }}
      ></div>
      <div className="pt-20 flex flex-col min-h-[90vh]">
        <div>
          <h1 className="text-center text-black text-lg md:text-4xl font-semibold">
            Grocery Shopping
          </h1>
          <p className="text-sm text-center pt-5 pl-8 md:px-20 ">
          Welcome to our Grocery Shopping Page! Here, you can easily manage your shopping list. Simply add items you need, and check them off as you go. Happy shopping!
          </p>
        </div>
        <div className="px-4 md:px-28 pt-16">
          <div className="relative pl-5">
            <input
              className="border-b w-full md:w-120 text-xs md:text-base focus:outline-none p-3"
              placeholder="Add New"
              onChange={(e) => setNewGrocery({ name: e.target.value })}
            />
            <button className="-ml-8" onClick={handleAddGrocery}>
              <FaPlus />
            </button>
          </div>

          <div className="space-y-4 pt-4">
            {grocery.map(
              (
                item,
                index // Fixed the mapping issue here
              ) => (
                <div
                  key={index}
                  className="flex flex-row space-x-2 items-center"
                >
                  <input
                    type="checkbox"
                    className="rounded-none p-8"
                    name={item?.name}
                    value={item?.name}
                  />
                  <label htmlFor={item?.name} className="text-gray-500">
                    {item?.name}
                  </label>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groceryshopping;
