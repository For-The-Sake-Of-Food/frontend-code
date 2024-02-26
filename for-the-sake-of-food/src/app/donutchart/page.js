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
  const [cookingMethodChartData, setCookingMethodChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(format(date, "dd/MM/yyyy"));
  // Fetch groceries on component mount

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
        // Fetch data for the third pie chart
        const cookingMethodResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/cookingmethodcount`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              date: format(date, "dd/MM/yyyy"),
              userId: user?.id,
            }),
          }
        );
        const cookingMethodData = await cookingMethodResponse.json();
        setCookingMethodChartData(cookingMethodData);
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
    <div className="flex flex-col items-center">
      {/* Calendar at the top */}
      <div className="mb-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
        {date ? format(date, "dd/MM/yyyy") : <span>Pick a date</span>}
      </div>

      {/* Visualizations below the calendar */}
      <div className="flex">
        {/* First Pie Chart on the left */}
        <div className="mr-4">
          <h1>Food Nutritional Data</h1>
          {pieChartData?.length !== 0 && !isLoading ? (
            <PieChart width={200} height={200}>
              <Pie
                dataKey="value"
                isAnimationActive={true}
                data={pieChartData}
                cx={100}
                cy={100}
                outerRadius={60}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          ) : (
            <div className="h-screen flex flex-col items-center justify-center">
              <p className="text-sm md:text-2xl md:font-semibold mb-4">
                {isLoading ? "Please Wait" : "No data available on this date"}
              </p>
              {isLoading && (
                <div className="loader ease-linear border-4 border-t-4 border-gray-200 rounded-full h-10 w-10"></div>
              )}
            </div>
          )}
        </div>

        {/* Bar Chart in the middle */}
        <div className="mr-4">
          <h1>Food Name Data</h1>
          {barChartData?.length !== 0 && !isLoading ? (
            <BarChart width={400} height={400} data={barChartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="value" fill="#8884d8" />
              <BarChartTooltip />
              <Legend />
            </BarChart>
          ) : (
            <div className="h-screen flex flex-col items-center justify-center">
              <p className="text-sm md:text-2xl md:font-semibold mb-4">
                {isLoading ? "Please Wait" : "No data available on this date"}
              </p>
              {isLoading && (
                <div className="loader ease-linear border-4 border-t-4 border-gray-200 rounded-full h-10 w-10"></div>
              )}
            </div>
          )}
        </div>

        {/* Second Pie Chart on the right */}
        <div>
          <h1>Cooking Method Data</h1>
          {cookingMethodChartData?.length !== 0 && !isLoading ? (
            <PieChart width={200} height={200}>
              <Pie
                dataKey="value"
                isAnimationActive={true}
                data={cookingMethodChartData}
                cx={100}
                cy={100}
                outerRadius={60}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          ) : (
            <div className="h-screen flex flex-col items-center justify-center">
              <p className="text-sm md:text-2xl md:font-semibold mb-4">
                {isLoading ? "Please Wait" : "No data available on this date"}
              </p>
              {isLoading && (
                <div className="loader ease-linear border-4 border-t-4 border-gray-200 rounded-full h-10 w-10"></div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
