"use client";
import Food from "@/app/food/page";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Footer from "@/components/Footer";
import { useState } from "react";
import Generalcard from "@/components/Generalcard";
import Highbloodpressurecard from "@/components/Highbloodpressure";
import Highcholesterolcard from "@/components/Highcholesterol";
import Diabetescard from "@/components/Diabetescard";

const Welcome = () => {
  const { user } = useUser();
  const [dialogOpen, setDialogOpen] = useState(true);

  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    bmi: "",
    conditions: {
      diabetes: false,
      highBloodPressure: false,
      highCholesterol: false,
      none: false,
    },
  });

  const calculateBMI = () => {
    const { age, weight, height } = formData;
    const bmiValue = (weight / Math.pow(height / 100, 2)).toFixed(2);
    setFormData((prevData) => ({ ...prevData, bmi: bmiValue }));
  };

  const conditionLabels = [
    { label: "Diabetes", value: "diabetes" },
    { label: "High Blood Pressure", value: "highBloodPressure" },
    { label: "High Cholesterol Levels", value: "highCholesterol" },
    { label: "None", value: "none" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => {
        const updatedConditions = { ...prevData.conditions, [name]: checked };

        if (
          ["diabetes", "highBloodPressure", "highCholesterol"].includes(name)
        ) {
          updatedConditions.none = false;
        } else if (name === "none") {
          updatedConditions.diabetes = false;
          updatedConditions.highBloodPressure = false;
          updatedConditions.highCholesterol = false;
        }

        return { ...prevData, conditions: updatedConditions };
      });
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const inputStyle = "p-2 border border-gray-300 rounded-md w-full";

  const conditionLabelStyle = "block mb-2";

  return (
    
      <div className="relative rounded-lg overflow-hidden pl-4">
        <div className="px-6">
          <div className="relative">
            <img
              src="/heroimage2.jpg"
              alt="hero image"
              className="w-full h-48 md:h-96 object-cover rounded-lg"
            />
            <div className="h-full absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-90 md:opacity-65 rounded-lg" />
            <div className="absolute top-1/2 md:top-3/4 left-0 transform -translate-y-1/2 p-4 md:pl-8 text-black text-xl md:text-4xl mt-5 md:mt-0 ml-2 md:ml-0 text-center md:text-left">
              {user ? (
                <p className="mb-1 md:mb-4 font-semibold">
                  Hello, {user.fullName ? user.fullName : user.username}.
                </p>
              ) : (
                <p className="mb-1 md:mb-4 font-semibold">Hey There!</p>
              )}
              <p className="text-sm md:text-lg mb-3 mt-3 md:mt-0">
                <span className="text-orange-500">Welcome to</span>{" "}
                <span className="text-black">For the Sake of Food!</span>
              </p>

              <button
                className="bg-orange-500 text-white text-sm md:text-lg rounded-full text-center mr-5 md:mr-0 ml-5 md:ml-0 px-6 py-2 mb-10 md:mb-5 mt-4 md:mt-2"
                onClick={() => {
                  // Get the element to scroll to
                  const mealCategoriesSection =
                    document.getElementById("meal-categories");

                  // Check if the element exists
                  if (mealCategoriesSection) {
                    // Scroll to the element smoothly
                    mealCategoriesSection.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
              >
                See Categories
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 md:pt-20 items-center justify-center">
          <div className="text-center">
            <h1 className="font-semibold mb-2">
              <p className="text-lg md:text-4xl mt-0 md:0">
                Why <span className="text-[#3A8700]">For the Sake of Food</span>
                <span className="text-black">?</span>
              </p>
            </h1>
            <div className="flex justify-center pr-5 md:pr-0 mt-0 md:mt-8">
              <div className="max-w-6xl px-4">
                <div className="md:grid md:grid-cols-2 md:gap-20">
                  <p className="text-center text-black text-sm md:text-base md:text-left md:pl-8 pb-4 md:pb-0">
                    <em className="italic">For the Sake of Food</em> is a nutrition platform aiming to
                    improve Ugandan lifestyles. We offer personalized recipes,
                    meal planning tools, nutritional guidance, and much-needed
                    features aimed at empowering users to make informed dietary
                    choices. Our diverse range of recipes caters to various
                    dietary preferences and health goals. We&apos;re on a mission to foster a
                    healthier, happier community by providing the knowledge and
                    tools individuals need to take control of their health and
                    well-being.
                  </p>
                  <p className="text-center text-black text-sm md:text-base md:text-left md:pl-8">
                  At <em className="italic">For the Sake of Food</em>, we believe that food is more than
                    just sustenance – it&apos;s a source of joy, connection, and
                    vitality. Whether you&apos;re looking to lose weight, manage a
                    health condition, or simply eat better, our platform equips
                    you with the resources to achieve your goals. Join our
                    community today and embark on a journey to a healthier,
                    happier you. Welcome to <em className="italic">For the Sake of Food</em> – where every
                    bite is a step towards a better you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="meal-categories" className="flex flex-col pl-8 pr-2">
          <h1 className="text-lg md:text-4xl pl-4 py-10 pt-10 md:pt-20 pr-10 text-black text-center font-semibold">
            Meal Categories.
          </h1>
          <div className="flex flex-col pb-5 items-center gap-8 md:flex-row md:justify-evenly mt-0 md:gap-8 pr-5 md:pr-2">
            <div className="w-full md:w-1/3 lg:w-3/4 max-w-screen-md">
              <Generalcard className="max-h-16" />
            </div>
            <div className="w-full md:w-1/3 lg:w-3/4 max-w-screen-md">
              <Diabetescard className="max-h-16" />
            </div>
            <div className="w-full md:w-1/3 lg:w-3/4 max-w-screen-md">
              <Highbloodpressurecard className="max-h-16" />
            </div>
            <div className="w-full md:w-1/3 lg:w-3/4 max-w-screen-md">
              <Highcholesterolcard className="max-h-16" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center pr-3 pt-10 md:pt-20 pl-3 md:pl-5">
          <div className="w-full md:w-1/2 p-6 md:order-1">
            <Image
              src="/userimage.jpg"
              alt="user-image"
              width={700}
              height={500}
              className="rounded-md"
            />
          </div>
          <div className="w-full pl-10 md:w-1/2 p-4 md:order-2">
            <h1 className="text-lg md:text-4xl pl-10 pr-5 font-semibold relative">
              <span className="text-black">Why </span>
              <span className="text-[#3A8700] font-semibold">Our Recipes</span>
              <span className="text-black"> Are The Best</span>
              <span className="text-[#3A8700] font-semibold">.</span>
              <span className="absolute top-[-2.5rem] left-[-3rem] text-gray-300 text-9xl ml-4">
                “
              </span>
            </h1>
            <p className="text-sm md:text-base pl-2 md:pl-10 pr-6 mt-5">
              At 40 its become more important than ever to make healthy food
              choices. This app has opened a world of delicious nutritious meals
              that keep me feeling vibrant and energized. Its not just an app
              its a companion on my journey to a healthier happier life. The
              recipes are easy to follow and I have never had so much fun
              experimenting in the kitchen. Thank you for making healthy eating
              a joy!
            </p>
            <p className="text-sm md:text-base pl-20 md:pl-10 pr-5 mt-2">~Carol Lynn</p>
          </div>
        </div>

        <div className="pt-10">
        <h1 className="text-lg md:text-4xl pl-4 text-center font-semibold py-2 pt-10">Trending Recipes.</h1>
          <Food />
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

export default Welcome;
