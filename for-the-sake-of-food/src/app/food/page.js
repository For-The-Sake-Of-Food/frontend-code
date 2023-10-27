"use client";
import React from "react";
import Card from "@/components/Card";
import SignupForm from "@/components/SignupForm";

const cardData = [
  {
    image: "/hero-image.jpg",
    timestamp: "October 26, 2023",
    description: "Description for card 1.",
    link: "/food-recipes/food-recipe-1",
  },
  {
    image: "/hero-image.jpg",
    timestamp: "October 27, 2023",
    description: "Description for card 2.",
    link: "/food-recipes/food-recipe-2",
  },
  {
    image: "/hero-image.jpg",
    timestamp: "October 26, 2023",
    description: "Description for card 3.",
    link: "/food-recipes/food-recipe-3",
  },
  {
    image: "/hero-image.jpg",
    timestamp: "October 26, 2023",
    description: "Description for card 4.",
    link: "/food-recipes/food-recipe-4",
  },
  {
    image: "/hero-image.jpg",
    timestamp: "October 26, 2023",
    description: "Description for card 5.",
    link: "/food-recipes/food-recipe-5",
  },
  {
    image: "/hero-image.jpg",
    timestamp: "October 26, 2023",
    description: "Description for card 6.",
    link: "/food-recipes/food-recipe-6",
  },
];

const Home = () => {
  const columns = 3; // Number of columns
  const cardGroups = [];
  for (let i = 0; i < cardData.length; i += columns) {
    const cardGroup = cardData.slice(i, i + columns);
    cardGroups.push(cardGroup);
  }

  return (
    <div>
      {cardGroups.map((group, groupIndex) => (
        <div className="flex" key={groupIndex}>
          {group.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      ))}
      <div className="bg-gray-200">
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="flex justify-center">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
