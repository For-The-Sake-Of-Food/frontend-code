"use client";
import RecipesTab from "@/components/tabs/recipes-tab";
import { Tab } from "@headlessui/react";
import { useSearchParams, useParams } from "next/navigation";
import { Fragment, useState, useEffect } from "react";
import axios from "axios";



const Condition = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoryName, setCategoryName] = useState("food");
  const params = useParams();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  console.log({ category: categoryName, condition: params.conditionName });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // if (!category && !params.conditionName) {
        //   return;
        // }

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/conditions?category=${categoryName}&condition=${params.conditionName}`
        );
        console.log("Recipe Data:", response.data);
        setRecipes(response.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.conditionName, categoryName]);

  return (
    <div>
      <div className="flex items-center mt-10 flex-col pr-10 md:pr-0">
        <h1 className="text-lg md:text-4xl font-semibold text-center mb-4 capitalize">
          {params.conditionName == "highbloodpressure"
            ? "High Blood Pressure" 
            : params.conditionName == "highcholesterol"
            ? "High Cholesterol" 
            : params.conditionName}&nbsp;Recipes.
        </h1>
        <p className="text-sm text-center pt-5 pl-8 md:pl-10 md:px-20">
          Scroll through to discover tasty recipes, and embark on a journey of
          flavor. Whether you&apos;re a seasoned chef or a kitchen beginner,
          there&apos;s something delightful waiting for you. Enjoy the
          experience!
        </p>
      </div>

      <div className="md:pl-4 md:pr-8 md:mt-8">
        <Tab.Group>
          <Tab.List
            className={
              "flex flex-row justify-between px-10 md:px-20 py-16 pr-10 md:pr-0"
            }
          >
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? "bg-black text-white rounded-full px-6 py-2 text-sm md:text-lg"
                      : "bg-white text-black rounded px-4 py-2 md:font-bold text-sm md:text-lg"
                  }
                  onClick={() => setCategoryName("food")}
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
                  onClick={() => setCategoryName("drinks")}
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
                  onClick={() => setCategoryName("dessert")}
                >
                  Snacks
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              {loading ? (
                <div className="h-screen flex flex-col  items-center justify-center">
                  <p className="text-2xl font-semibold mb-4">Please Wait </p>
                  <div className="loader ease-linear border-4 border-t-4 border-gray-200 rounded-full h-10 w-10"></div>
                </div>
              ) : recipes.length ? (
                <RecipesTab recipes={recipes} />
              ) : (
                <p>No Recipes Found</p>
              )}
            </Tab.Panel>
            <Tab.Panel>
              {loading ? (
                <div className="h-screen flex flex-col  items-center justify-center">
                  <p className="text-2xl font-semibold mb-4">Please Wait </p>
                  <div className="loader ease-linear border-4 border-t-4 border-gray-200 rounded-full h-10 w-10"></div>
                </div>
              ) : recipes.length ? (
                <RecipesTab recipes={recipes} />
              ) : (
                <p>No Recipes Found</p>
              )}{" "}
            </Tab.Panel>
            <Tab.Panel>
              {loading ? (
                <div className="h-screen flex flex-col  items-center justify-center">
                  <p className="text-2xl font-semibold mb-4">Please Wait </p>
                  <div className="loader ease-linear border-4 border-t-4 border-gray-200 rounded-full h-10 w-10"></div>
                </div>
              ) : recipes.length ? (
                <RecipesTab recipes={recipes} />
              ) : (
                <p>No Recipes Found</p>
              )}{" "}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Condition;
