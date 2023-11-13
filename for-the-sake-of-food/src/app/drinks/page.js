"use client";
import React from 'react';
import Card from "@/components/Card";
import SignupForm from "@/components/SignupForm";
const cardData = [
  {
    image: '/drinks.jpg',
    timestamp: 'October 26, 2023',
    description: 'Description for card 1.',
    link: "/drinks-recipes/drinks-recipe-1",
  },
  {
    image: '/drinks.jpg',
    timestamp: 'October 27, 2023',
    description: 'Description for card 2.',
    link: "/drinks-recipes/drinks-recipe-2",
  },
  {
    image: '/drinks.jpg',
    timestamp: 'October 26, 2023',
    description: 'Description for card 3.',
    link: "/drinks-recipes/drinks-recipe-3",
  },
  {
    image: '/drinks.jpg',
    timestamp: 'October 26, 2023',
    description: 'Description for card 4.',
    link: "/drinks-recipes/drinks-recipe-4",
  },
  {
    image: '/drinks.jpg',
    timestamp: 'October 26, 2023',
    description: 'Description for card 5.',
    link: "/drinks-recipes/drinks-recipe-5",
  },
  {
    image: '/drinks.jpg',
    timestamp: 'October 26, 2023',
    description: 'Description for card 6.',
    link: "/drinks-recipes/drinks-recipe-6",
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
      <h1 className="text-3xl font-bold mb-4">Juice Recipes</h1>
      <h1 className="text-2xl font-bold mb-4"></h1>
      <div className="mb-8">
        {" "}
        {/* Added margin for spacing */}
        <p className="text-lg">Explore our nutritious selection of juices and find your next
!.</p>
      </div>
      {cardGroups.map((group, groupIndex) => (
        <div className="flex" key={groupIndex}>
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