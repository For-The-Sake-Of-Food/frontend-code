"use client";
import Dessertcard from "@/components/Dessertcard";
import Foodcard from "@/components/Foodcard";
import Juicecard from "@/components/Juicecard";
import Food from "@/app/food/page";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

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
    { label: 'Diabetes', value: 'diabetes' },
    { label: 'High Blood Pressure', value: 'highBloodPressure' },
    { label: 'High Cholesterol Levels', value: 'highCholesterol' },
    { label: 'None', value: 'none' },
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
    <div>
      <div className="relative rounded-lg overflow-hidden pl-4">
        <div className="px-4 md:px-6">
          <div className="relative">
            <img
              src="/heroimage2.jpg"
              alt="hero image"
              className="w-full h-32 md:h-80 object-cover rounded-lg"
            />
            <div className="h-full absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-65 rounded-lg" />
            <div className="absolute top-3/4 left-0 transform -translate-y-1/2 p-4 pl-8 text-[#1E1E1E] text-left">
              {user ? (
                <p className="text-4xl font-bold mb-2">
                  Hello, {user.fullName}.
                </p>
              ) : (
                <p className="text-5xl font-bold mb-2">Hey There!</p>
              )}
              <p className="text-lg">
                Welcome to{" "}
                <span className="text-orange-500">For the Sake of Food!</span>
              </p>
            </div>
          </div>
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

       <div className="flex flex-col md:flex-row items-center pt-10 pl-5">
        <div className="w-full md:w-1/2 p-6 md:order-1">
          <Image
            src="/user.jpg"
            alt="user image"
            width={700}
            height={500}
            className="rounded-md"
          />
        </div>
        <div className="w-full pl-10 md:w-1/2 p-4 md:order-2">
          <h1 className="text-3xl pl-10 pr-5 font-bold relative">
            <span className="text-black">Why </span>
            <span className="text-[#3A8700] font-bold">Our Recipes</span>
            <span className="text-black"> Are The Best</span>
            <span className="absolute top-[-2.5rem] left-[-3rem] text-gray-300 text-9xl ml-4">
              “
            </span>
          </h1>
          <p className="pl-10 pr-5 mt-5">
            At 50 its become more important than ever to make healthy food
            choices. This app has opened a world of delicious nutritious meals
            that keep me feeling vibrant and energized. Its not just an app its
            a companion on my journey to a healthier happier life. The recipes
            are easy to follow and I have never had so much fun experimenting in
            the kitchen. Thank you for making healthy eating a joy!
          </p>
          <p className="pl-10 pr-5">~Carol Lynn</p>
        </div>
      </div>

      <div className="mt-3">
        <Food />
      </div>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4 ">
              <label>
                Age:
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className={inputStyle}
                />
              </label>
            </div>

            <div className="mb-4">
              <label>
                Weight (kg):
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                  className={inputStyle}
                />
              </label>
            </div>

            <div className="mb-4">
              <label>
                Height (cm):
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  required
                  className={inputStyle}
                />
              </label>
            </div>

            <div className="mb-4">
              <button
                type="button"
                onClick={calculateBMI}
                className="bg-black hover:bg-[#858684] text-white font-bold py-2 px-4 rounded-full mb-4"
              >
                Calculate BMI
              </button>
              {formData.bmi && <p className="mt-2">Your BMI: {formData.bmi}</p>}
            </div>

            <div className="mb-4">
              <label className={conditionLabelStyle}>
                Conditions:
                <div className="mt-2 ml-4">
                  {conditionLabels.map((condition) => (
                    <label
                      key={condition.value}
                      className={conditionLabelStyle}
                    >
                      <input
                        type="checkbox"
                        name={condition.value}
                        checked={formData.conditions[condition.value]}
                        onChange={handleChange}
                        className="mr-2 !checked:bg-black" 
                      />
                      {condition.label}
                    </label>
                  ))}
                </div>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="bg-black hover:bg-[#858684] text-white font-bold py-2 px-4 rounded-full mb-4"
              >
                Submit
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Welcome;
