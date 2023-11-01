"use client";
import Dessertcard from "@/components/Dessertcard";
import Foodcard from "@/components/Foodcard";
import Juicecard from "@/components/Juicecard";
import SignupForm from "@/components/SignupForm";

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
              Join us in savoring the rich flavors of fresh, wholesome
              ingredients, and learn how to make nutrition a delightful part of
              your daily routine. &lsquo;For the Sake of Food&rsquo; is more
              than an app; it&apos;s a commitment to your well-being, a
              community of food lovers, and your personal guide to a healthier
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
            className=" h-500 rounded-md" // Use rounded-md for slightly rounded corners
          />
        </div>
        <div className="w-1/2 p-4 ">
          <p>
            Your text goes here. You can add multiple paragraphs or other
            content as needed.
          </p>
        </div>
      </div>

      <div className="mt-auto">
        <SignupForm />
      </div>
    </div>
  );
};

export default Welcome;
