import "./Hero.css";
import Image1 from "../assets/hero-image.jpg";


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <img src={Image1} alt="Image" className="hero-image" />
        <div className="hero-text">
          <h1>For The Sake Of Food</h1>
          <p>Welcome to &lsquo;For the Sake of Food&rsquo;</p>

<p>Are you ready to embark on a delicious journey towards a healthier and more vibrant you? Look no further! Our &lsquo;For the Sake of Food&rsquo; recipes are here to make nutritious eating both effortless and enjoyable.</p>

{/* <p>In a world filled with endless culinary temptations, we're your trusted companion in discovering the power of nutritious and wholesome food. Whether you're a seasoned health enthusiast or just beginning your wellness quest, we offer a treasure trove of resources, from mouthwatering recipes to expert nutritional insights.</p> */}

<p>Join us in savoring the rich flavors of fresh, wholesome ingredients, and learn how to make nutrition a delightful part of your daily routine. &lsquo;For the Sake of Food&rsquo; is more than an app; it&apos;s a commitment to your well-being, a community of food lovers, and your personal guide to a healthier and happier life.</p>

<p>Let&apos;s explore the incredible world of nutritious cuisine together. Your journey to a vibrant, energized, and health-conscious you begins right here &lsquo;For the Sake of Food.&rsquo;</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

