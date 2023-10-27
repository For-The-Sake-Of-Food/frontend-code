"use client";
import SignupForm from "@/components/SignupForm";


const Welcome = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4 bg-[#220901] pt-24 pb-12 h-screen px-4 md:px-6">
        <div className="bg-[url('/hero-image.jpg')] bg-cover sm:h-96 h-48 md:h-full rounded-lg"/>
        <div className="my-auto text-md text-center px-10">
          <h1 className="font-sans text-5xl py-10 text-rose-300">
            For The Sake Of Food
          </h1>
          <div className="text-white">
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
            <p>
              Let&apos;s explore the incredible world of nutritious cuisine
              together. Your journey to a vibrant, energized, and
              health-conscious you begins right here &lsquo;For the Sake of
              Food.&rsquo;
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <SignupForm />
      </div>
    </div>
  );
};

export default Welcome;
