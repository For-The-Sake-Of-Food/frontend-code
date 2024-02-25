import React, { useEffect, useState } from "react";
import Card from "@/components/Card";

export default function RecipesTab({ recipes }) {
  console.log(recipes);
  return (
    <div className="flex flex-col min-h-screen py-5 pl-8 pr-2 mt-0">
      <div className="flex flex-wrap">
        {recipes.map((card, index) => (
          <div className="w-full sm:w-1/2 md:w-1/3 mb-8" key={index}>
            <Card key={index} {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}
