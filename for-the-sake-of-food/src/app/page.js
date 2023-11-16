"use client";
import Dessertcard from "@/components/Dessertcard";
import Foodcard from "@/components/Foodcard";
import Juicecard from "@/components/Juicecard";
import Food from "@/app/food/page";
import NavBar from "@/components/Navbar";

const Welcome = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-0 pt-24 pb-12 h-screen px-4 md:px-6">
        <div className="my-auto text-md px-10 pl-4 bg-[#E7FAFE]">
          <h1 className="text-5xl py-10 text-black font-bold">
            Cook with food straight from the source
          </h1>
          <div className="text-black pb-40">
            <p>Welcome to &lsquo;For the Sake of Food&rsquo;</p>
            <p>
              Are you ready to embark on a delicious journey towards a healthier
              and more vibrant you? Look no further! Our &lsquo;For the Sake of
              Food&rsquo; recipes are here to make nutritious eating both
              effortless and enjoyable.
            </p>
            <p>
              Join us in savoring the rich flavors of fresh wholesome
              ingredients and learn how to make nutrition a delightful part of
              your daily routine. &lsquo;For the Sake of Food&rsquo; is more
              than an app&lsquo; it&apos;s a commitment to your well-being a
              community of food lovers and your personal guide to a healthier
              and happier life.
            </p>
            <p></p>
          </div>
        </div>
        <div className="bg-[url('/hero-image.jpg')] bg-cover sm:h-96 h-48 md:h-full rounded-lg" />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl py-10 pt-60 text-black font-bold">
          Meal Categories
        </h1>
        <div className="flex justify-center space-x-40">
          <div className="w-3/4 h-80">
            <Foodcard />
          </div>
          <div className="w-3/4 h-80">
            <Juicecard />
          </div>
          <div className="w-3/4 h-80">
            <Dessertcard />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-1/2 p-6">
          <img
            src="/user.jpg"
            alt="user image"
            className=" h-500 rounded-md" // Using rounded-md for slightly rounded corners
          />
        </div>
        <div className="w-1/2 p-4">
          <h1 className="text-2xl font-bold relative">
            <span className="text-black">Why </span>
            <span className="text-[#3A8700] font-bold">Our Recipes</span>
            <span className="text-black"> Are The Best</span>
            <span className="absolute top-[-0.75rem] left-[-0.7rem] text-gray-300 text-8xl -ml-8">
              “
            </span>
          </h1>
          <p>
            At 65 its become more important than ever to make healthy food
            choices. This app has opened a world of delicious nutritious meals
            that keep me feeling vibrant and energized. Its not just an app
            its a companion on my journey to a healthier happier life. The
            recipes are easy to follow and I have never had so much fun
            experimenting in the kitchen. Thank you for making healthy eating a
            joy!
          </p>
          <p>~Carol Lynn</p>
        </div>
      </div>
  
      <div className="mt-16">
        <Food />
      </div>
      
    </div>
  );
};

export default Welcome;
