"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import Card from "@/components/Card";
const Favorites = () => {
  const [favData, setfavData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userId } = useAuth();
  // console.log(userId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        //   `${process.env.NEXT_PUBLIC_API_URL}/api/getfavorites/${userId}`
        const response = await axios.get(
          `http://localhost:5000/api/getfavorites/${userId}`
        );

        const data = await response.data;
        
        setfavData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setfavData]);

  if (loading) {
    return (
      <div className="h-screen flex flex-col  items-center justify-center">
        <p className="text-sm md:text-2xl md:font-semibold mb-4">Please Wait </p>
        <div className="loader ease-linear border-4 border-t-4 border-gray-200 rounded-full h-10 w-10"></div>
      </div>
    );
  }
  
  return (
    <div className="relative">
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: -1,
          backgroundImage: "url('/Back-ground.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100%", 
        }}
      ></div>
      <h1 className="text-center text-lg md:text-4xl font-semibold">Favorites</h1>
      <div className="flex flex-wrap">
        {favData.map((card, index) => (
          <div className="w-full sm:w-1/2 md:w-1/3 mb-8" key={index}>
            <Card key={index} {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Favorites;
