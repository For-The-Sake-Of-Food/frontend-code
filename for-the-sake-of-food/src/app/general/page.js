"use client";
import Dessertcard from "@/components/Dessertcard";
import Foodcard from "@/components/Foodcard";
import Juicecard from "@/components/Juicecard";
import Image from "next/image";
const General = () => {
  
  return (
    <div>
      <div className="relative rounded-lg overflow-hidden pl-4">
        <div className="px-4 md:px-6">
          <div className="relative">
            <Image
              src="/food3.jpg"
              alt="general image"
              className="w-full h-32 md:h-80 object-cover rounded-lg"
            />
            <div className="h-full absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-65 rounded-lg" />
            <div className="absolute top-3/4 left-0 transform -translate-y-1/2 p-4 pl-8 text-[#1E1E1E] text-left">
              <h1 className="text-4xl font-bold">General Recipes Hub!</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 items-center justify-center">
        <div className="text-center">
          <h1 className="font-bold mb-2">
            <p className="text-lg">
              Explore{" "}
              <span className="text-orange-500">
                Delicious and Nutritious recipes tailored for YOU!
              </span>
            </p>
          </h1>
          <p className="text-lg pr-20 pl-20">
          `&quot;`Scroll through to discover tasty recipes, and embark on a journey
            of flavor. Whether you`&apos;`re a seasoned chef or a kitchen beginner,
            there`&apos;`s something delightful waiting for you. Enjoy the experience!`&quot;`
          </p>
        </div>
      </div>

      <div className="flex flex-col pl-8 pr-2">
        <h1 className="text-4xl pl-4 py-10 pt-20 md:pt-35 text-black font-bold">
          Meal Categories
        </h1>
        <div className="flex flex-col pb-5 items-center gap-8 md:flex-row md:justify-evenly md:gap-8">
          <div className="w-full md:w-1/3 lg:w-3/4 max-w-screen-md">
            <Foodcard className="max-h-24" />
          </div>
          <div className="w-full md:w-1/3 lg:w-3/4 max-w-screen-md">
            <Juicecard className="max-h-24" />
          </div>
          <div className="w-full md:w-1/3 lg:w-3/4 max-w-screen-md">
            <Dessertcard className="max-h-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;

// import React from 'react';

// function CategoryLink({ name, selected, onClick }) {
//   return (
//     <a
//       href="#"
//       onClick={onClick}
//       className={`text-black ${selected ? 'font-bold' : ''}`}
//     >
//       {name}
//     </a>
//   );
// }

// function GeneralRecipesPage() {
//   const [selectedCategory, setSelectedCategory] = React.useState('Food');

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-4">General Recipes</h1>
//       <p className="mb-8">Discover a variety of delicious recipes to satisfy your cravings and nourish your body.</p>
      
//       <div className="flex items-center justify-between mb-4">
//         <CategoryLink
//           name="Food"
//           selected={selectedCategory === 'Food'}
//           onClick={() => handleCategoryClick('Food')}
//         />
//         <CategoryLink
//           name="Juices"
//           selected={selectedCategory === 'Juices'}
//           onClick={() => handleCategoryClick('Juices')}
//         />
//         <CategoryLink
//           name="Snacks"
//           selected={selectedCategory === 'Snacks'}
//           onClick={() => handleCategoryClick('Snacks')}
//         />
//       </div>
      
//       <hr className="mb-4" />
      
//       {/* Content for selected category goes here */}
//     </div>
//   );
// }

// export default GeneralRecipesPage;

// import React from 'react';

// const GeneralRecipesPage = () => {
//   return (
//     <div className="flex flex-col items-center justify-center py-14 min-h-screen">
//       <h1 className="text-3xl font-bold py-2">General Recipes</h1>
//       <div className="py-4">
//         <p className="text-lg">Explore our collection of general recipes:</p>
//       </div>
//       <div className="flex gap-8">
//         <div className="flex flex-col items-center">
//           <p className="text-lg font-bold">Food</p>
//           <div className="border-b-2 w-10"></div>
//         </div>
//         <div className="flex flex-col items-center">
//           <p className="text-lg font-bold">Juices</p>
//           <div className="border-b-2 w-10"></div>
//         </div>
//         <div className="flex flex-col items-center">
//           <p className="text-lg font-bold">Snacks</p>
//           <div className="border-b-2 w-10"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GeneralRecipesPage;

// import React from 'react';
// import Dessertcard from "@/app/dessert/page";
// import Foodcard from "@/app/food/page";
// import Juicecard from "@/app/drinks/page";

// const GeneralRecipesPage = ({ Foodcard, Juicecard, Dessertcard }) => {
//   return (
//     <div className="flex flex-col items-center justify-center py-14 min-h-screen">
//       <h1 className="text-3xl font-bold py-2">General Recipes</h1>
//       <div className="py-4">
//         <p className="text-lg">Explore our collection of general recipes:</p>
//       </div>
//       <div className="flex gap-8">
//         <div className="flex flex-col items-center">
//           <p className="text-lg font-bold">Food</p>
//           <div className="border-b-2 w-10"></div>
//           {Foodcard?.map((item, index) => (
//             <div key={index}>
//               <p>{item.title}</p>
//               {/* Add more details here */}
//             </div>
//           ))}
//         </div>
//         <div className="flex flex-col items-center">
//           <p className="text-lg font-bold">Juices</p>
//           <div className="border-b-2 w-10"></div>
//           {Juicecard?.map((item, index) => (
//             <div key={index}>
//               <p>{item.title}</p>
//               {/* Add more details here */}
//             </div>
//           ))}
//         </div>
//         <div className="flex flex-col items-center">
//           <p className="text-lg font-bold">Snacks</p>
//           <div className="border-b-2 w-10"></div>
//           {Dessertcard?.map((item, index) => (
//             <div key={index}>
//               <p>{item.title}</p>
//               {/* Add more details here */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GeneralRecipesPage;


// import React from 'react';
// function MyTabs() {
//   return (
//     <Tab.Group>
//       <Tab.List>
//         <Tab>Tab 1</Tab>
//         <Tab>Tab 2</Tab>
//         <Tab>Tab 3</Tab>
//       </Tab.List>
//       <Tab.Panels>
//         <Tab.Panel>Content 1</Tab.Panel>
//         <Tab.Panel>Content 2</Tab.Panel>
//         <Tab.Panel>Content 3</Tab.Panel>
//       </Tab.Panels>
//     </Tab.Group>
//   )
// }

// "use client";
// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useHistory
// import Dessertcard from "@/app/dessert/page";
// import Foodcard from "@/app/food/page";
// import Juicecard from "@/app/drinks/page";

// const GeneralRecipesPage = ({ Foodcard, Juicecard, Dessertcard }) => {
//   const history = useNavigate(); // Initialize useHistory

//   // Function to navigate to the corresponding page
//   const navigateToPage = (page) => {
//     history.push(`/${page}`); // Navigate to the specified page
//   };

//   return (
//     <div className="flex flex-col items-center justify-center py-14 min-h-screen">
//       <h1 className="text-3xl font-bold py-2">General Recipes</h1>
//       <div className="py-4">
//         <p className="text-lg">Explore our collection of general recipes:</p>
//       </div>
//       <div className="flex gap-8">
//         <div className="flex flex-col items-center" onClick={() => navigateToPage('food')}>
//           <p className="text-lg font-bold">Food</p>
//           <div className="border-b-2 w-10"></div>
//           {Foodcard?.map((item, index) => (
//             <div key={index}>
//               <p>{item.title}</p>
//               {/* Add more details here */}
//             </div>
//           ))}
//         </div>
//         <div className="flex flex-col items-center" onClick={() => navigateToPage('drinks')}>
//           <p className="text-lg font-bold">Juices</p>
//           <div className="border-b-2 w-10"></div>
//           {Juicecard?.map((item, index) => (
//             <div key={index}>
//               <p>{item.title}</p>
//               {/* Add more details here */}
//             </div>
//           ))}
//         </div>
//         <div className="flex flex-col items-center" onClick={() => navigateToPage('dessert')}>
//           <p className="text-lg font-bold">Snacks</p>
//           <div className="border-b-2 w-10"></div>
//           {Dessertcard?.map((item, index) => (
//             <div key={index}>
//               <p>{item.title}</p>
//               {/* Add more details here */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GeneralRecipesPage;

// import React, { useState } from 'react';

// const GeneralRecipesPage = ({ Foodcard, Juicecard, Dessertcard }) => {
//   const [activeSection, setActiveSection] = useState(null);

//   const navigateToPage = (section) => {
//     setActiveSection(section);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center py-14 min-h-screen">
//       <h1 className="text-3xl font-bold py-2">General Recipes</h1>
//       <div className="py-4">
//         <p className="text-lg">Explore our collection of general recipes:</p>
//       </div>
//       <div className="flex gap-8">
//         <div
//           className={`flex flex-col items-center ${
//             activeSection === 'food' ? 'border-b-2 w-10' : ''
//           }`}
//           onClick={() => navigateToPage('food')}
//         >
//           <p className="text-lg font-bold">Food</p>
//           {Foodcard?.map((item, index) => (
//             <div key={index}>
//               <p>{item.title}</p>
//               {/* Add more details here */}
//             </div>
//           ))}
//         </div>
//         <div
//           className={`flex flex-col items-center ${
//             activeSection === 'juices' ? 'border-b-2 w-10' : ''
//           }`}
//           onClick={() => navigateToPage('juices')}
//         >
//           <p className="text-lg font-bold">Juices</p>
//           {Juicecard?.map((item, index) => (
//             <div key={index}>
//               <p>{item.title}</p>
//               {/* Add more details here */}
//             </div>
//           ))}
//         </div>
//         {/* Add other sections similarly */}
//       </div>
//     </div>
//   );
// };

// export default GeneralRecipesPage;

// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card"

// const GeneralRecipesPage = ({ Foodcard, Juicecard, Dessertcard }) => {
//   return(
// <section className="mx-8 flex justify-center items-center space-x-24"> {/* Center align and reduce space */}
//   <HoverCard>
//     <HoverCardTrigger>Hover</HoverCardTrigger>
//     <HoverCardContent>
//       The React Framework – created and maintained by @vercel.
//     </HoverCardContent>
//   </HoverCard>
//   <HoverCard>
//     <HoverCardTrigger>Hover</HoverCardTrigger>
//     <HoverCardContent>
//       The React Framework – created and maintained by @vercel.
//     </HoverCardContent>
//   </HoverCard>
//   <HoverCard>
//     <HoverCardTrigger>Hover</HoverCardTrigger>
//     <HoverCardContent>
//       The React Framework – created and maintained by @vercel.
//     </HoverCardContent>
//   </HoverCard>
// </section>

//   )
// };

// export default GeneralRecipesPage;

// "use client";
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'react-tabs';
// import DessertPage from "@/app/dessert/page";
// import FoodPage from "@/app/food/page";
// import JuicesPage from "@/app/drinks/page";

// const General = () => {
//   return (
//     <Router>
//       <Tabs className="mx-16 flex flex-row justify-between">
//         <TabList>
//           <Tab>Desserts</Tab>
//           <Tab>Food</Tab>
//           <Tab>Drinks</Tab>
//         </TabList>

//         <TabPanels>
//           <TabPanel>
//             <DessertPage />
//           </TabPanel>
//           <TabPanel>
//             <FoodPage />
//           </TabPanel>
//           <TabPanel>
//             <JuicesPage />
//           </TabPanel>
//         </TabPanels>
//       </Tabs>
//     </Router>
//   );
// };

// export default General;

// "use client";
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'react-tabs';
// import DessertPage from '@/app/dessert/page';
// import FoodPage from '@/app/food/page';
// import JuicesPage from '@/app/drinks/page';

// const General = () => {
//   return (
//     <Router>
//       <Tabs className="mx-16 flex flex-row justify-between">
//         <TabList>
//           <Tab>Desserts</Tab>
//           <Tab>Food</Tab>
//           <Tab>Drinks</Tab>
//         </TabList>

//         {/* <TabPanels>
//           <TabPanel>
//             <DessertPage />
//           </TabPanel>
//           <TabPanel>
//             <FoodPage />
//           </TabPanel>
//           <TabPanel>
//             <JuicesPage />
//           </TabPanel>
//         </TabPanels> */}
//       </Tabs>
//     </Router>
//   );
// };

// export default General;

// "use client";
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'react-tabs';
// import DessertPage from '@/app/dessert/page';
// import FoodPage from '@/app/food/page';
// import JuicesPage from '@/app/drinks/page';

// const General = () => {
//   // State to track the active tab index
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <Router>
//       <Tabs
//         className="mx-16 flex flex-row justify-between"
//         selectedIndex={activeTab} // Set the selected index based on state
//         onSelect={index => setActiveTab(index)} // Update state when tab is selected
//       >
//         <TabList>
//           <Tab>Desserts</Tab>
//           <Tab>Food</Tab>
//           <Tab>Drinks</Tab>
//         </TabList>

//         <TabPanels>
//           <TabPanel>
//             {activeTab === 0 && <DessertPage />} {/* Render DessertPage when activeTab is 0 */}
//           </TabPanel>
//           <TabPanel>
//             {activeTab === 1 && <FoodPage />} {/* Render FoodPage when activeTab is 1 */}
//           </TabPanel>
//           <TabPanel>
//             {activeTab === 2 && <JuicesPage />} {/* Render JuicesPage when activeTab is 2 */}
//           </TabPanel>
//         </TabPanels>
//       </Tabs>
//     </Router>
//   );
// };

// export default General;
