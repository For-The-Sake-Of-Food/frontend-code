
// MyContext.js
"use client";
import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const useRecipes = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("Please use Context Provider in parent component");
  }

  return context;
};

const MyContextProvider = ({ children }) => {
  const [foodData, setFoodData] = useState([]);
  const [drinksData, setDrinksData] = useState([]);
  const [dessertData, setDessertData] = useState([]);
  return (
    <MyContext.Provider
      value={{
        foodData,
        setFoodData,
        drinksData,
        setDrinksData,
        dessertData,
        setDessertData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
