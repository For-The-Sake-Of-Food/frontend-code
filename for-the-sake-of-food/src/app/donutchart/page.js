"use client";
import { Calendar } from "@/components/ui/calendar";
import { PieChart, Pie, Tooltip } from "recharts";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import React from "react";
import { useUser } from "@clerk/nextjs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as BarChartTooltip,
  Legend,
} from "recharts";

export default function Example() {
  const { user } = useUser();
  console.log(user?.id, "user");
  const [date, setDate] = useState(new Date());
  const [pieChartData, setPieChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(format(date, "dd/MM/yyyy"));
  // Fetch groceries on component mount

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);

  //     try {
  //       const response = await fetch(
  //         `${process.env.NEXT_PUBLIC_API_URL}/api/getfoodhistory`,
  //         {
  //           method: "POST",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify({
  //             date: format(date, "dd/MM/yyyy"),
  //             userId: user?.id,
  //           }),
  //         }
  //       );
  //       const data = await response.json();
  //       setData(data);
  //     } catch (error) {
  //       console.error("Error fetching groceries:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   if (user) {
  //     fetchData();
  //   }
  // }, [user, date]);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        // Fetch data for the pie chart
        const pieChartResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/getfoodhistory`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              date: format(date, "dd/MM/yyyy"),
              userId: user?.id,
            }),
          }
        );
        const pieChartData = await pieChartResponse.json();
        setPieChartData(pieChartData);

        // Fetch data for the bar chart
        const barChartResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/foodnamecount`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              date: format(date, "dd/MM/yyyy"),
              userId: user?.id,
            }),
          }
        );
        const barChartData = await barChartResponse.json();
        setBarChartData(barChartData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user, date]);
  return (
    // <div className="flex justify-around">
    //   <div>
    //     <Calendar
    //       mode="single"
    //       selected={date}
    //       onSelect={setDate}
    //       initialFocus
    //     />
    //     {date ? format(date, "dd/MM/yyyy") : <span>Pick a date</span>}
    //   </div>
    //   {data?.length !== 0 && !isLoading ? (
    //     <PieChart width={900} height={400}>
    //       <Pie
    //         dataKey="value"
    //         isAnimationActive={true}
    //         data={data}
    //         cx={200}
    //         cy={200}
    //         outerRadius={120}
    //         fill="#8884d8"
    //         label
    //       />

    //       <Tooltip />
    //     </PieChart>

    //   ) : (

    //     <div className="h-screen flex flex-col  items-center justify-center">
    //       <p className="text-sm md:text-2xl md:font-semibold mb-4">
    //         Please Wait{" "}
    //       </p>
    //       <div className="loader ease-linear border-4 border-t-4 border-gray-200 rounded-full h-10 w-10"></div>
    //     </div>
    //   )}

    // </div>
    <div className="flex flex-col lg:flex-row justify-around pl-6 md:pl-40 pt-8">
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        initialFocus
      />
      <span className="ml-24 text-sm"> {date ? format(date, "dd/MM/yyyy") : <span>Pick a date</span>}</span>
    </div>
  
    <div className="mt-8">
      {/* Render Pie Chart */}
      {pieChartData?.length !== 0 && !isLoading ? (
        <PieChart width={400} height={400}>
          {/* Pie Chart components... */}
        </PieChart>
      ) : (
        <div className="h-screen flex flex-col items-center justify-center">
          {/* No data message... */}
        </div>
      )}
  
      {/* Render Bar Chart */}
      {barChartData?.length !== 0 && !isLoading ? (
        <BarChart width={400} height={400} data={barChartData}>
          {/* Bar Chart components... */}
        </BarChart>
      ) : (
        <div className="h-screen flex flex-col items-center justify-center">
          {/* No data message... */}
        </div>
      )}
    </div>
    </div>
  );
}
