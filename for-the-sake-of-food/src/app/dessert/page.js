"use client";
import React from 'react';
import Card from "@/components/Card";
import SignupForm from "@/components/SignupForm";

const cardData = [
  {
    image: '/dessert.jpg',
    timestamp: 'October 26, 2023',
    description: 'Description for card 1.',
    link: "/dessert-recipes/dessert-recipe-1",
  },
  {
    image: '/dessert.jpg',
    timestamp: 'October 27, 2023',
    description: 'Description for card 2.',
    link: "/dessert-recipes/dessert-recipe-2",
  },
  {
    image: '/dessert.jpg',
    timestamp: 'October 26, 2023',
    description: 'Description for card 3.',
    link: "/dessert-recipes/dessert-recipe-3",
  },
  {
    image: '/dessert.jpg',
    timestamp: 'October 26, 2023',
    description: 'Description for card 4.',
    link: "/dessert-recipes/dessert-recipe-4",
  },
  {
    image: '/dessert.jpg',
    timestamp: 'October 26, 2023',
    description: 'Description for card 5.',
    link: "/dessert-recipes/dessert-recipe-5",
  },
  {
    image: '/dessert.jpg',
    timestamp: 'October 26, 2023',
    description: 'Description for card 6.',
    link: "/dessert-recipes/dessert-recipe-6",
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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Snack Recipes</h1>
      <h1 className="text-2xl font-bold mb-4">For any time of the day!</h1>
      <div className="mb-8">
        {" "}
        {/* Added margin for spacing */}
        <p className="text-lg">Cooking has never been so fun right?!.</p>
      </div>
      {cardGroups.map((group, groupIndex) => (
        <div className="flex mb-20" key={groupIndex}>
          {group.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      ))}
      <div className="bg-[#E7F9FD] w-full">
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="w-full">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;