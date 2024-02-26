"use client";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import FoodRecipesTabs from "@/components/tabs/food-recipes";
import JuiceRecipesTabs from "@/components/tabs/juice-recipes";
import SnackRecipesTabs from "@/components/tabs/snack-recipes";
const General = () => {
  return (
    <div>
        <div className="flex items-center mt-10 flex-col pr-10 md:pr-0">
          <h1 className="text-lg md:text-4xl font-semibold text-center mb-4">
            General Recipes.
          </h1>
          <p className="text-sm text-center pt-5 pl-8 md:pl-10 md:px-20">
          Scroll through to discover tasty recipes, and embark on a
            journey of flavor. Whether you&apos;re a seasoned chef or a
            kitchen beginner, there&apos;s something delightful waiting for
            you. Enjoy the experience!
          </p>
        </div>

      <div className="md:pl-4 md:pr-8 md:mt-8">
        <Tab.Group>
          <Tab.List className={"flex flex-row justify-between px-10 md:px-20 py-16 pr-10 md:pr-30"}>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? "bg-black text-white rounded-full px-6 py-2 text-sm md:text-lg"
                      : "bg-white text-black rounded px-4 py-2 md:font-bold text-sm md:text-lg"
                  }
                >
                  Food
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? "bg-black text-white rounded-full px-6 py-2 text-sm md:text-lg"
                      : "bg-white text-black rounded px-4 py-2 md:font-bold text-sm md:text-lg"
                  }
                >
                  Juice
                </button>
              )}
            </Tab>{" "}
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? "bg-black text-white rounded-full px-6 py-2 text-sm md:text-lg"
                      : "bg-white text-black rounded px-4 py-2 md:font-bold text-sm md:text-lg"
                  }
                >
                  Snacks
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div>
                {" "}
                <FoodRecipesTabs />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div>
                {" "}
                <JuiceRecipesTabs />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div>
                {" "}
                <SnackRecipesTabs />
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className="bg-[#E7F9FD] w-full">
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="w-full">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
