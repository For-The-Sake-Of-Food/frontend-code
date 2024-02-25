"use client";
import { Calendar } from "@/components/ui/calendar";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { BarChart, Bar } from "recharts";

export default function Example() {
  const { user } = useUser();
  console.log(user?.id, "user");
  const [date, setDate] = useState(new Date());

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  console.log(format(date, "dd/MM/yyyy"));
  // Fetch groceries on component mount

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
    
      try {
        const response = await fetch(
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
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching groceries:", error);
      } finally {
        setIsLoading(false);
      }
    };
    if (user) {
      fetchData();
    }
  }, [user, date]);
  return (
    <div className="flex justify-around">
      <div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
        {date ? format(date, "dd/MM/yyyy") : <span>Pick a date</span>}
      </div>
      {data?.length !== 0 && !isLoading ? (
        <PieChart width={900} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx={200}
            cy={200}
            outerRadius={120}
            fill="#8884d8"
            label
          />
          {/* <Pie
            dataKey="value"
            isAnimationActive
            data={data02}
            cx={500}
            cy={200}
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
          /> */}
       
          <Tooltip />
        </PieChart>
        
      ) : (
        
        <div className="h-screen flex flex-col  items-center justify-center">
          <p className="text-sm md:text-2xl md:font-semibold mb-4">
            Please Wait{" "}
          </p>
          <div className="loader ease-linear border-4 border-t-4 border-gray-200 rounded-full h-10 w-10"></div>
        </div>
      )}
       
    </div>
  );
}
